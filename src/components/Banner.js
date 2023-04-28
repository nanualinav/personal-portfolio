import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg' 

export const Banner = () => {
    const [loopNo, setLoopNo] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const toRotate = ['Web Developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
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
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNo(loopNo + 1);
            setDelta(500);
        }

    }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>{`Hi I'm Alina, `}<br/> <span className='wrap'>{text}</span></h1>
                <p>After over 5 years of experience of full time iOS development I decided to move on to something new that I have wanted for a long time.</p>
                <p>For me, this means changing directions and domains in a search to learn new things and be better at Software.</p>
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
