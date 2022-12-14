import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap';
const W3Owl = () => {
    // =====================================  API start ============================================ 
    const params = useParams()
    const description = useRef(null)

    const [BlockchainCate, setBlockchainCate] = useState([])
    const [ErrorBlockchain, setErrorBlockchain] = useState(false)
    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain-section-three/${params.slug}/`);
            setBlockchainCate(api.data.response)
            description.current.innerHTML = api.data.response.content
        } catch (error) {
            setErrorBlockchain(true)
        }
    }

    useEffect(() => {
        API()
    }, [params])

    // =====================================  API end ============================================ 

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: false,
        // navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 1,
            },
            700: {
                items: 1,
            },
            1000: {
                items: 1,

            }
        },
    };
    return (
        <>
            <div className='w3-OwlCarousel-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className='image_div'>
                                <Image src={BlockchainCate.image} fluid />
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className='hero_slide_section_content'>
                                <div className='hero_content_div'>
                                    <h3 className='h3_title hero_cont_subheading'>{BlockchainCate.subheading}</h3>
                                    <h2 className='h2_title hero_cont_heading'>{BlockchainCate.title}</h2>
                                    <div className='hero_cont_para' ref={description}></div>
                                    <button className='hero_cont_btn'>Click Me</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default W3Owl