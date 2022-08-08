import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Spinner } from "react-bootstrap";
import bitcoin from "../../../assets/images/coin/Bitcoin.png";
import cardano from "../../../assets/images/coin/cardano.png";
import ether from "../../../assets/images/coin/ether.png";
import kindpng from "../../../assets/images/coin/kindpng.png";
import lether from "../../../assets/images/coin/lether.png";
import ltc from "../../../assets/images/coin/LTC.png";
import polkadot from "../../../assets/images/coin/polkadot.png";
import solana from "../../../assets/images/coin/solana.png";
import infograins from "../../../assets/images/coin/infograins.png";
import { WOW } from "wowjs";
import axios from 'axios';


const StartSomething = () => {
    // ==================================== API ======================================
    const [ApiData, setApiData] = useState([])
    const [ErrorApi, setErrorApi] = useState(false)
    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/possible-solution/`);
            setApiData(api.data.response)
        } catch (error) {
            setErrorApi(true)
        }
    }

    useEffect(() => {
        API()
    }, [])
    


    useEffect(() => {
        const wow = new WOW({ live: false });
        wow.init()
    })
    return (
        <>
            {/* ============================== StartSomething ========================= */}
            <section className='StartSomething-wrap block'>
                <Container >

                    <div className='StartSomething_details'>
                        <Row>
                            <Col sm={12} md={12} lg={6} xl={6}>
                                {ErrorApi ? 'Error'
                                    : ApiData.length === 0 ?  <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                        : <div className='StartSomething_text wow zoomIn'>
                                            <h4 className='h4_title'>{ApiData.subheading}</h4>
                                            <h2 className='h2_title'>{ApiData.heading}</h2>
                                            <p>{ApiData.content}</p>
                                            <button type='button' className='btn'>Lets Start</button>
                                        </div>
                                }
                            </Col>
                            <Col sm={12} md={12} lg={6} xl={6}>
                                <figure className='StartSomething_img wow zoomIn'>
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
                                                    <img src={solana} alt="solana" className='solana-icn' />
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