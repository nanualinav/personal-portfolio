import React from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';

/* images */
import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';
import project3 from '../assets/img/project3.png';
import project4 from '../assets/img/project4.png';

export const Projects = () => {
    const projects = [
        {
            title: 'Jammming',
            description: 'A React Web application that allows users to search the Spotify library, create a custom playlist, then save it to their Spotify account.',
            imgUrl: project1
        },
        {
            title: 'Tea Cozy',
            description: 'This project was about creating a fictional tea shop website using a design spec with all of its CSS properties and values.',
            imgUrl: project2
        },
        {
            title: 'Appointment Planner',
            description: "A React Web application that manages contacts and appointments. The app consists of two pages: one to view and add contacts and one to view and add appointments.",
            imgUrl: project3
        },
        {
            title: 'Adopt a Pet!',
            description: 'A pet adoption website that allows users to view all the animals of a particular species and view the profiles of specific animals.',
            imgUrl: project4
        }
    ];

    return (
        <section className='project' id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div>
                                    <h2>Projects</h2>
                                    <p>Here are some small projects I've been working on since I started my web development journey.</p>
                                    <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                                        <Nav variant='pills' className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                                            <Nav.Item>
                                                <Nav.Link eventKey='first'>Tab One</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey='second'>Tab Two</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content >
                                            <Tab.Pane eventKey='first'>
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard key={index} {...project} />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='second'>
                                                <p>Coming soon...</p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey='third'>
                                                <p>Coming soon...</p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
