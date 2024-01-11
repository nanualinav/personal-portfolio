import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import linkedinIcon from "../assets/img/linkedin-icon.svg";
import githubIcon from "../assets/img/github-icon.svg";

export const Banner = () => {
  return (
    <section className="banner vh-100" id="home">
      <Container className="container-fluid my-4">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h2>Hi! I'm Alina,</h2>
            <h1 className="mb-3 display-4">Software Engineer</h1>
            <div className="social-icon">
              <a
                className="me-2"
                href="https://www.linkedin.com/in/alina-nanu/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="" />
              </a>
              <a
                className="me-2"
                href="https://github.com/nanualinav"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubIcon} alt="" />
              </a>
            </div>
            <br />
            <br />
            <p>
              🖥️  I am a highly motivated developer with a passion for creating exceptional user experiences.
            </p>
          </Col>
        </Row>
      </Container>
      <div className="transition"></div>
    </section>
  );
};
