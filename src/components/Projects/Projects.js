import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import projectLogo from "../../Assets/Projects/Logo-future.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've been working on recently.
        </p>
        
        {/* Coming Soon Section */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="text-center mb-5">
            <div className="coming-soon-container">
              <img 
                src={projectLogo} 
                alt="Future Step Logo" 
                className="project-logo"
                style={{
                  width: "180px",
                  height: "auto",
                  marginBottom: "20px",
                  filter: "brightness(0.9)"
                }}
              />
              <h2 className="coming-soon-title" style={{ color: "#c084f5", marginBottom: "15px" }}>
                🚀 Projects Coming Soon
              </h2>
              <p className="coming-soon-description" style={{ color: "rgb(155 126 172)", fontSize: "1.1em", maxWidth: "600px", margin: "0 auto" }}>
                I'm currently working on some exciting projects that I can't wait to share with you! 
                Stay tuned for updates on my latest work in web development, mobile apps, and innovative solutions.
              </p>
              <div className="coming-soon-features" style={{ marginTop: "30px" }}>
                <Row>
                  <Col md={4}>
                    <div className="feature-item">
                      <h4 style={{ color: "#c084f5" }}>🌐 Web Applications</h4>
                      <p style={{ color: "rgb(155 126 172)" }}>Modern React & Node.js projects</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="feature-item">
                      <h4 style={{ color: "#c084f5" }}>📱 Mobile Apps</h4>
                      <p style={{ color: "rgb(155 126 172)" }}>Cross-platform solutions</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="feature-item">
                      <h4 style={{ color: "#c084f5" }}>🔧 APIs & Services</h4>
                      <p style={{ color: "rgb(155 126 172)" }}>Backend infrastructure</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>

        {/* Future Projects Placeholder */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="text-center">
            <div className="future-projects-placeholder" style={{ 
              border: "2px dashed #c084f5", 
              borderRadius: "15px", 
              padding: "40px", 
              marginTop: "30px",
              background: "rgba(192, 132, 245, 0.05)"
            }}>
              <h3 style={{ color: "#c084f5", marginBottom: "20px" }}>
                📋 Future Project Ideas
              </h3>
              <p style={{ color: "rgb(155 126 172)", marginBottom: "25px" }}>
                Here's where my upcoming projects will be displayed:
              </p>
              <div className="project-slots">
                <Row>
                  <Col md={4}>
                    <div className="project-slot" style={{ 
                      border: "1px solid rgba(192, 132, 245, 0.3)", 
                      borderRadius: "10px", 
                      padding: "20px", 
                      margin: "10px 0",
                      background: "rgba(192, 132, 245, 0.02)"
                    }}>
                      <h5 style={{ color: "#c084f5" }}>AI Driven Service Agent</h5>
                      <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Coming Soon</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="project-slot" style={{ 
                      border: "1px solid rgba(192, 132, 245, 0.3)", 
                      borderRadius: "10px", 
                      padding: "20px", 
                      margin: "10px 0",
                      background: "rgba(192, 132, 245, 0.02)"
                    }}>
                      <h5 style={{ color: "#c084f5" }}>Project 2</h5>
                      <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Coming Soon</p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="project-slot" style={{ 
                      border: "1px solid rgba(192, 132, 245, 0.3)", 
                      borderRadius: "10px", 
                      padding: "20px", 
                      margin: "10px 0",
                      background: "rgba(192, 132, 245, 0.02)"
                    }}>
                      <h5 style={{ color: "#c084f5" }}>Project 3</h5>
                      <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Coming Soon</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
