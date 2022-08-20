import React, { useState, useEffect } from 'react'
import OutcomeImg from '../../../../assets/images/blockchainService1.png'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export default function Outcome() {
    // ================================ API =========================================
    const { product_slug } = useParams()
    const [ImageApi, setImageApi] = useState('')
    const [HeadData, setHeadData] = useState({})
    const [ApiData, setApiData] = useState([])
    async function api() {
        try {
            const { data: { heading_and_subheading, response, image } } = await axios.get(`${process.env.REACT_APP_BASE_URL}product/product-outcome/${product_slug}/`);
            setHeadData(heading_and_subheading)
            setApiData(response)
            setImageApi(image)
        } catch (error) {

        }
    }
    useEffect(() => {
        api()
    }, [product_slug])
    return (
        <>
            <section className='outcome_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head_text'>
                                <h3 className='h3_title' style={{ color: '#36bbca' }}>{HeadData.subheading}</h3>
                                <h2 className='h2_title'>{HeadData.heading}</h2>
                                <p>{HeadData.description}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            <div className='outcome_img_wrapper'>
                                <Image src={ImageApi} fluid />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            <div className='outcome_container'>
                                <div className="outcome_content">
                                    {ApiData.map(({ title, content }, key) => {
                                        return <div className="content_box" key={key}>
                                            <h4 className='h4_title'>{title}</h4>
                                            <p>{content}</p>
                                        </div>
                                    })}
                                    {/* <div className="content_box">
                                        <h4 className='h4_title'>Heading Title Text Here</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis aut nemo officiis, natus ipsam recusandae quasi magnam eaque doloremque facilis et fugit harum. Quasi deserunt iure laborum aspernatur blanditiis consequatur.</p>
                                    </div> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
