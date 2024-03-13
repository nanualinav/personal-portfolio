import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/banner-bg.jpg";
import profileImg from "../assets/img/profile-image.jpg";

export const Skills = () => {
  return (
    <section className="skill-section pb-5" id="about">
      <Container className="mb-5">
        <Row>
          <Col xs="auto" className="mt-5">
            <img className="profile-picture" src={profileImg} alt="Profile" />
          </Col>
          <Col className="mt-5 m-4">
            <h3>Summary</h3>
            <p>
              The qualities that most define me are critical thinking, perseverance to achieve a well-made software product and enthusiasm for new technologies. 
              During my software engineering career, I have gained experience in Mobile Development, building apps for iOS devices.
            </p>
            <p>
              Besides that, I have a passion for Web Development and lately I started gaining work experience in this area, showcasing my skills and projects here, in my portfolio.  
            </p>
            <h3 className="mt-5">Key Skills</h3>
            <div className="d-inline-block tech-box me-3">
              <p>Swift</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>HTML/CSS</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>JavaScript</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>React</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Redux</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>WordPress</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Git & GitHub</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Firebase</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Networking</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Node.js (with Express.js)</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>SQL / No SQL Databases</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Salesforce Commerce Cloud (SFCC)</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Headless Commerce</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Chakra UI</p>
            </div>
            <h3>Software</h3>
            <div className="d-inline-block tech-box me-3">
              <p>Visual Studio Code</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Xcode</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Notion</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Freeform</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Adobe Creative Suite</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Sketch</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Microsoft 365 Suite</p>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Meter" />
    </section>
  );
};
