import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import SolutionImg from '../../../../assets/images/blockchainService1.png'
export default function Solution() {

    // ================================ API =========================================
    const { product_slug } = useParams()
    const [ImageApi, setImageApi] = useState('')
    const [HeadData, setHeadData] = useState({})
    const [ApiData, setApiData] = useState([])
    async function api() {
        try {
            const { data: { heading_and_subheading, response, image } } = await axios.get(`${process.env.REACT_APP_BASE_URL}product/product-solution/${product_slug}/`);
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
            <section className='solution_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head_text'>
                                <h4 className='h4_title' style={{ color: '#36bbca' }}>{HeadData.subheading}</h4>
                                <h2 className='h2_title'>{HeadData.heading}</h2>
                                <p>{HeadData.description}</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='solution_container'>
                                <div className="solution_content">
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
                        <Col sm={12} md={6} lg={6} xl={6}>
                            <div className='solution_img_wrapper'>
                                <Image src={ImageApi} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
