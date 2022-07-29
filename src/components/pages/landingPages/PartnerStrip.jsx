import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel'
import Partner from '../../../assets/media/partner_img.png'
export default function PartnerStrip() {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout:900,
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
                items: 5,

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
                                    <div className='item'>
                                        <div className='partner_img_div'>
                                            <Image src={Partner} alt="" fluid />
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='partner_img_div'>
                                            <Image src={Partner} alt="" fluid />
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='partner_img_div'>
                                            <Image src={Partner} alt="" fluid />
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
