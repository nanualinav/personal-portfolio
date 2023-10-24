import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg'; 

export const Banner = () => {
    const [loopNo, setLoopNo] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const [, setIndex] = useState(1);
    const toRotate = ['Front-End Developer', 'iOS Developer'];
    const period = 2000;

    useEffect(() => {
        const ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    });

    const handleOnConnect = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
    };

    const tick = () => {
        let i = loopNo % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setIndex(prevIndex => prevIndex - 1)
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNo(loopNo + 1)
            setIndex(1)
            setDelta(300)
        } else {
            setIndex(prevIndex => prevIndex + 1)
        }
    }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{`Hi! My name is Alina, `}<br/> <span className='wrap'>{text}</span></h1>
                <br/>
                <p>Experienced iOS and Front-End Developer with a strong passion for crafting elegant and efficient solutions. With my hands-on experience in iOS app development, I have a deep understanding of Swift and UIKit, along with expertise in integrating APIs and implementing sleek user interfaces.</p>
                <p>Additionally, I have recently ventured into web development, where I have gained valuable skills in HTML, CSS, and JavaScript, along with  React framework.</p>
                <button onClick={handleOnConnect}>Let's connect <ArrowRightCircle size={25}/></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt='Header Img'/>
            </Col>
        </Row>
      </Container>
      <div className='transition'></div>
    </section>
  )
}