import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash J </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            I am student at KMM College of Arts and Science.
            <br />
            currently studying for Bachelor of Computer Application as a first year student.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be different!"{" "}
          </p>
          <footer className="blockquote-footer">Akash J</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
