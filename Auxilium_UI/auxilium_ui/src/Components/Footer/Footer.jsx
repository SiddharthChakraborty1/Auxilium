import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer">

      <p className="span" align="center">
        <a href="#">
          <span className="contactStyle">
            <br />
            Contact us
            <br />
          </span>
        </a>
      </p>
      <p align="center" id="copyright">
        &copy; Copyrights 2021
      </p>  
    </Container>
  );
};

export default Footer;
