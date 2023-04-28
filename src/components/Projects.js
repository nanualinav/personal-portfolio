import React from 'react';
import { Container, Row, Col, Nav, Tab} from 'react-bootstrap';
import projImg from '../assets/img/project-img1.png';
import { ProjectCard } from './ProjectCard';
import 'animate.css';

export const Projects = () => {
    const projects = [
        {
            title: "test",
            description: "test",
            imgUrl: projImg
        },
        {
            title: "test",
            description: "test",
            imgUrl: projImg
        },
        {
            title: "test",
            description: "test",
            imgUrl: projImg
        }
    ];

    return (
        <section className='project' id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor etc etc etc</p>
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
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project}/>
                                                )
                                            })
                                        }
                                    </Row> 
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <p>Lorem Ipsum</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <p>Lorem Ipsum</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
