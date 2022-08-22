import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
const TechnologyPartners = () => {

    // ============================= API ==============================
    const [ApiData, setApiData] = useState([])
    async function api() {
        try {
            const { data: { response } } = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/technology-partners/`);
            setApiData(response)
        } catch (error) {

        }
    }
    useEffect(() => {
        api()
    }, [])

    return (
        <section className='TechnologyPartners-wrap' id='technology'>
            <Container>
                <div className='TechnologyPartners-title'>
                    <h2 className='h2_title'>Our Technology <span>Partners</span></h2>
                </div>
                <Row>
                    {ApiData.map(({ image }, key) => {
                        return <Col sm={6} md={6} lg={3} xl={3} key={key}>
                            <figure className='TechnologyPartners-img'>
                                <Image src={image} alt="Partner" fluid />
                            </figure>
                        </Col>
                    })}
                </Row>
            </Container>
        </section>
    )
}

export default TechnologyPartners