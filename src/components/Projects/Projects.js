import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// Removed project logo import - using text instead

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
            <div className="future-step-project-container glass-card hover-zone card-3d cursor-hover">
              <div className="project-header">
                <div style={{ marginBottom: "10px" }}>
                  <small 
                    style={{ 
                      color: "rgba(192, 132, 245, 0.7)", 
                      fontSize: "0.85em",
                      fontStyle: "italic",
                      opacity: 0.8
                    }}
                  >
                    🔧 Currently in development
                  </small>
                </div>
                <h1 
                  className="project-logo-text floating pulse-glow cursor-hover neon-text"
                  style={{
                    fontSize: "4em",
                    fontWeight: "bold",
                    marginBottom: "25px",
                    background: "linear-gradient(135deg, #c084f5, #a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "0 0 30px rgba(192, 132, 245, 0.5)"
                  }}
                >
                  Future Step
                </h1>

                <button
                  type="button"
                  onClick={() => setShowDetails(!showDetails)}
                  className="project-button"
                  style={{
                    border: "none",
                    position: "relative",
                    width: "200px",
                    height: "73px",
                    padding: "0",
                    zIndex: "2",
                    WebkitMask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
                    mask: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E\") no-repeat 50% 50%",
                    WebkitMaskSize: "100%",
                    cursor: "pointer",
                    backgroundColor: "transparent",
                    transform: "translateY(8px)"
                  }}
                >
                  <span style={{
                    position: "absolute",
                    width: "100%",
                    fontSize: "12px",
                    fontWeight: "100",
                    left: "50%",
                    top: "39%",
                    letterSpacing: "2px",
                    textAlign: "center",
                    transform: "translate(-50%,-50%)",
                    color: "#c084f5",
                    transition: "all 2s ease"
                  }}>
                    {showDetails ? "Hide information" : "View information"}
                  </span>
                </button>

                {showDetails && (
                  <>
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
                      <div className="feature-card glass-card hover-zone card-3d cursor-hover">
                        <div className="feature-icon">🔐</div>
                        <h5 style={{ color: "#c084f5", marginBottom: "10px" }}>Multi-Role Auth</h5>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Students, entities & universities</p>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="feature-card glass-card hover-zone card-3d cursor-hover">
                        <div className="feature-icon">💼</div>
                        <h5 style={{ color: "#c084f5", marginBottom: "10px" }}>Internship Management</h5>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Posting & application handling</p>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="feature-card glass-card hover-zone card-3d cursor-hover">
                        <div className="feature-icon">🏆</div>
                        <h5 style={{ color: "#c084f5", marginBottom: "10px" }}>Achievement Tracking</h5>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.9em" }}>Student progress monitoring</p>
                      </div>
                    </Col>
                    <Col md={3}>
                      <div className="feature-card glass-card hover-zone card-3d cursor-hover">
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
                      <div className="tech-card glass-card hover-zone cursor-hover">
                        <div className="tech-icon floating">⚛️</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>Next.js 15</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>App Router</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card glass-card hover-zone cursor-hover">
                        <div className="tech-icon floating">📘</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>TypeScript</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>Type Safety</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card glass-card hover-zone cursor-hover">
                        <div className="tech-icon floating">🗄️</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>SQL Server</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>Database</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card glass-card hover-zone cursor-hover">
                        <div className="tech-icon floating">🔌</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>Prisma</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>ORM</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card glass-card hover-zone cursor-hover">
                        <div className="tech-icon floating">🔐</div>
                        <h6 style={{ color: "#c084f5", marginBottom: "5px" }}>NextAuth.js</h6>
                        <p style={{ color: "rgb(155 126 172)", fontSize: "0.8em" }}>Authentication</p>
                      </div>
                    </Col>
                    <Col md={2}>
                      <div className="tech-card glass-card hover-zone cursor-hover">
                        <div className="tech-icon floating">🎨</div>
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

      </Container>
    </Container>
  );
}

export default Projects;
