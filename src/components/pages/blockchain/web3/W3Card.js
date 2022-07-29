import React from 'react'
import { Container, Row, Col } from "react-bootstrap"

const W3Card = () => {
    return (
        <>
            <section className='w3Card-wrap'>
                <Container>
                    <div className='w3Card-title'>
                        <h2 className='h2_title'>Title area</h2>
                    </div>
                    <div className='w3Card-both'>
                        <div className='w3Card-upper'>
                            <Row>
                                <Col sm={4} md={4} lg={3} xl={3}>
                                    <div className='w3-card-body'>
                                        <h3 className='h3_title'>10+</h3>
                                        <h2 className='h2_title'>Years in Business</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit</p>
                                    </div>
                                </Col>
                                <Col sm={4} md={4} lg={3} xl={3}>
                                    <div className='w3-card-body center-card'>
                                        <h3 className='h3_title'>10+</h3>
                                        <h2 className='h2_title'>Years in Business</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit</p>
                                    </div>
                                </Col>
                                <Col sm={4} md={4} lg={3} xl={3}>
                                    <div className='w3-card-body'>
                                        <h3 className='h3_title'>10+</h3>
                                        <h2 className='h2_title'>Years in Business</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className='w3card-lower'>
                            <Row>
                                <Col sm={4} md={4} lg={3} xl={3}>
                                    <div className='w3-card-body lower-card'>
                                        <h3 className='h3_title'>10+</h3>
                                        <h2 className='h2_title'>Years in Business</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit</p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default W3Card