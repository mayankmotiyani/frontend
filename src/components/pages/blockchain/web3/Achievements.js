import React from 'react';
import achievementsImg from "../../../../assets/images/background/web3/achievements2.png";
import { Container, Row, Col } from 'react-bootstrap';
import clipboard from "../../../../assets/images/background/web3/icon/clipboard.png";
// import CounterInput from 'react-bootstrap-counter';
import CountUp from 'react-countup';

const Achievements = () => {
    return (
        <>
            <section className='achievements-wrap'>
                <Container>
                    <div className='achievements-title'>
                        <h3 className='h3_title'>One-Stop Platform</h3>
                        <h2 className='h2_title'>Get ready to Count our Blockchain Achievements</h2>
                    </div>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <Row>
                                <Col sm={12} md={12} lg={12} xl={12}>
                                    <div className='achievements-card'>
                                        <h5 className='h5_title'>Title</h5>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={12} xl={12}>
                                <div className='achievements-card'>
                                        <h5 className='h5_title'>Title</h5>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={12} xl={12}>
                                    <div className='achievements-card'>
                                        <h5 className='h5_title'>Title</h5>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={12} xl={12}>
                                <div className='achievements-card'>
                                        <h5 className='h5_title'>Title</h5>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <figure className='achievements-img'>
                                <img src={achievementsImg} alt="W3 Service" />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Achievements