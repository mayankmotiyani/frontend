import React, { useEffect } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import bitcoin from "../../../assets/images/coin/Bitcoin.png";
import cardano from "../../../assets/images/coin/cardano.png";
import ether from "../../../assets/images/coin/ether.png";
import kindpng from "../../../assets/images/coin/kindpng.png";
import lether from "../../../assets/images/coin/lether.png";
import ltc from "../../../assets/images/coin/LTC.png";
import polkadot from "../../../assets/images/coin/polkadot.png";
import solana from "../../../assets/images/coin/solana.png";
import infograins from "../../../assets/images/coin/infograins.png";
import AOS from 'aos';


const StartSomething = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <>
            {/* ============================== StartSomething ========================= */}
            <section className='StartSomething-wrap block'>
                <Container >

                    <div className='StartSomething_details'>
                        <Row> 
                            <Col sm={12} md={12} lg={6} xl={6}>
                                <div className='StartSomething_text' data-aos="fade-right">
                                    <h4 className='h4_title'>Start Something Undeniably</h4>
                                    <h2 className='h2_title'> Best possible solution</h2>
                                    <p>Click to connect with us, and our team of experts will get in touch with you to know about your idea, answer your queries, and propose the best possible solution.</p>
                                    <button type='button' className='btn'>Lets Start</button>
                                </div>
                            </Col>
                            <Col  sm={12} md={12} lg={6} xl={6}>
                                <figure className='StartSomething_img'>
                                    <div className="circles_wrap">
                                        <div className="circle circle1">
                                            <div className="coin_wrap">
                                                <div className="coin">
                                                    <img src={bitcoin} alt="bitcoin" />
                                                </div>
                                                <div className="coin">
                                                    <img src={cardano} alt="cardano" />
                                                </div>
                                                <div className="coin">
                                                    <img src={ether} alt="ether" />
                                                </div>
                                                <div className="coin">
                                                    <img src={kindpng} alt="kindpng" />
                                                </div>
                                                <div className="coin">
                                                    <img src={lether} alt="lether" />
                                                </div>
                                                <div className="coin">
                                                    <img src={ltc} alt="ltc" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="circle circle2"></div>
                                        <div className="circle circle3">
                                            <div className="coin_wrap">
                                                <div className="coin polkadot_coin">
                                                    <img src={polkadot} alt="polkadot" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="circle circle4">
                                            <div className="coin_wrap">
                                                <div className="coin">
                                                    <img src={solana} alt="solana"  className='solana-icn'/>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={infograins} alt="infograins" className="circle_center" />
                                    </div>
                                </figure>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </section>
            {/* ============================== // StartSomething ========================= */}
        </>
    )
}

export default StartSomething