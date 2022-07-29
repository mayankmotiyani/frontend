import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import news from "../../../../assets/images/trusted/aceGame2.jpg"

const GameNews = () => {
    return (
        <>
            <section className='gameNews-wrap'>
                <Container>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4}>
                            <div className='gameNews-detail'>
                                <h3 className='h3_title'>Latest News</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                <div class="center">
                                    <a href="#"><span data-attr="Click">Click</span><span data-attr="Me">Me</span></a>
                                </div>
                            </div>
                        </Col>
                        <Col sm={8} md={8} lg={8} xl={8}>
                            <Row>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='gameNews-card-wrap'>
                                        <figure className="gameNews-card-img">
                                            <Image src={news} alt='News' fluid />
                                        </figure>
                                        <div className='gameNews-card-detail'>
                                            <h3 className='h3_title'>Title</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='gameNews-card-wrap'>
                                        <figure className="gameNews-card-img">
                                            <Image src={news} alt='News' fluid />
                                        </figure>
                                        <div className='gameNews-card-detail'>
                                            <h3 className='h3_title'>Title</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='gameNews-card-wrap'>
                                        <figure className="gameNews-card-img">
                                            <Image src={news} alt='News' fluid />
                                        </figure>
                                        <div className='gameNews-card-detail'>
                                            <h3 className='h3_title'>Title</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='gameNews-card-wrap'>
                                        <figure className="gameNews-card-img">
                                            <Image src={news} alt='News' fluid />
                                        </figure>
                                        <div className='gameNews-card-detail'>
                                            <h3 className='h3_title'>Title</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GameNews