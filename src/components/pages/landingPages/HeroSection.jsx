import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
// import "../../../assets/style/pages/landing_page/heroSection.scss"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HeroImage from '../../../assets/images/blockchainService1.png';
import video from "../../../assets/images/video/video_1.mp4"
import axios from 'axios';
import { IoIosWarning } from 'react-icons/io'
import Particle from '../Particle';
import { WOW } from "wowjs";
import { Link } from 'react-router-dom';
import HomeImg from '../../../assets/media/hero_banner.png';

export default function HeroSection() {
    // const [owlData, setOwlData] = useState([])
    // const getHeroContent = async () => {
    //     try {
    //         const url = await axios.get(`${process.env.REACT_APP_BASE_URL}api/hero-section-content/`);
    //         setOwlData(url.data.response)
    //         console.log("url", url.data.response);

    //     } catch (error) {
    //         console.log("error", error.message)
    //     }

    // }

    // useEffect(() => {
    //     getHeroContent()
    //     const interval = setInterval(() => {
    //         getHeroContent()
    //     }, 10000)
    //     return () => clearInterval(interval)

    // }, [])

    // ===================================== Hero Section API ===================================
    const [SliderData, setSliderData] = useState([])
    const [ErrorSlider, setErrorSlider] = useState(false)
    async function sliderContent() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/hero-section-content/`);
            setSliderData(api.data.response)
        } catch (error) {
            setErrorSlider(true)
        }
    }
    useEffect(() => {
        const wow = new WOW({ live: false });
        wow.init()
    })

    useEffect(() => {
        sliderContent()
        setTimeout(() => {
            sliderContent()
        }, 500);
    }, [])

    // ===================================== Hero Section API ===================================
    const options = {
        margin: 30,
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
            <section className='hero-wrap'>
                {/* <img src={HomeImg} alt="" /> */}
                <div className='hero_overlay'></div>
                <Particle />
                {/* <video autoPlay muted loop id="myVideo" width="100%" className='heroSection_video'>
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/ogg" />
                </video> */}
                <div className='OwlCarousel-wrap'>
                    <OwlCarousel className='owl-theme hero_slider' loop margin={10} {...options}>

                        {ErrorSlider ?
                            <div className='item'>
                                <div className='warning'>
                                    <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                                </div>
                            </div>
                            : SliderData.length === 0 ?
                                <Container>
                                    <Row>
                                        <Col lg={6} >
                                            <div className='EMPTY_loader_content'>
                                                <div className=''>
                                                    {/* <h6 className='h5_title hero_cont_subheading'>Sub Heading</h6> */}
                                                    <h2 className='h2_title EMPTY_loader_head'></h2>
                                                    <p className='para_EMPTY'></p>
                                                    <p className='para_EMPTY'></p>
                                                    <p className='para_EMPTY'></p>
                                                    <button className='EMPTY_btn'></button>
                                                    {/* <a href={ele.official_link} target={'_blank'} className='hero_cont_btn'>Visit Site</a> */}
                                                    {/* <Link to={ele.product_url} className='hero_cont_btn ms-4'>Read More</Link> */}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='EMPTY_loader_img'>
                                                {/* <Image src={ele.image} fluid /> */}
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                                : SliderData.map((ele, index) => {
                                    return <div className='item' key={index}>
                                        <div className='inner_section'>
                                            <Container>
                                                <Row>
                                                    <Col sm={12} md={6} lg={6} xl={6}>
                                                        <div className='hero_slide_section_content wow fadeIn'>
                                                            <div className='hero_content_div'>
                                                                {/* <h6 className='h5_title hero_cont_subheading'>Sub Heading</h6> */}
                                                                <h2 className='h2_title hero_cont_heading'>{ele.title}</h2>
                                                                <p className='hero_cont_para'>{ele.content}</p>
                                                                <a href={ele.official_link} target={'_blank'} className='hero_cont_btn'>Visit Site</a>
                                                                <Link to={ele.product_url} className='hero_cont_btn ms-4'>Read More</Link>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col sm={12} md={6} lg={6} xl={6}>
                                                        <div className='hero_slide_section_img'>
                                                            <Image src={ele.image} fluid />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </div>
                                })
                        }

                        {/* <div className='item'>
                            <div className='inner_section'>
                                <Container>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='hero_slide_section_content'>
                                                <div className='hero_content_div'>
                                                    <h6 className='h5_title hero_cont_subheading'>Sub Heading</h6>
                                                    <h2 className='h2_title hero_cont_heading'>Heading Text Here</h2>
                                                    <p className='hero_cont_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo ea explicabo dolor, libero eveniet et nobis, praesentium exercitationem consequatur vel quidem iusto ipsum id inventore? Amet nam repudiandae dolorum?</p>
                                                    <button className='hero_cont_btn'>Click Me</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='hero_slide_section_img'>
                                                <Image src={HeroImage} fluid />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div>
                        <div className='item'>
                            <div className='inner_section'>
                                <Container>
                                    <Row>
                                        <Col lg={6}>
                                            <div className='hero_slide_section_img'>
                                                <Image src={HeroImage} fluid />
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='hero_slide_section_content'>
                                                <div className='hero_content_div'>
                                                    <h6 className='h5_title hero_cont_subheading'>Sub Heading</h6>
                                                    <h2 className='h2_title hero_cont_heading'>Heading Text Here</h2>
                                                    <p className='hero_cont_para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nemo ea explicabo dolor, libero eveniet et nobis, praesentium exercitationem consequatur vel quidem iusto ipsum id inventore? Amet nam repudiandae dolorum?</p>
                                                    <button className='hero_cont_btn'>Click Me</button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        </div> */}
                    </OwlCarousel>
                </div>
            </section>
        </>
    )
}
