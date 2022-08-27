import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Spinner } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
import { IoIosWarning } from 'react-icons/io'
export default function PartnerStrip() {
    const [partner, setPartner] = useState([]);
    const [Errors, setErrors] = useState(false)
    const partnerData = async () => {
        try {
            const url = await axios.get(`${process.env.REACT_APP_BASE_URL}api/partner/`)
            setPartner(url.data.response)
        } catch (error) {
            setErrors(true)
        }
    }
    useEffect(() => {
        partnerData()
        setTimeout(() => {
            partnerData()
            setTimeout(() => {
                partnerData()
            }, 500);
        }, 500);
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
            300: {
                items: 2,
            },
            400: {
                items: 4,
            },
            600: {
                items: 5,
            },
            700: {
                items: 6,
            },
            1000: {
                items: 10,

            }
        },
    };
    return (
        <>
            <section className='partner_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='partner_div'>
                                <OwlCarousel className='owl-theme partner_slider' loop margin={10} {...options}>
                                    {
                                        Errors ?
                                            <div className='warning'>
                                                <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                                            </div>
                                            : partner.length === 0 ?
                                                <div className='spin_loader'>
                                                    <div className='partner_image_EMPTY'></div>
                                                </div>
                                                :
                                                partner.map((ele) => {
                                                    return (
                                                        <div className='item' key={ele.id}>
                                                            <div className='partner_img_div'>
                                                                <Image src={ele.image} alt="Partner Image" title={ele.partner_name} data-toggle="tooltip" data-placement="top"  fluid/>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                    }
                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
