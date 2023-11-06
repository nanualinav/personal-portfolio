import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export const ProjectComponent = ({
  title,
  description,
  imgUrl,
  liveUrl,
  gitHubUrl,
  technologies,
}) => {
  const open = (url) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <Row className="mb-5">
      <Col className="project">
        <h4>{title}</h4>
        {technologies.map((tech, index) => (
          <div className="d-inline-block tech-box me-3" key={index}>
            <p>{tech}</p>
          </div>
        ))}
        <p>{description}</p>
        <Button
          type="button"
          className="btn-warning me-3 btn-sm"
          onClick={() => open(liveUrl)}
        >
          View Project
        </Button>
        <Button
          type="button"
          className="btn-light btn-sm"
          onClick={() => open(gitHubUrl)}
        >
          View on GitHub
        </Button>
      </Col>
      <Col className="col-5 pb-5 mb-5">
        <img className="project-image" src={imgUrl} alt="Tea Project" />
      </Col>
    </Row>
  );
};
