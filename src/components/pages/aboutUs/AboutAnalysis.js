import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import services from "../../../assets/images/analysis.png"
const AboutAnalysis = () => {
    // =================================== API ==========================================
    const [ApiData, setApiData] = useState([])
    const [Error, setError] = useState(false)
    async function api() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/hero-section/`);
            setApiData(api.data)
        } catch (error) {
            setError(true)
        }
    }
    useEffect(() => {
        api()
    }, [])

    return (
        <>
            <section className='AboutAnalysis-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <figure className='AboutAnalysis-img'>
                                <Image src={services} fluid />
                            </figure>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            {
                                Error ? 'Error'
                                    : ApiData.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                        : <div className='AboutAnalysis-text'>
                                            <h3 className='h3_title'>{ApiData.heading_and_subheading.subheading}</h3>
                                            <h2 className='h2_title'>{ApiData.heading_and_subheading.heading}</h2>
                                            <p>{ApiData.response.description}</p>
                                            <button type='button'>Get Started Now</button>
                                        </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutAnalysis