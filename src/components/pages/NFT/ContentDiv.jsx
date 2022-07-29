import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Nft from '../../../assets/media/nft.png'
export default function ContentDiv() {
    return (
        <>
            <section className='content_div_section'>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className='content_div_cont'>
                                <div className='content_div'>
                                    <h2 className='h2_title'>Your Heading Text Here</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos qui, perspiciatis facere odio debitis esse porro fugit ullam eaque cum maxime amet nesciunt quidem consectetur? Velit blanditiis fuga aspernatur?</p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptate?</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptate?</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptate?</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptate?</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptate?</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, voluptate?</li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='content_img'>
                                <Image src={Nft} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
