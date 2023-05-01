import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

import contactImg from '../assets/img/contact-me.svg'

export const Contact = () => {
  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col size={9} md={6}>
                    <TrackVisibility>
                        {({ isVisible}) => 
                            <img className= {isVisible ? 'animate__animated animate__zoomIn' : ''} src={contactImg} alt='Contact Me'/>}
                    </TrackVisibility>
                </Col>
                <Col md={6}>
                    <form >     
                        <Row>
                        <button type='submit' onClick={()=> window.location.href='mailto:nanualinav@gmail.com'}><span>Send me an email</span></button>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}
