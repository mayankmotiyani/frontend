import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap'
import AboutImg from '../../../../assets/images/blockchainService1.png'

export default function AboutSection() {
    // =====================================  API start ============================================ 
    const param = useParams();
    // console.log(param);
    const [HeadTitle, setHeadTitle] = useState(null)
    const [AboutData, setAboutData] = useState([])
    const [Error, setError] = useState(false)
    async function FunctionalityApi() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}product/about-product/${param.product_slug}/`);
            setHeadTitle(api.data)
            setAboutData(api.data.response)
            // console.log("try", api.data.response);
        } catch (error) {
            // console.log('catch');
            setError(true)
        }
        // console.log(HeadTitle.heading_and_subheading.subheading);
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
                        : AboutData.length === 0 ? 'loading'
                            :
                            <Row>
                                <Col lg={6}>
                                    <div className='about_image_wrapper'>
                                        <Image src={AboutData.image} className='about_img' fluid />
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='about_container'>
                                        <div className='about_content'>
                                            <h4 className='h4_title'>About Product</h4>
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
