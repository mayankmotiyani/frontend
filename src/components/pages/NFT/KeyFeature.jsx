import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {AiFillFire} from 'react-icons/ai'
export default function KeyFeature() {
    return (
        <>
            <section className='keyFeature_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h4 className='h4_title'>Sub Heading</h4>
                                <h2 className='h2_title'>Your Head Title Text</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore rem suscipit modi, distinctio consectetur facere. Provident nisi tempore hic nam nostrum, ut sequi aperiam magni, error quod facilis officia.</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='key_box'>
                                    <AiFillFire/>
                                    <h4 className='h4_title'>Heading</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta rem pariatur ullam, sequi enim nisi mollitia! Dicta atque porro fugiat, ullam veritatis quaerat soluta recusandae nam commodi quasi unde veniam?</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='key_box odd'>
                                    <AiFillFire/>
                                    <h4 className='h4_title'>Heading</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta rem pariatur ullam, sequi enim nisi mollitia! Dicta atque porro fugiat, ullam veritatis quaerat soluta recusandae nam commodi quasi unde veniam?</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='key_box'>
                                    <AiFillFire/>
                                    <h4 className='h4_title'>Heading</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta rem pariatur ullam, sequi enim nisi mollitia! Dicta atque porro fugiat, ullam veritatis quaerat soluta recusandae nam commodi quasi unde veniam?</p>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='key_box odd'>
                                    <AiFillFire/>
                                    <h4 className='h4_title'>Heading</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta rem pariatur ullam, sequi enim nisi mollitia! Dicta atque porro fugiat, ullam veritatis quaerat soluta recusandae nam commodi quasi unde veniam?</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
