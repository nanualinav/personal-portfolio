import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import meter80 from '../assets/img/meter-80.svg';
import meter90 from '../assets/img/meter-90.svg';
import meter95 from '../assets/img/meter-95.svg';
import colorSharp from "../assets/img/banner-bg.jpg"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
            <Col>
                <div className='skill-bx'>
                    <h2>Skills</h2>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={meter90} alt='Meter' />
                            <h5>Web Development</h5>
                        </div>
                        <div className='item'>
                            <img src={meter95} alt='Meter' />
                            <h5>iOS Development</h5>
                        </div>
                        <div className='item'>
                            <img src={meter95} alt='Meter' />
                            <h5>Git</h5>
                        </div>
                        <div className='item'>
                            <img src={meter80} alt='Meter' />
                            <h5>Web Design</h5>
                        </div>
                        <div className='item'>
                            <img src={meter95} alt='Meter' />
                            <h5>Creativity</h5>
                        </div>
                        <div className='item'>
                            <img src={meter90} alt='Meter' />
                            <h5>API</h5>
                        </div>
                        <div className='item'>
                            <img src={meter80} alt='Meter' />
                            <h5>Responsive Design</h5>
                        </div>
                        <div className='item'>
                            <img src={meter90} alt='Meter' />
                            <h5>SEO</h5>
                        </div>
                    </Carousel>
                </div>
            </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Meter" />
    </section>
  )
}
