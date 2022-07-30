import React, { useEffect  } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import blockchainService1 from "../../../assets/images/blockchainService1.png";
import "../../../assets/style/pages/landing_page/technology.scss";
import AOS from "aos";
const Technology = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        // ===================== Technology area ========================
        <section className='technology_wrap'>
            <Container >
                <div className='technology_details'>
                    <Row>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            <div className='technology_div' data-aos="fade-right">
                                <div className='technology_text'>
                                    <h4 className='h4_title'>What We Do?</h4>
                                    <h2 className='h2_title'>We Are The Masters Of Modern Technology</h2>
                                    <p>Helping organizations tap into a decentralized ecosystem, create NFT marketplace platforms, and launch a future-ready Metaverse, too by crafting contemporary solutions that comply with the regulations.</p>
                                    <button type='button' className='btn'>More About Us</button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6}>
                            <figure className='technology_img' data-aos="fade-left">
                                <img src={blockchainService1} alt='technology' />
                            </figure>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
        // ===================== // Technology area ========================
    )
}

export default Technology