import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import pdf from "../../Assets/AhmedCV.pdf";
import profileImage from "../../Assets/أحمد العويس.jpg";
import { AiOutlineDownload } from "react-icons/ai";
import "./DownloadButton.css";

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
            <div style={{ marginTop: "30px" }}>
              <a href={pdf} download="Ahmed_Alowais_CV.pdf" className="Btn">
                <svg className="svgIcon" viewBox="0 0 384 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"></path>
                </svg>
                <div className="icon2"></div>
                <span className="tooltip">Download CV</span>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
