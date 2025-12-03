import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ScrollReveal from "../Effects/ScrollReveal";

import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <ScrollReveal direction="left">
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <Aboutcard />
            </ScrollReveal>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <ScrollReveal direction="right">
              <img src={laptopImg} alt="about" className="img-fluid" />
            </ScrollReveal>
          </Col>
        </Row>
        
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.3}>
          <Techstack />
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.5}>
          <Toolstack />
        </ScrollReveal>
      </Container>
    </Container>
  );
}

export default About;
