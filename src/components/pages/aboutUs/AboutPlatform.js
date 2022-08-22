import React, { useState, useEffect } from 'react';
import platform from "../../../assets/images/platform.png";
import { Container, Row, Image, Col } from 'react-bootstrap';
import axios from 'axios';


const AboutPlatform = () => {
    // ============================ API ===========================
    const [ApiData, setApiData] = useState([])
    const [HeadData, setHeadData] = useState({})
    const [Error, setError] = useState(false)

    async function api() {
        try {
            const { data: { heading_and_subheading, response } } = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/blockchain-for-business/`);
            setHeadData(heading_and_subheading)
            setApiData(response)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        api()
    }, [])

    return (
        <>
            <section className='AboutPlatform-wrap'>
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='AboutPlatform-text'>
                                <h3 className='h3_title'>{HeadData.subheading}</h3>
                                <h2 className='h2_title'>{HeadData.heading}</h2>
                                <p>{HeadData.description}</p>
                            </div>
                            {Error ? 'Error'
                                : ApiData.length === 0 ? 'loading...'
                                    : ApiData.map((e,key) => {
                                        return <div className='AboutPlatform-details' key={key}>
                                            <figure className='AboutPlatform-details-img'>
                                                <Image src={e.image} alt='secure' fluid />
                                            </figure>
                                            <div className="AboutPlatform-details-text">
                                                <h4 className='h4_title'>{e.title}</h4>
                                                <p>{e.description}</p>
                                            </div>
                                        </div>
                                    })}
                        </Col>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <figure className='AboutPlatform-img'>
                                <Image src={platform} fluid />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutPlatform