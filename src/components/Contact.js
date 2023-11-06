import React from "react";
import { Col, Container } from "react-bootstrap";
import "animate.css";

import coffeeImg from "../assets/img/coffeeImg.png";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container className="d-flex justify-content-center">
        <div className="mb-5">
          <h1>Let's have a chat</h1>
          <p>nanualinav@gmail.com</p>
          <img className="mr-5" src={coffeeImg} alt="Contact Me" />
          <Col>
          <button
          className="mt-4"
            type="submit"
            onClick={() =>
              (window.location.href = "mailto:nanualinav@gmail.com")
            }
          >
            <span>Send me an email</span>
          </button>
          </Col>  
        </div>
      </Container>
    </section>
  );
};
