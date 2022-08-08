import React from 'react'
import OutcomeImg from '../../../../assets/images/blockchainService1.png'
import { Container, Row, Col, Image } from 'react-bootstrap'
export default function Outcome() {
    return (
        <>
            <section className='outcome_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head_text'>
                                <h2 className='h2_title'>The Outcome</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            <div className='outcome_img_wrapper'>
                                <Image src={OutcomeImg} fluid />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            <div className='outcome_container'>
                                <div className="outcome_content">
                                    <div className="content_box">
                                        <h4 className='h4_title'>Heading Title Text Here</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aut nemo officiis, natus ipsam recusandae quasi magnam eaque doloremque facilis et fugit harum. Quasi deserunt iure laborum aspernatur blanditiis consequatur.</p>
                                    </div>
                                    <div className="content_box">
                                        <h4 className='h4_title'>Heading Title Text Here</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aut nemo officiis, natus ipsam recusandae quasi magnam eaque doloremque facilis et fugit harum. Quasi deserunt iure laborum aspernatur blanditiis consequatur.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
