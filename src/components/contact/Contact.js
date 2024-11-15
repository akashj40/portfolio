import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
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
         
          <a 
            href="mailto:akashjoshapath@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button" 
          >
            <span>Mail Me  </span> 
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
