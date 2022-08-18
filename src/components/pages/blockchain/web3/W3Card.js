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
    // console.log(p);
    async function api() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain_service/${p.slug}/`);
            // console.log(api.data);
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
                                                    {/* <h3 className='h3_title'>10+</h3> */}
                                                    <h2 className='h2_title'>{e.blockchain_service_name}</h2>
                                                    <p>{e.blockchain_content}</p>
                                                </div>
                                            </Col>
                                        })}
                                {/* <Col sm={4} md={4} lg={3} xl={3}>
                                    <div className='w3-card-body center-card'>
                                        <h3 className='h3_title'>10+</h3>
                                        <h2 className='h2_title'>Years in Business</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit</p>
                                    </div>
                                </Col>
                                <Col sm={4} md={4} lg={3} xl={3}>
                                    <div className='w3-card-body'>
                                        <h3 className='h3_title'>10+</h3>
                                        <h2 className='h2_title'>Years in Business</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit</p>
                                    </div>
                                </Col> */}
                            </Row>
                        </div>
                        {/* <div className='w3card-lower'>
                            <Row>
                                <Col sm={4} md={4} lg={3} xl={3}>
                                    <div className='w3-card-body lower-card'>
                                        <h3 className='h3_title'>10+</h3>
                                        <h2 className='h2_title'>Years in Business</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sit amet consectetur adipisicing elit</p>
                                    </div>
                                </Col>
                            </Row>
                        </div> */}
                    </div>
                </Container>
            </section>
        </>
    )
}

export default W3Card