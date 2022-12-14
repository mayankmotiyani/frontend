import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import blockchainService1 from "../../../assets/images/blockchainService1.png";
import "../../../assets/style/pages/landing_page/technology.scss";
// import AOS from "aos";
import axios from 'axios';
// import { WOW } from "wowjs";
const Technology = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000
    //     });
    // }, []);

    // useEffect(() => {
    //     const wow = new WOW({ live: false });
    //     wow.init()
    // })

    // =============================== What we Do API ============================================

    const [Data, setData] = useState([])
    const [Error, setError] = useState(false)
    async function whatWeDo() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/what-we-do/`);
            setData(api.data.response)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        whatWeDo()
    }, [])

    return (
        // ===================== Technology area ========================
        <section className='technology_wrap'>
            <Container >
                <div className='technology_details'>
                    {Error ? 'error' : Data.length === 0 ?
                        <Row>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <div className='technology_div EMPTY_loader_content'>
                                    <div className='technology_text'>
                                        <h4 className='h4_title EMPTY_loader_subhead'></h4>
                                        <h2 className='h2_title EMPTY_loader_head'></h2>
                                        <p className='para_EMPTY'></p>
                                        <p className='para_EMPTY'></p>
                                        <p className='para_EMPTY'></p>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <figure className='technology_img EMPTY_loader_img'>

                                </figure>
                            </Col>
                        </Row>
                        : <Row>
                            <Col sm={6} md={6} lg={6} xl={6}>
                            {/* <div className='technology_div wow zoomIn' data-wow-iteration="1"> */}
                                <div className='technology_div'>
                                    <div className='technology_text'>
                                        <h4 className='h4_title'>{Data[0].heading}</h4>
                                        <h2 className='h2_title'>{Data[0].title}</h2>
                                        <p>{Data[0].content}</p>
                                        <button type='button' className='btn'>More About Us</button>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>
                            {/* <figure className='technology_img wow zoomIn' data-wow-iteration="1"> */}
                                <figure className='technology_img'>
                                    <img src={Data[0].image} alt='technology' />
                                </figure>
                            </Col>
                        </Row>
                    }
                </div>
            </Container>
        </section>
        // ===================== // Technology area ========================
    )
}

export default Technology