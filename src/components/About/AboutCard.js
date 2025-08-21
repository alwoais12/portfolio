import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { CgPhone } from "react-icons/cg";
import { CgMail } from "react-icons/cg";
import { ImPointRight } from "react-icons/im";
import ahmedImage from "../../Assets/ahmed.png";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <div className="text-center mb-4">
          <img 
            src={ahmedImage} 
            alt="Ahmed Alowais" 
            className="profile-image"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "4px solid #c084f5",
              marginBottom: "20px"
            }}
          />
        </div>
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
