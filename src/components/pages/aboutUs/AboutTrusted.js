import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';
import config from './Config';
import { BsArrowRight } from "react-icons/bs";
import secure from "../../../assets/images/coin/secure.png";
import credibility from "../../../assets/images/coin/credibility.png";
import analysis from "../../../assets/images/coin/analysis.png";
import carousel from '../../../assets/images/popup_imgs.png';
import axios from 'axios';

const AboutTrusted = () => {
    // const first = useRef(null)

    // useEffect(() => {
    //     first.current.innerHTML = `${config.discription}`;
    // }, [])

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
                items: 3,
            },
            1000: {
                items: 3,

            }
        },
    };


    // ========================================= API ======================================
    const [HeadData, setHeadData] = useState({})
    const [ApiData, setApiData] = useState([])

    async function api() {
        try {
            const { data: { heading_and_subheading, response } } = await axios.get(`${process.env.REACT_APP_BASE_URL}/about_us/blockchain-development/`)
            setHeadData(heading_and_subheading)
            setApiData(response)
        } catch (error) {

        }
    }

    useEffect(() => {
        api()
        setTimeout(() => {
            api()
        }, 500);
    }, [])


    return (
        <>
            <section className='AboutTrusted-wrap'>
                <Container>
                    {/* <div id='demo' ref={first}>
                    </div> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: diss }}></div> */}
                    <div className='AboutTrusted-title'>
                        <h4 className='h4_title'>{HeadData.subheading}</h4>
                        <h2 className='h2_title'>{HeadData.heading}</h2>
                        <p>{HeadData.description}</p>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <OwlCarousel className='owl-theme hero_slider' loop margin={10} {...options}>
                                {ApiData.length === 0 ? 'Loading...'
                                    : ApiData.map(({ title, content, image }, key) => {
                                        return <div className='item' key={key}>
                                            <div className='inner_section m-4'>
                                                <div className='AboutTrusted-card-wrap'>
                                                    <figure className='AboutTrusted-card-img'>
                                                        <Image src={image} alt='Secure' />
                                                    </figure>
                                                    <div className='AboutTrusted-card-details'>
                                                        <h3 className='h3_title'>{title}</h3>
                                                        <p>{content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })

                                }
                                {/* <div className='item'>
                                    <div className='inner_section  m-4'>
                                        <div className='AboutTrusted-card-wrap'>
                                            <figure className='AboutTrusted-card-img'>
                                                <Image src={secure} alt='Secure' />
                                            </figure>
                                            <div className='AboutTrusted-card-details'>
                                                <h3 className='h3_title'>Easy To Transact</h3>
                                                <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className='inner_section m-4'>
                                        <div className='AboutTrusted-card-wrap'>
                                            <figure className='AboutTrusted-card-img'>
                                                <Image src={secure} alt='Secure' />
                                            </figure>
                                            <div className='AboutTrusted-card-details'>
                                                <h3 className='h3_title'>Easy To Transact</h3>
                                                <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </OwlCarousel>
                        </Col>
                        {/* <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='AboutTrusted-card-wrap'>
                                <figure className='AboutTrusted-card-img'>
                                    <Image src={secure} alt='Secure' />
                                </figure>
                                <div className='AboutTrusted-card-details'>
                                    <h3 className='h3_title'>Easy To Transact</h3>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                    <button type='button' className='btn'>READ MORE <BsArrowRight /></button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='AboutTrusted-card-wrap'>
                                <figure className='AboutTrusted-card-img'>
                                    <Image src={analysis} alt='Secure' />
                                </figure>
                                <div className='AboutTrusted-card-details'>
                                    <h3 className='h3_title'>No Fear Of Loss</h3>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                    <button type='button' className='btn'>READ MORE <BsArrowRight /></button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='AboutTrusted-card-wrap'>
                                <figure className='AboutTrusted-card-img'>
                                    <Image src={secure} alt='Secure' />
                                </figure>
                                <div className='AboutTrusted-card-details'>
                                    <h3 className='h3_title'>Easy To Transact</h3>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                    <button type='button' className='btn'>READ MORE <BsArrowRight /></button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={3} xl={3}>
                            <div className='AboutTrusted-card-wrap'>
                                <figure className='AboutTrusted-card-img'>
                                    <Image src={credibility} alt='Secure' />
                                </figure>
                                <div className='AboutTrusted-card-details'>
                                    <h3 className='h3_title'>No Fear Of Loss</h3>
                                    <p>Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod tempor incidiunt ut labore et dolore</p>
                                    <button type='button' className='btn'>READ MORE <BsArrowRight /></button>
                                </div>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutTrusted