import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap'

export default function Functionality() {
    // =====================================  API start ============================================ 
    const param = useParams();
    const [HeadTitle, setHeadTitle] = useState(null)
    const [FunctionalityData, setFunctionalityData] = useState([])
    const [Error, setError] = useState(false)
    async function FunctionalityApi() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}product/payment-functionality/${param.product_slug}/`);
            setHeadTitle(api.data)
            setFunctionalityData(api.data.response)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        FunctionalityApi()
    }, [param])

    // =====================================  API end ============================================ 
    return (
        <>
            <section className='functionality_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h2 className="h2_title">{HeadTitle === null ?  <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div> : HeadTitle.heading_and_subheading.subheading}</h2>
                            </div>
                        </Col>
                        {Error ? 'Error'
                            : FunctionalityData.length === 0 ?  <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                : FunctionalityData.map((e, key) => {
                                    return <Col sm={6} md={6} lg={4} xl={4} key={key}>
                                        <div className='functionality_box'>
                                            <h4 className='h4_title'>{e.title}</h4>
                                            <p>{e.content}</p>
                                        </div>
                                    </Col>
                                })}
                    </Row>
                </Container>
            </section>
        </>
    )
}
