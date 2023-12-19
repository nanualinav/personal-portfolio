import React from "react";
import { Container, Row } from "react-bootstrap";

/* images */
import portfolioImg from "../assets/img/portfolio.png";
import memoryGame from "../assets/img/game.gif"
import teaProject from "../assets/img/tea-proj.png";
import masterclassProject from "../assets/img/masterclass-proj.png";
import weatherImg from "../assets/img/weather.gif"
import { ProjectComponent } from "./ProjectComponent";

export const Projects = () => {
  const projects = [
    {
      title: "Weather Widget",
      description: `This is a three-day Weather Forecast app. It utilizes the OpenWeather API to retrieve accurate and real-time weather data`,
      imgUrl: weatherImg,
      liveUrl: "https://forecast-weather-widget.netlify.app",
      gitHubUrl: "https://github.com/nanualinav/weather-app",
      technologies: ["React", "Chakra UI", "Netlify", "OpenWeather API"]
    },
    {
      title: "Memory Game",
      description: `This project is a playful experiment with Chakra, a user-friendly React component library.
      Have fun matching pairs in this visually appealing and responsive game`,
      imgUrl: memoryGame,
      liveUrl: "https://card-memory-game-project.netlify.app",
      gitHubUrl: "https://github.com/nanualinav/memory-game",
      technologies: ["React", "Chakra UI", "Netlify"]
    },
    {
      title: "Portfolio Website v2.0",
      description:
        `This is version 2.0 of my personal portfolio made for showcasing my projects I work on. 
        It will be always in progress and updated with new information and new features. 
        Also, there you can find the updated resume which can be downloaded from the navigation bar menu.`,
      imgUrl: portfolioImg,
      liveUrl: "https://alinananu-portfolio-website.netlify.app",
      gitHubUrl: "https://github.com/nanualinav/personal-portfolio/blob/main",
      technologies: ["React", "React-bootstrap", "CSS Animation", "Netlify"],
    },
    {
      title: "Photography Masterclass",
      description:
        `This is a Photography Masterclass website built with Bootstrap. 
        In this project I learned how to utilize the components in order to create a functional and responsive web interface.`,
      imgUrl: masterclassProject,
      liveUrl: "https://nanualinav.github.io/photography-workshop/",
      gitHubUrl: "https://github.com/nanualinav/photography-workshop/tree/main",
      technologies: [
        "HTML",
        "Bootstrap",
        "Responsive Design",
        "GitHub",
        "GitLab",
      ],
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
