import React from 'react';
import microsoft from "../../../../assets/images/trusted/microsoft.png";
import OwlCarousel from 'react-owl-carousel';
import { Container, Row, Col, Image } from 'react-bootstrap'
const Featured = () => {
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
                items: 5,

            }
        },
    };
    return (
        <>
            <section className='featured-wrap'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='featured_div'>
                                <OwlCarousel className='owl-theme featured_slider' loop margin={10} {...options}>
                                    <div className='item'>
                                        <div className='featured_img_div'>
                                            <Image src={microsoft} alt="" fluid />
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='featured_img_div'>
                                            <Image src={microsoft} alt="" fluid />
                                        </div>
                                    </div>
                                    <div className='item'>
                                        <div className='featured_img_div'>
                                            <Image src={microsoft} alt="" fluid />
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

export default Featured