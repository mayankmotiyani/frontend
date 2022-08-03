import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ErrorImg from '../../assets/media/notfound.png'
import { Link } from 'react-router-dom'
export default function NotFound(props) {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================
    return (
        <>
            <section className='notFound_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='notFound_div'>
                                <img src={ErrorImg} alt="" />
                                <div>
                                    <h6>Oops.. You are on wrong path.</h6>
                                    <h2>404 Page Not Found</h2>
                                    <div className='go_back_btn'>
                                        <Link to="/">Go Back to Home</Link>
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
