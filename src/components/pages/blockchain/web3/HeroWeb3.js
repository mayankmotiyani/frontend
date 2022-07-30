import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap"
import Background from '../../../../assets/images/background/web3/banner3.jpg'
import Aos from 'aos';
const HeroWeb3 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    })
  }, [])

  return (
    <>
      <section className='web3-hero-wrap'>
        <Image className='background_img' src={Background} fluid />
        <Container>
          <Row>
            <Col sm={6} md={6} lg={8} xl={8}>
              <div className='w3-about-wrap' data-aos="fade-right">
                <h2 className='h2_title'>Best Web3 Development</h2>
                <h3 className='h3_title'>Company In India</h3>
                <p>Deep dive into the web 3 world for the ultimate experience with our tailor made web3 development services. We have top-seeded Web 3 developers in the USA and the right set of technology to launch your digital solution abiding by legal compliance.</p>
              </div>
            </Col>
            <Col sm={6} md={6} lg={4} xl={4}>
              <Form className='w3-from-wrap' data-aos="fade-left">
                <h3 className='h3_title'>Talk to our experts</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter name" className='input_field' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" className='input_field' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubjecy">
                  <Form.Control type="text" placeholder="Enter subject" className='input_field' />
                </Form.Group>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  className='input_field'
                />
                <Button type="submit">
                  Send
                </Button>
              </Form>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroWeb3