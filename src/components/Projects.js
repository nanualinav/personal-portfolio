import React from "react";
import { Container, Row } from "react-bootstrap";

/* images */
import portfolioImg from "../assets/img/portfolio.png";
import teaProject from "../assets/img/tea-proj.png";
import { ProjectComponent } from "./ProjectComponent";

export const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website v2.0",
      description:
        "This is version 2.0 of my personal portfolio made for showcasing my projects I work on. It will be always in progress and updated with new information and new features. Also, there you can find the updated resume which can be downloaded from the navigation bar menu.",
      imgUrl: portfolioImg,
      liveUrl: "https://alinananu-portfolio-website.netlify.app",
      gitHubUrl: "https://github.com/nanualinav/personal-portfolio/blob/main",
      technologies: ["React", "React-bootstrap", "CSS Animation", "Netlify"],
    },
    {
      title: "Tea Cozy",
      description:
        "This project is a fictional tea shop responsive webpage, built from scratch using flexbox layout.",
      imgUrl: teaProject,
      liveUrl: "https://nanualinav.github.io/Tea-Cozy/",
      gitHubUrl: "https://github.com/nanualinav/Tea-Cozy/tree/main",
      technologies: ["HTML", "CSS"],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <Container className="mt-3 pb-4">
        <h2 className="pb-5 pt-5">Projects</h2>
        <Row>
          {projects.map((project, index) => {
            return <ProjectComponent key={index} {...project} />;
          })}
        </Row>
      </Container>
    </section>
  );
};
