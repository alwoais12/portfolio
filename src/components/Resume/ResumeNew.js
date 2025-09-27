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
              <a href={pdf} download="Ahmed_Alowais_CV.pdf" className="download-button">
                <div className="docs">
                  <svg
                    className="css-i6dzq1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line y1="13" x2="8" y2="13"></line>
                    <line y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                  <span>Download Resume</span>
                  <svg
                    className="css-i6dzq1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line y1="12" x2="12" y2="12"></line>
                    <line y1="12" x2="12" y2="12"></line>
                    <polyline points="8,16 12,20 16,16"></polyline>
                    <line y1="12" x2="12" y2="12"></line>
                  </svg>
                </div>
                <div className="download">
                  <svg
                    className="css-i6dzq1"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7,10 12,15 17,10"></polyline>
                    <line y1="15" x2="12" y2="15"></line>
                  </svg>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
