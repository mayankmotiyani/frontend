import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import ProductImg from '../../../../assets/images/blockchainService1.png'

export default function HeroSection() {
    return (
        <>
            <section className='singleProduct_section'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='product_container'>
                                <div className='product_content'>
                                    <h2 className='h2_title'>Your Heading Text Here</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ullam libero eos quos quia architecto eveniet dolor possimus porro enim, repudiandae debitis! Doloremque, qui! Vitae odit quam molestias alias assumenda.</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='product_image_wrapper'>
                                <Image src={ProductImg} className='product_img' fluid/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
