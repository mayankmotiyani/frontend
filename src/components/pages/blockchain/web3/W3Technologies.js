import React from 'react';
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import technologies from "../../../../assets/images/blockchainService1.png";

const W3Technologies = () => {
    return (
        <>
            <section className='w3-technologies-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className='w3-technologies-content'>
                                <h3 className='h3_title'>Sub heading </h3>
                                <h2 className='h2_title'>Heading area</h2>
                                <p>Deep dive into the web 3 world for the ultimate experience with our tailor made web3 development services. We have top-seeded Web 3 developers in the USA and the right set of technology to launch your digital solution abiding by legal compliance.</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <figure className='web3-technologies-img'>
                                <Image src={technologies} alt="technologies-img" fluid />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default W3Technologies