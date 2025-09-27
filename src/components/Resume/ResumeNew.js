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
      </Container>
    </div>
  );
}

export default ResumeNew;
