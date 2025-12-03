import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import ScrollReveal from "../Effects/ScrollReveal";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <ScrollReveal direction="up">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are some projects I've been working on recently.
          </p>
        </ScrollReveal>
        
        {/* Projects Container - Side by Side */}
        <ScrollReveal direction="up" delay={0.2}>
          <Row style={{ justifyContent: "center", paddingBottom: "40px", display: "flex", gap: "25px", maxWidth: "1400px", margin: "0 auto" }}>
            
            {/* Future Step Project */}
            <Col 
              md={hoveredProject === "future-step" ? 7 : hoveredProject ? 4 : 5} 
              style={{ 
                padding: "0",
                transition: "all 0.5s ease-in-out"
              }}
            >
              <motion.div
                className="future-step-project-container glass-card hover-zone card-3d cursor-hover"
                onMouseEnter={() => setHoveredProject("future-step")}
                onMouseLeave={() => setHoveredProject(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: hoveredProject === "future-step" ? 1.02 : hoveredProject ? 0.95 : 1
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  height: hoveredProject ? "auto" : "600px",
                  minHeight: "600px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                }}
              >
                <div className="project-header" style={{ 
                  padding: "25px 20px 20px", 
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}>
                  {/* Logo with circular background */}
                  <div style={{ height: "170px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "15px" }}>
                    <div style={{
                      width: hoveredProject === "future-step" ? "180px" : "160px",
                      height: hoveredProject === "future-step" ? "180px" : "160px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(192, 132, 245, 0.25), rgba(168, 85, 247, 0.12))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow: "0 0 35px rgba(192, 132, 245, 0.4), inset 0 0 25px rgba(192, 132, 245, 0.15)"
                    }}>
                      <img 
                        src="/future.ico" 
                        alt="Future Step Logo"
                        style={{
                          width: hoveredProject === "future-step" ? "150px" : "130px",
                          height: "auto",
                          transition: "width 0.3s ease",
                          filter: "brightness(1.3) drop-shadow(0 0 18px rgba(192, 132, 245, 0.5))"
                        }}
                      />
                    </div>
                  </div>

                  {/* Project Title */}
                  <h1 
                    className="project-logo-text"
                    style={{
                      fontSize: hoveredProject === "future-step" ? "2.5em" : "2.2em",
                      fontWeight: "700",
                      marginBottom: "10px",
                      background: "linear-gradient(135deg, #c084f5, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      transition: "font-size 0.3s ease",
                      letterSpacing: "0.5px",
                      minHeight: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    Future Step
                  </h1>

                  {/* Subtitle */}
                  <h3 style={{ 
                    color: "rgba(155, 126, 172, 0.9)", 
                    marginBottom: "12px",
                    fontSize: hoveredProject === "future-step" ? "1.1em" : "1em",
                    fontWeight: "400",
                    transition: "font-size 0.3s ease",
                    lineHeight: "1.35",
                    minHeight: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    University Internship Management System
                  </h3>

                  {/* Description */}
                  <p style={{ 
                    color: "rgba(155, 126, 172, 0.85)", 
                    fontSize: hoveredProject === "future-step" ? "0.95em" : "0.88em",
                    maxWidth: "90%", 
                    margin: "0 auto 15px", 
                    lineHeight: "1.55",
                    transition: "font-size 0.3s ease",
                    minHeight: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    A platform that connects students with internship opportunities and enables achievement tracking, 
                    designed for universities and organizations across the UAE.
                  </p>

                  {/* CTA Button */}
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", justifyContent: "center", minHeight: "65px", paddingTop: "10px", paddingBottom: "5px" }}>
                    <a 
                      href="https://www.fahr.gov.ae/futurestep/en" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "12px 32px",
                        background: "linear-gradient(135deg, #c084f5, #a855f7)",
                        color: "white",
                        borderRadius: "30px",
                        textDecoration: "none",
                        fontSize: "0.95em",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(192, 132, 245, 0.4)",
                        border: "none",
                        letterSpacing: "0.3px"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 6px 20px rgba(192, 132, 245, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 4px 15px rgba(192, 132, 245, 0.4)";
                      }}
                    >
                      🚀 View Live Platform
                    </a>
                  </div>
                </div>

                {/* Features Section - Shows when expanded */}
                {hoveredProject === "future-step" && (
                  <motion.div 
                    className="project-features" 
                    style={{ marginBottom: "30px" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 style={{ color: "#c084f5", marginBottom: "20px", fontSize: "1.4em" }}>
                      ✨ Key Features
                    </h4>
                    <Row>
                      <Col md={6}>
                        <div className="feature-card glass-card hover-zone cursor-hover" style={{ marginBottom: "15px" }}>
                          <div className="feature-icon">🔐</div>
                          <h5 style={{ color: "#c084f5", marginBottom: "8px", fontSize: "1em" }}>Multi-Role Auth</h5>
                          <p style={{ color: "rgb(155 126 172)", fontSize: "0.85em" }}>Students, entities & universities</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="feature-card glass-card hover-zone cursor-hover" style={{ marginBottom: "15px" }}>
                          <div className="feature-icon">💼</div>
                          <h5 style={{ color: "#c084f5", marginBottom: "8px", fontSize: "1em" }}>Internship Management</h5>
                          <p style={{ color: "rgb(155 126 172)", fontSize: "0.85em" }}>Posting & application handling</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="feature-card glass-card hover-zone cursor-hover" style={{ marginBottom: "15px" }}>
                          <div className="feature-icon">🏆</div>
                          <h5 style={{ color: "#c084f5", marginBottom: "8px", fontSize: "1em" }}>Achievement Tracking</h5>
                          <p style={{ color: "rgb(155 126 172)", fontSize: "0.85em" }}>Student progress monitoring</p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="feature-card glass-card hover-zone cursor-hover" style={{ marginBottom: "15px" }}>
                          <div className="feature-icon">📊</div>
                          <h5 style={{ color: "#c084f5", marginBottom: "8px", fontSize: "1em" }}>Dashboard Interface</h5>
                          <p style={{ color: "rgb(155 126 172)", fontSize: "0.85em" }}>Responsive & intuitive</p>
                        </div>
                      </Col>
                    </Row>

                    <h4 style={{ color: "#c084f5", marginTop: "25px", marginBottom: "20px", fontSize: "1.4em" }}>
                      🛠️ Technologies
                    </h4>
                    <Row>
                      {[
                        { icon: "⚛️", name: "Next.js 15", desc: "App Router" },
                        { icon: "📘", name: "TypeScript", desc: "Type Safety" },
                        { icon: "🗄️", name: "SQL Server", desc: "Database" },
                        { icon: "🔌", name: "Prisma", desc: "ORM" },
                        { icon: "🔐", name: "NextAuth.js", desc: "Authentication" },
                        { icon: "🎨", name: "Tailwind CSS", desc: "Styling" }
                      ].map((tech, idx) => (
                        <Col md={4} key={idx}>
                          <div className="tech-card glass-card hover-zone cursor-hover" style={{ marginBottom: "10px" }}>
                            <div className="tech-icon floating">{tech.icon}</div>
                            <h6 style={{ color: "#c084f5", marginBottom: "3px", fontSize: "0.9em" }}>{tech.name}</h6>
                            <p style={{ color: "rgb(155 126 172)", fontSize: "0.75em" }}>{tech.desc}</p>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </motion.div>
                )}
              </motion.div>
            </Col>

            {/* 3D Simulator Report Project */}
            <Col 
              md={hoveredProject === "simulator" ? 7 : hoveredProject ? 4 : 5} 
              style={{ 
                padding: "0",
                transition: "all 0.5s ease-in-out"
              }}
            >
              <motion.div
                className="simulator-project-container glass-card hover-zone card-3d cursor-hover"
                onMouseEnter={() => setHoveredProject("simulator")}
                onMouseLeave={() => setHoveredProject(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: hoveredProject === "simulator" ? 1.02 : hoveredProject ? 0.95 : 1
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  height: hoveredProject ? "auto" : "600px",
                  minHeight: "600px",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden"
                }}
              >
                <div className="project-header" style={{ 
                  padding: "25px 20px 20px", 
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%"
                }}>
                  {/* Avatar with circular background */}
                  <div style={{ height: "170px", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "15px" }}>
                    <div style={{
                      width: hoveredProject === "simulator" ? "180px" : "160px",
                      height: hoveredProject === "simulator" ? "180px" : "160px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(79, 195, 247, 0.25), rgba(41, 182, 246, 0.12))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow: "0 0 35px rgba(79, 195, 247, 0.4), inset 0 0 25px rgba(79, 195, 247, 0.15)"
                    }}>
                      <img 
                        src="/avater.png" 
                        alt="3D Simulator Avatar"
                        style={{
                          width: hoveredProject === "simulator" ? "150px" : "130px",
                          height: "auto",
                          transition: "width 0.3s ease",
                          filter: "drop-shadow(0 0 18px rgba(79, 195, 247, 0.5))",
                          borderRadius: "50%"
                        }}
                      />
                    </div>
                  </div>

                  {/* Project Title */}
                  <h1 
                    className="project-logo-text"
                    style={{
                      fontSize: hoveredProject === "simulator" ? "2.5em" : "2.2em",
                      fontWeight: "700",
                      marginBottom: "10px",
                      background: "linear-gradient(135deg, #4fc3f7, #29b6f6)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      transition: "font-size 0.3s ease",
                      letterSpacing: "0.5px",
                      minHeight: "60px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    3D Simulator Report
                  </h1>

                  {/* Subtitle */}
                  <h3 style={{ 
                    color: "rgba(155, 126, 172, 0.9)", 
                    marginBottom: "12px",
                    fontSize: hoveredProject === "simulator" ? "1.1em" : "1em",
                    fontWeight: "400",
                    transition: "font-size 0.3s ease",
                    lineHeight: "1.35",
                    minHeight: "45px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    Interactive HR AI Agent Analytics Dashboard
                  </h3>

                  {/* Description */}
                  <p style={{ 
                    color: "rgba(155, 126, 172, 0.85)", 
                    fontSize: hoveredProject === "simulator" ? "0.95em" : "0.88em",
                    maxWidth: "90%", 
                    margin: "0 auto 15px", 
                    lineHeight: "1.55",
                    transition: "font-size 0.3s ease",
                    minHeight: "90px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    An immersive 3D visualization dashboard for HR analytics powered by AI agents, 
                    featuring real-time data insights and interactive reporting capabilities.
                  </p>

                  {/* CTA Button */}
                  <div style={{ marginTop: "auto", display: "flex", alignItems: "flex-end", justifyContent: "center", minHeight: "65px", paddingTop: "10px", paddingBottom: "5px" }}>
                    <a 
                      href="https://hr-ai-agent-report.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: "inline-block",
                        padding: "12px 32px",
                        background: "linear-gradient(135deg, #4fc3f7, #29b6f6)",
                        color: "white",
                        borderRadius: "30px",
                        textDecoration: "none",
                        fontSize: "0.95em",
                        fontWeight: "600",
                        transition: "all 0.3s ease",
                        boxShadow: "0 4px 15px rgba(79, 195, 247, 0.4)",
                        border: "none",
                        letterSpacing: "0.3px"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 6px 20px rgba(79, 195, 247, 0.5)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                        e.target.style.boxShadow = "0 4px 15px rgba(79, 195, 247, 0.4)";
                      }}
                    >
                      🚀 View Live Demo
                    </a>
                  </div>
                </div>

                {/* Key Highlights - Shows when expanded */}
                {hoveredProject === "simulator" && (
                  <motion.div 
                    className="project-highlights" 
                    style={{ marginTop: "30px" }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <h4 style={{ color: "#4fc3f7", marginBottom: "20px", fontSize: "1.4em" }}>
                      ✨ Key Highlights
                    </h4>
                    <Row>
                      {[
                        { icon: "🎯", title: "3D Visualizations", desc: "Immersive data representation" },
                        { icon: "🤖", title: "AI-Powered", desc: "Intelligent analytics" },
                        { icon: "📊", title: "Real-time Data", desc: "Live updates & insights" },
                        { icon: "✨", title: "Interactive UI", desc: "Engaging user experience" }
                      ].map((highlight, idx) => (
                        <Col md={6} key={idx}>
                          <div className="highlight-card glass-card hover-zone cursor-hover" style={{ marginBottom: "15px" }}>
                            <div className="highlight-icon" style={{ fontSize: "2em", marginBottom: "8px" }}>{highlight.icon}</div>
                            <h5 style={{ color: "#4fc3f7", marginBottom: "5px", fontSize: "1em" }}>{highlight.title}</h5>
                            <p style={{ color: "rgb(155 126 172)", fontSize: "0.85em" }}>{highlight.desc}</p>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </motion.div>
                )}
              </motion.div>
            </Col>

          </Row>
        </ScrollReveal>

        {/* Other Projects Coming Soon */}
        <ScrollReveal direction="up" delay={0.4}>
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
        </ScrollReveal>

      </Container>
    </Container>
  );
}

export default Projects;
