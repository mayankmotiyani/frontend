import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Col, Container, Row, Spinner } from 'react-bootstrap'

export default function PaymentMethod() {
    // =====================================  API start ============================================ 
    const param = useParams();
    // console.log(param);
    const [HeadTitle, setHeadTitle] = useState(null)
    const [PaymentData, setPaymentData] = useState([])
    const [Error, setError] = useState(false)
    async function paymentApi() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}product/payment-method/${param.product_slug}/`);
            setHeadTitle(api.data)
            setPaymentData(api.data.response)
            // console.log("try", api.data.response);
        } catch (error) {
            // console.log('catch');
            setError(true)
        }
        // console.log(HeadTitle.heading_and_subheading.subheading);
    }

    useEffect(() => {
        paymentApi()
    }, [param])

    // =====================================  API end ============================================ 
    return (
        <>
            <section className='payment_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="head">
                                <h2 className='h2_title'>{HeadTitle === null ?  <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div> : HeadTitle.heading_and_subheading.subheading}</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {Error ? 'Error'
                            : PaymentData.length === 0 ?  <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                : PaymentData.map((e, key) => {
                                    return <Col sm={6} md={6} lg={4} xl={4} key={key}>
                                        <div className='payment_box'>
                                            <h4 className='h4_title'>{e.title}</h4>
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
