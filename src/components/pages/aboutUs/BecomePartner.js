import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import part from "../../../assets/images/about/partner/bpart.png"
const BecomePartner = () => {
    return (
        <>
            <section className='becomePartner-wrap'>
                <Container>
                    <div className='becomePartner-title'>
                        <h2 className='h2_title'>Partnership Programs At <span>infograins</span></h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit ipsa quis modi neque quos? Quidem maxime nisi, sint dolor, illo aut odit quod, odio est maiores sunt error aspernatur fugiat.</p>
                    </div>
                    <Row>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <div className='becomePartner-card'>
                                <figure className='becomePartner-img'>
                                    <Image src={part} alt="Part" fluid />
                                </figure>
                                <h3 className='h3_title'>Regional Sales Partner</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt ad quis recusandae consectetur mollitia.</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <div className='becomePartner-card'>
                                <figure className='becomePartner-img'>
                                    <Image src={part} alt="Part" fluid />
                                </figure>
                                <h3 className='h3_title'>Regional Sales Partner</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt ad quis recusandae consectetur mollitia.</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <div className='becomePartner-card'>
                                <figure className='becomePartner-img'>
                                    <Image src={part} alt="Part" fluid />
                                </figure>
                                <h3 className='h3_title'>Regional Sales Partner</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sunt ad quis recusandae consectetur mollitia.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BecomePartner