import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/AhmedCV.pdf";
import ahmedImage from "../../Assets/ahmed.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row>
          <Col md={12} className="resume-header">
            <div className="text-center mb-4">
              <img 
                src={ahmedImage} 
                alt="Ahmed Alowais" 
                className="resume-profile-image"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "4px solid #c084f5",
                  marginBottom: "20px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
                }}
              />
            </div>
            <h1 className="resume-title">
              <strong className="purple">Resume</strong>
            </h1>
            <p style={{ color: "rgb(155 126 172)" }}>
              <strong>Ahmed Alowais</strong> - Software Developer
            </p>
          </Col>
        </Row>
        <Row className="resume">
          <Col md={12} className="resume-left">
            <h3 className="resume-title">Education</h3>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="resume-left">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
