import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "../../style.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function Contact() {
  return (
    <div>
    <Container fluid className="contact-section">
      <Particle />
      <Row className="justify-content-center"> 
         
          <a // Use an <a> tag for the link
            href="mailto:akashjoshapath@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button" // Apply the CSS class
          >
            <span>Mail Me  </span> {/* Text inside the button */}
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a>
        
      </Row>
    </Container>
    </div>
  );
}

export default Contact;