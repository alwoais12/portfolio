import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahmed </span>
            from <span className="purple"> UAE.</span>
            <br />
            I am a passionate software developer with expertise in modern web technologies.
            <br />
            I have completed my education in Computer Science and Software Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Learning New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source
            </li>
            <li className="about-activity">
              <ImPointRight /> Problem Solving
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Building innovative solutions that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ahmed</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
