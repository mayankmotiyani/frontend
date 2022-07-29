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
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <Row>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='achievements-card'>
                                        <img src={clipboard} alt="Clipboard" />
                                        <h3 className='h3_title'>
                                            <CountUp start={0} end={50} delay={0} duration={2.75}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className='h3_title' ref={countUpRef} />
                                                        <span>+</span>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </h3>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='achievements-card'>
                                        <img src={clipboard} alt="Clipboard" />
                                        <h3 className='h3_title'>
                                            <CountUp start={0} end={10} delay={0} duration={2.75}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className='h3_title' ref={countUpRef} />
                                                        <span>+</span>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </h3>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='achievements-card'>
                                        <img src={clipboard} alt="Clipboard" />
                                        <h3 className='h3_title'>
                                            <CountUp start={0} end={60} delay={0} duration={2.75}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className='h3_title' ref={countUpRef} />
                                                        <span>+</span>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </h3>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='achievements-card'>
                                        <img src={clipboard} alt="Clipboard" />
                                        <h3 className='h3_title'>
                                            <CountUp start={0} end={90} delay={0} duration={2.75}>
                                                {({ countUpRef }) => (
                                                    <div>
                                                        <span className='h3_title' ref={countUpRef} />
                                                        <span>+</span>
                                                    </div>
                                                )}
                                            </CountUp>
                                        </h3>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={6} md={6} lg={8} xl={8}>
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