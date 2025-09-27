const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const { PrismaClient } = require('@prisma/client');
const path = require('path');

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const secure = String(process.env.SMTP_SECURE || 'false') === 'true';
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass }
  });
}

app.get('/api/comments', async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(comments);
  } catch (err) {
    console.error('Failed to fetch comments', err);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

app.post('/api/comments', async (req, res) => {
  try {
    const { name, email, phone, rating, content } = req.body;

    if (!name || !email || !phone || !content || typeof rating !== 'number') {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    const comment = await prisma.comment.create({
      data: { name, email, phone, rating, content }
    });

    const transporter = createTransporter();
    const to = process.env.EMAIL_TO;
    const from = process.env.EMAIL_FROM || process.env.SMTP_USER || 'no-reply@localhost';

    if (transporter && to) {
      try {
        await transporter.sendMail({
          from,
          to,
          subject: 'New Portfolio Comment',
          text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRating: ${rating}\n\n${content}`
        });
      } catch (mailErr) {
        console.error('Failed to send email', mailErr);
      }
    }

    res.status(201).json(comment);
  } catch (err) {
    console.error('Failed to create comment', err);
    res.status(500).json({ error: 'Failed to create comment' });
  }
});

// Serve React build in production
const clientBuildPath = path.join(__dirname, 'build');
app.use(express.static(clientBuildPath));

app.get('*', (req, res) => {
  const requestedPath = req.path || '';
  if (requestedPath.startsWith('/api')) {
    return res.status(404).json({ error: 'Not found' });
  }
  return res.sendFile(path.join(clientBuildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


