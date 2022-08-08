import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import partner from "../../../assets/images/about/partner/part.png"
const TechnologyPartners = () => {
    return (
        <section className='TechnologyPartners-wrap' id='technology'>
            <Container>
                <div className='TechnologyPartners-title'>
                    <h2 className='h2_title'>Our Technology <span>Partners</span></h2>
                </div>
                <Row>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                


                    {/* <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col>
                    <Col sm={6} md={6} lg={3} xl={3}>
                        <figure className='TechnologyPartners-img'>
                            <Image src={partner} alt="Partner" fluid />
                        </figure>
                    </Col> */}
                </Row>
            </Container>
        </section>
    )
}

export default TechnologyPartners