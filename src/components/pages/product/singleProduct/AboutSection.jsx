import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import AboutImg from '../../../../assets/images/blockchainService1.png'

export default function AboutSection() {
    return (
        <>
            <section className='about_section'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='about_image_wrapper'>
                                <Image src={AboutImg} className='about_img' fluid />
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='about_container'>
                                <div className='about_content'>
                                    <h4 className='h4_title'>About Product</h4>
                                    <h2 className='h2_title'>Your Heading Text Here</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam libero eos quos quia architecto eveniet dolor possimus porro enim, repudiandae debitis! Doloremque, qui! Vitae odit quam molestias alias assumenda.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
