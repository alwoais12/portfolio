import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import projectLogo from "../../Assets/Projects/Logo-future.png";

function Projects() {
  const [showDetails, setShowDetails] = useState(false);
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
        
        {/* Future Step Project Section */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="text-center mb-5">
            <div className="future-step-project-container">
              <div className="project-header">
                <img 
                  src={projectLogo} 
                  alt="Future Step Logo" 
                  className="project-logo"
                  style={{
                    width: "200px",
                    height: "auto",
                    marginBottom: "25px",
                    filter: "brightness(1.2) contrast(1.1)"
                  }}
                />
                {!showDetails && (
                  <div style={{ marginBottom: "20px" }}>
                    <div className="project-status" style={{ 
                      background: "linear-gradient(135deg, #c084f5, #a855f7)", 
                      color: "white", 
                      padding: "15px 30px", 
                      borderRadius: "25px", 
                      display: "inline-block",
                      fontSize: "1.1em",
                      fontWeight: "600",
                      boxShadow: "0 8px 25px rgba(192, 132, 245, 0.3)"
                    }}>
                      🚧 Coming Soon - Development in Progress
                    </div>
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setShowDetails(!showDetails)}
                  style={{
                    background: "transparent",
                    border: "2px solid #c084f5",
                    color: "#c084f5",
                    padding: "10px 20px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontWeight: 600
                  }}
                >
                  {showDetails ? "Hide information" : "View information"}
                </button>

                {showDetails && (
                  <>
                    <h2 className="project-title" style={{ color: "#c084f5", marginBottom: "10px", fontSize: "2.8em" }}>
                      🚀 Future Step
                    </h2>
                    <h3 className="project-subtitle" style={{ color: "rgb(155 126 172)", marginBottom: "25px", fontSize: "1.4em", fontWeight: "400" }}>
                      University Internship Management System
                    </h3>
                    <p className="project-description" style={{ color: "rgb(155 126 172)", fontSize: "1.2em", maxWidth: "800px", margin: "0 auto 30px", lineHeight: "1.6" }}>
                      A platform that connects students with internship opportunities and enables achievement tracking, 
                      designed for universities and organizations across the UAE.
                    </p>
                  </>
                )}
              </div>

              {/* Features Section */}
              {showDetails && (
                <div className="project-features" style={{ marginBottom: "40px" }}>
                  <h4 style={{ color: "#c084f5", marginBottom: "25px", fontSize: "1.6em" }}>
                    ✨ Key Features
                  </h4>
                  <Row>
                    <Col md={3}>
                      <div className="feature-card">
                        <div className="feature-icon">🔐</div>
                        <h5 style={{ color: "#c084f5", marginBottom: "10px" }}>Multi-Role Auth</h5>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Students, entities & universities</p>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="feature-card">
                        <div className="feature-icon">💼</div>
                        <h5 style={{ color: "#c084f5", marginBottom: "10px" }}>Internship Management</h5>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Posting & application handling</p>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="feature-card">
                        <div className="feature-icon">🏆</div>
                        <h5 style={{ color: "#c084f5", marginBottom: "10px" }}>Achievement Tracking</h5>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Student progress monitoring</p>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="feature-card">
                        <div className="feature-icon">📊</div>
                        <h5 style={{ color: "#c084f5", marginBottom: "10px" }}>Dashboard Interface</h5>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Responsive & intuitive</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}

              {/* Technologies Section */}
              {showDetails && (
                <div className="project-technologies" style={{ marginBottom: "40px" }}>
                  <h4 style={{ color: "#c084f5", marginBottom: "25px", fontSize: "1.6em" }}>
                    🛠️ Technologies
                  </h4>
                  <Row>
                    <Col md={2}>
                      <div className="tech-card">
                        <div className="tech-icon">⚛️</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>Next.js 15</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>App Router</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card">
                        <div className="tech-icon">📘</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>TypeScript</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>Type Safety</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card">
                        <div className="tech-icon">🗄️</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>SQL Server</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>Database</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card">
                        <div className="tech-icon">🔌</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>Prisma</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>ORM</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card">
                        <div className="tech-icon">🔐</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>NextAuth.js</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>Authentication</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card">
                        <div className="tech-icon">🎨</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>Tailwind CSS</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>Styling</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}

              {/* Status Badge moved above; only visible when details hidden */}
            </div>
          </Col>
        </Row>

        {/* Other Projects Coming Soon */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12} className="text-center mb-5">
            <div className="coming-soon-container">
              <h2 className="coming-soon-title" style={{ color: "#c084f5", marginBottom: "15px" }}>
                🌟 More Projects Coming Soon
              </h2>
              <p className="coming-soon-description" style={{ color: "rgb(155 126 172)", fontSize: "1.1em", maxWidth: "600px", margin: "0 auto" }}>
                I'm working on several other exciting projects that I can't wait to share with you! 
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
