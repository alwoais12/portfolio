import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="E-Commerce Platform"
              description="A full-stack e-commerce platform built with React.js, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard."
              ghLink="https://github.com/ahmed/ecommerce-platform"
              demoLink="https://ecommerce-demo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Task Management App"
              description="A React-based task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Built with modern React hooks and context API."
              ghLink="https://github.com/ahmed/task-manager"
              demoLink="https://task-manager-demo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather Dashboard"
              description="A weather application built with React and OpenWeatherMap API. Features include current weather, forecasts, location-based services, and responsive design for mobile and desktop."
              ghLink="https://github.com/ahmed/weather-dashboard"
              demoLink="https://weather-demo.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Portfolio Website"
              description="A modern, responsive portfolio website built with React.js and Bootstrap. Features include smooth animations, dark/light theme toggle, and optimized performance for all devices."
              ghLink="https://github.com/ahmed/portfolio"
              demoLink="https://ahmed-portfolio.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="API Gateway Service"
              description="A microservices API gateway built with Node.js and Express. Features include rate limiting, authentication, request/response transformation, and load balancing."
              ghLink="https://github.com/ahmed/api-gateway"
              demoLink="https://api-gateway-demo.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Data Visualization Dashboard"
              description="An interactive dashboard for data visualization built with React and Chart.js. Features include multiple chart types, real-time data updates, and customizable themes."
              ghLink="https://github.com/ahmed/data-dashboard"
              demoLink="https://data-dashboard-demo.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
