import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Functionality() {
    return (
        <>
            <section className='functionality_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h2 className="h2_title">Functionality</h2>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='functionality_box'>
                                <h4 className='h4_title'>Title Text Here</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nemo quo at sint ipsam aliquid voluptatum error facere minus, blanditiis sequi ullam reprehenderit officiis laudantium itaque illo obcaecati minima porro!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='functionality_box'>
                                <h4 className='h4_title'>Title Text Here</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nemo quo at sint ipsam aliquid voluptatum error facere minus, blanditiis sequi ullam reprehenderit officiis laudantium itaque illo obcaecati minima porro!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='functionality_box'>
                                <h4 className='h4_title'>Title Text Here</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nemo quo at sint ipsam aliquid voluptatum error facere minus, blanditiis sequi ullam reprehenderit officiis laudantium itaque illo obcaecati minima porro!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
