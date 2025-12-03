import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import TargetCursor from './TargetCursor';

const cards = [
  { title: "INNOVATION", icon: "💡", desc: "Turning ideas into reality" },
  { title: "DESIGN", icon: "🎨", desc: "Crafting experiences" },
  { title: "DEVELOP", icon: "💻", desc: "Building solutions" },
  { title: "DELIVER", icon: "🚀", desc: "Shipping products" }
];

function CreativeSection() {
  const sectionRef = React.useRef(null);

  return (
    <Container 
      ref={sectionRef}
      fluid 
      className="home-about-section" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden',
        background: 'linear-gradient(to bottom left, rgba(17, 16, 16, 0.582), rgba(12, 8, 24, 0.904))',
        paddingTop: "20px",
        paddingBottom: "60px"
      }}
    >
      <TargetCursor 
        targetSelector=".cursor-target"
        spinDuration={1.5}
        hideDefaultCursor={false}
        hoverDuration={0.05}
        parallaxOn={true}
        containerRef={sectionRef}
      />
      
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h1 style={{ fontSize: "2.3em", color: "white", marginBottom: "15px", paddingTop: "20px" }}>
              UNLEASHING <strong className="purple">CREATIVITY</strong>
            </h1>
            <motion.p 
              style={{ 
                color: "rgba(255, 255, 255, 0.6)", 
                fontSize: "1.1em",
                marginBottom: "40px"
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hover below to explore my approach.
            </motion.p>
          </Col>
        </Row>
        
        <Row style={{ maxWidth: "1000px", margin: "0 auto", paddingBottom: "20px" }}>
          {cards.map((card, index) => (
            <Col md={3} sm={6} key={index} style={{ marginBottom: "20px" }}>
              <motion.div
                className="cursor-target"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  padding: "20px 25px",
                  borderRadius: "30px",
                  border: "2px dashed rgba(199, 112, 240, 0.4)",
                  background: "rgba(255, 255, 255, 0.02)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "2.5em", marginBottom: "10px" }}>{card.icon}</div>
                <h2 
                  style={{ 
                    fontSize: "1.3em", 
                    fontWeight: "bold", 
                    color: "#c770f0",
                    marginBottom: "8px",
                    letterSpacing: "1px"
                  }}
                >
                  {card.title}
                </h2>
                <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.9em", margin: 0 }}>
                  {card.desc}
                </p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default CreativeSection;
