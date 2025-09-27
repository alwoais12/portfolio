import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import ahmedImage from "../../Assets/ahmed.png";

function Home() {
  return (
    <section>
      <Container fluid className="home-section particle-bg" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                I'M
                <strong className="main-name gradient-text"> AHMED</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} className="home-image-container">
                <div className="glass-card floating transform-3d cursor-hover" style={{
                  width: "400px",
                  height: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto"
                }}>
                  <img 
                    src={ahmedImage} 
                    alt="Ahmed Alowais" 
                    className="home-profile-image morphing-shape pulse-glow"
                    style={{
                      width: "350px",
                      height: "350px",
                      objectFit: "cover",
                      borderRadius: "50%"
                    }}
                  />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
