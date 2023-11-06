import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import linkedinIcon from "../assets/img/linkedin-icon.svg";
import githubIcon from "../assets/img/github-icon.svg";
import behanceIcon from "../assets/img/behance-icon.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h2>Hi! I'm Alina,</h2>
            <h1 className="mb-3">Software Engineer</h1>
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
              <a
                className="me-2"
                href="https://www.behance.net/nanualina"
                target="_blank"
                rel="noreferrer"
              >
                <img src={behanceIcon} alt="" />
              </a>
              {/* <a
                href="https://dribbble.com/nanualinav"
                target="_blank"
                rel="noreferrer"
              >
                <img src={dribbleIcon} alt="" />
              </a> */}
            </div>
            <br />
            <br />
            <p>
              🖥️ I love exploring and creating. My goal is to blend coding
              expertise with the passion for design and deliver captivating and
              interactive web experiences.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} className="headerImg" alt="Header Img" />
          </Col>
        </Row>
      </Container>
      <div className="transition"></div>
    </section>
  );
};
