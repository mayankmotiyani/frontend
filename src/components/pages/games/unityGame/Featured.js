import React, { useState, useEffect } from 'react';
import axie from "../../../../assets/images/trusted/axie-infinity.png";
import cmc from "../../../../assets/images/trusted/cmc.png";
import microsoftPartner from "../../../../assets/images/trusted/microsoftPartner.png";
import openSea from "../../../../assets/images/trusted/openSea.png";
import crypto from "../../../../assets/images/trusted/crypto.png";
import OwlCarousel from 'react-owl-carousel';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from "axios";
const Featured = () => {
    const [partner, setPartner] = useState([]);
    const [partnerHead, setPartnerHead] = useState({});
    const [Error, setError] = useState(false)
    const partnerData = async () => {
        try {
            const url = await axios.get(`${process.env.REACT_APP_BASE_URL}game/game_partners/`)
            setPartnerHead(url.data.heading_and_subheading);
            setPartner(url.data.response)
            console.log("url.data.response", url.data);
        } catch (error) {
            setError(true)
            console.log(error)
        }
    }
    useEffect(() => {
        partnerData()
        setTimeout(() => {
            partnerData()
        }, 500)
    }, [])

    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 900,
        slidespeed: 100,
        paginationspeed: 100,
        autoplayHoverPause: true,
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
                items: 5,
            },
            1000: {
                items: 8,

            }
        },
    };
    return (
        <>
            <section className='featured-wrap'>
                <Container>
                    <div className='featured-title'>
                        <h3 className='h3_title'>{partnerHead.subheading}</h3>
                        <h2 className='h2_title'>{partnerHead.heading}</h2>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <div className='featured_div'>
                                <OwlCarousel className='owl-theme featured_slider' loop margin={10} {...options}>
                                    {
                                        Error ? "Error" :
                                            partner === 0 ? <div className='rectangle_shape'></div> :
                                                partner.map((ele, key) => {
                                                    return (
                                                        <div className='item' key={key}>
                                                            <div className='featured_img_div axie'>
                                                                <Image src={ele.image} alt="Image" fluid />
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                    }
                                    {/* <div className='item'>
                                        <div className='featured_img_div'>
                                            <Image src={cmc} alt="Cmc" fluid />
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='featured_img_div'>
                                            <Image src={microsoftPartner} alt="Microsoft Partner" fluid />
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='featured_img_div'>
                                            <Image src={openSea} alt="Open Sea" fluid />
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='featured_img_div'>
                                            <Image src={crypto} alt="Crypto" fluid />
                                        </div>
                                    </div> */}
                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Featured