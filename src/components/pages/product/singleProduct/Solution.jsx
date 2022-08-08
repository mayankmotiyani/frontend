import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import SolutionImg from '../../../../assets/images/blockchainService1.png'
export default function Solution() {
    return (
        <>
            <section className='solution_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head_text'>
                                <h2 className='h2_title'>The Solution</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='solution_container'>
                                <div className="solution_content">
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
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='solution_img_wrapper'>
                                <Image src={SolutionImg} fluid/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
