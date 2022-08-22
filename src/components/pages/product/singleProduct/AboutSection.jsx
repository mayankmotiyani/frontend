import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'

export default function AboutSection() {
    // =====================================  API start ============================================ 
    const param = useParams();
    const [HeadTitle, setHeadTitle] = useState(null)
    const [AboutData, setAboutData] = useState([])
    const [Error, setError] = useState(false)
    async function FunctionalityApi() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}product/about-product/${param.product_slug}/`);
            setHeadTitle(api.data)
            setAboutData(api.data.response)
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
            <section className='about_section'>
                <Container>
                    {Error ? 'Error'
                        : AboutData.length === 0 ?  <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                            :
                            <Row>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='about_image_wrapper'>
                                        <Image src={AboutData.image} className='about_img' fluid />
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='about_container'>
                                        <div className='about_content'>
                                            <h3 className='h3_title'>About Product</h3>
                                            <h2 className='h2_title'>{AboutData.title}</h2>
                                            <p>{AboutData.content}</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    }
                </Container>
            </section>
        </>
    )
}
