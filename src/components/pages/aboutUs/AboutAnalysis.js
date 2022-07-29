import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import services from "../../../assets/images/analysis.png"
const AboutAnalysis = () => {
    return (
        <>
            <section className='AboutAnalysis-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <figure className='AboutAnalysis-img'>
                                <Image src={services} fluid />
                            </figure>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className='AboutAnalysis-text'>
                                <h3 className='h3_title'>Welcome To Cryptoxo</h3>
                                <h2 className='h2_title'>Smart and Secure Way To Invest In Crypto</h2>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
                                <button type='button'>Get Started Now</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutAnalysis