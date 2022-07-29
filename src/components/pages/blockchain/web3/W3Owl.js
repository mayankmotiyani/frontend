import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import carousel from "../../../../assets/images/popup_imgs.png"
const W3Owl = () => {

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
        </>
    )
}

export default W3Owl