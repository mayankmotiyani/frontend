import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from "react-bootstrap"
import { useParams } from 'react-router-dom'

const W3Card = () => {
    // ================================ API ===================================
    const [ApiData, setApiData] = useState([])
    const [Error, setError] = useState(false)
    const [HeadData, setHeadData] = useState({})

    const p = useParams()
    async function api() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain_service/${p.slug}/`);
            setHeadData(api.data.heading_and_subheading)
            setApiData(api.data.response)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        api()
    }, [p])

    return (
        <>
            <section className='w3Card-wrap'>
                <Container>
                    <div className='w3Card-title'>
                        <h2 className='h2_title'>{HeadData.subheading}</h2>
                    </div>
                    <div className='w3Card-both'>
                        <div className='w3Card-upper'>
                            <Row>
                                {Error ? 'Error'
                                    : ApiData.length === 0 ? 'loading...'
                                        : ApiData.map((e, key) => {
                                            return <Col sm={12} md={6} lg={4} xl={4} key={key}>
                                                <div className={`w3-card-body card_number_${key}`}>
                                                    <h2 className='h2_title'>{e.blockchain_service_name}</h2>
                                                    <p>{e.blockchain_content}</p>
                                                </div>
                                            </Col>
                                        })}
                                
                            </Row>
                        </div>
                       
                    </div>
                </Container>
            </section>
        </>
    )
}

export default W3Card