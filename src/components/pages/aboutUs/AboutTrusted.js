import React, { useRef, useEffect } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import config from './Config';
import { BsArrowRight } from "react-icons/bs";
import secure from "../../../assets/images/coin/secure.png";
import credibility from "../../../assets/images/coin/credibility.png";
import analysis from "../../../assets/images/coin/analysis.png";
const AboutTrusted = () => {
    // const first = useRef(null)

    // useEffect(() => {
    //     first.current.innerHTML = `${config.discription}`;
    // }, [])

    return (
        <>
            <section className='AboutTrusted-wrap'>
                <Container>
                    {/* <div id='demo' ref={first}>
                    </div> */}
                    {/* <div dangerouslySetInnerHTML={{ __html: diss }}></div> */}
                    <div className='AboutTrusted-title'>
                        <h2 className='h2_title'>Most Trusted Cryptocurrency Platform</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    </div>
                    <Row>
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
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default AboutTrusted