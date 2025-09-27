import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/AhmedCV.pdf";
import profileImage from "../../Assets/أحمد العويس.jpg";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row>
          <Col md={12} className="resume-header">
            <div className="text-center mb-4">
              <img 
                src={profileImage} 
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
          <Col md={12} className="resume-left text-center">
            <div style={{ marginBottom: "40px" }}>
              <h3 className="resume-title" style={{ marginBottom: "20px" }}>
                Download My Resume
              </h3>
              <p style={{ color: "rgb(155 126 172)", fontSize: "18px", marginBottom: "30px" }}>
                Click the button below to download my complete CV in PDF format
              </p>
              <Button
                variant="primary"
                href={pdf}
                download="Ahmed_Alowais_CV.pdf"
                style={{ 
                  maxWidth: "300px",
                  padding: "15px 30px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  borderRadius: "25px",
                  background: "linear-gradient(45deg, #c084f5, #8b5cf6)",
                  border: "none",
                  boxShadow: "0 4px 15px rgba(192, 132, 245, 0.3)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 6px 20px rgba(192, 132, 245, 0.4)";
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(192, 132, 245, 0.3)";
                }}
              >
                <AiOutlineDownload style={{ marginRight: "10px" }} />
                Download CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
