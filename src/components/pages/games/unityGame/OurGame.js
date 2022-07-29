import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import gameGirl from "../../../../assets/images/trusted/gameGirl.png"

const OurGame = () => {
    return (
        <>
            <section className='ourGame-wrap'>
                <Container>
                    <div className='ourGame-title'>
                        <h3 className='h3_title'>Our Game</h3>
                        <h2 className='h2_title'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                    </div>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4}>
                            <div className='ourGame-card-wrap'>
                                <figure className="ourGame-card-img">
                                    <Image src={gameGirl} alt='Ace' />
                                </figure>
                                <div className='ourGame-card-detail'>
                                    <h3 className='h3_title'>Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} md={4} lg={4} xl={4}>
                            <div className='ourGame-card-wrap'>
                                <figure className="ourGame-card-img">
                                    <Image src={gameGirl} alt='Ace' />
                                </figure>
                                <div className='ourGame-card-detail'>
                                    <h3 className='h3_title'>Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4} md={4} lg={4} xl={4}>
                            <div className='ourGame-card-wrap'>
                                <figure className="ourGame-card-img">
                                    <Image src={gameGirl} alt='Ace' />
                                </figure>
                                <div className='ourGame-card-detail'>
                                    <h3 className='h3_title'>Title</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OurGame