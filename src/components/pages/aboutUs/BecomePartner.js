import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
const BecomePartner = () => {
    const [ApiData, setApiData] = useState([])
    const [HeadData, setHeadData] = useState({})
    const [Error, setError] = useState(false)
    async function api() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/build-connection/`);
            setApiData(api.data.response)
            setHeadData(api.data.heading_and_subheading)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        api()
    }, [])

    return (
        <>
            <section className='becomePartner-wrap' id='ourPartner'>
                <Container>
                    <div className='becomePartner-title'>
                        <h2 className='h2_title'>{HeadData.heading}</h2>
                        <p>{HeadData.description}</p>
                    </div>
                    <Row>
                        {
                            Error ? 'Error'
                                : ApiData.length === 0 ? 'loading...'
                                    : ApiData.map((e, key) => {
                                        return <Col sm={6} md={6} lg={4} xl={4} key={key}>
                                            <div className='becomePartner-card'>
                                                <figure className='becomePartner-img'>
                                                    <Image src={e.image} alt="Part" fluid />
                                                </figure>
                                                <h3 className='h3_title'>{e.title}</h3>
                                                <p>{e.content}</p>
                                            </div>
                                        </Col>
                                    })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default BecomePartner