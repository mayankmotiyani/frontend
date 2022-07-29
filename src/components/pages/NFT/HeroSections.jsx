import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function HeroSections() {
    return (
        <>
            <section className='nft_heroSections'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={8} xl={8}>
                            <div className='nftHero-about-wrap'>
                                <h2 className='h2_title'>NFT</h2>
                                <h3 className='h3_title'>Development Company</h3>
                                <p>Step into the world of innovation where every opportunity level up your target audience with monetary, physical, and mental benefits. We provide Unity Game development services with top-notch blockchain experts that offer unlimited potential to scale your business and players.</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <Form className='nftHero-from-wrap'>
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
