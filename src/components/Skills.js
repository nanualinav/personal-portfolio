import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "../assets/img/banner-bg.jpg";
import profileImg from "../assets/img/profile-image.jpg";

export const Skills = () => {
  return (
    <section className="skill-section pb-5" id="skills">
      <Container className="mb-5">
        <Row>
          <Col xs="auto" className="mt-5">
            <img className="profile-picture" src={profileImg} alt="Profile" />
          </Col>
          <Col className="mt-5 m-4">
            <h3>Summary</h3>
            <p>
              My journey in the world of technology began a long time ago, with
              mobile app development, where I was building applications for
              iPhone and iPad devices. As a developer with a desire for continuous
              growth and learning, I am now shifting my focus to Frontend
              Development.
            </p>
            <p>
              My solid foundation in iOS development has equipped me with strong
              problem-solving abilities, a keen eye for detail, and a commitment
              to delivering high-quality code.
            </p>
            <h3 className="mt-5">Key Skills</h3>
            <div className="d-inline-block tech-box me-3">
              <p>JavaScript</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>React</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>HTML/CSS</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>WordPress</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Git</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Firebase</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Swift</p>
            </div>
            <div className="d-inline-block tech-box me-3">
              <p>Networking (RESTful APIs, JSON, XML)</p>
            </div>
            <h3>Software</h3>
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
