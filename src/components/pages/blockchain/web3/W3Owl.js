import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import carousel from "../../../../assets/images/popup_imgs.png"
const W3Owl = () => {
    // =====================================  API start ============================================ 
    const location = useLocation();
    const filterApi_PathName = location.pathname.slice(1);
    // console.log(filterApi_PathName);

    const [BlockchainCate, setBlockchainCate] = useState([])
    const [ErrorBlockchain, setErrorBlockchain] = useState(false)
    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
            setBlockchainCate(api.data.response)
            // console.log("try", api.data.response);
        } catch (error) {
            setErrorBlockchain(true)
        }
    }

    useEffect(() => {
        API()
    }, [filterApi_PathName])

    // =====================================  API end ============================================ 

    const options = {
        margin: 0,
        responsiveClass: true,
        nav: true,
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
                            <OwlCarousel className='owl-theme hero_slider' loop margin={10} {...options}>
                                <div className='item'>
                                    <div className='inner_section'>
                                        <div className='hero_slide_section_img'>
                                            <Image src={carousel} fluid />
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='inner_section'>
                                        <div className='hero_slide_section_img'>
                                            <Image src={carousel} fluid />
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='inner_section'>
                                        <div className='hero_slide_section_img'>
                                            <Image src={carousel} fluid />
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            {ErrorBlockchain ? 'Error'
                                : BlockchainCate.length === 0 ? 'loading...'
                                    : <div className='hero_slide_section_content'>
                                        <div className='hero_content_div'>
                                            <h6 className='h5_title hero_cont_subheading'>Sub Heading</h6>
                                            <h2 className='h2_title hero_cont_heading'>{BlockchainCate.Section3.title}</h2>
                                            <p className='hero_cont_para'>{BlockchainCate.Section3.content}</p>
                                            <button className='hero_cont_btn'>Click Me</button>
                                        </div>
                                    </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default W3Owl