import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../assets/style/pages/landing_page/launchPlatform.scss";
import { IoIosWarning } from 'react-icons/io';
// import { WOW } from "wowjs";
const LaunchPlatform = () => {
    // ======================================== Box Data Api ===============================================
    const [BoxContent, setBoxContent] = useState([])
    const [HeadSection, setHeadSection] = useState({})
    const [ErrorBox, setErrorBox] = useState(false)
    async function boxData() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/our-mastery/`);
            setHeadSection(api.data.heading_and_subheading)
            setBoxContent(api.data.response)
        } catch (error) {
            setErrorBox(true)
        }
    }
    // useEffect(() => {
    //     const wow = new WOW({ live: false });
    //     wow.init()
    // })
    useEffect(() => {
        boxData()
    }, [])

    // ======================================== Box Data Api ===============================================
    return (
        <>
            <section className='LaunchPlatform-wrap'>
                <Container >
                    <div className='LaunchPlatform-details'>
                        <div className='LaunchPlatform-heading'>
                            <h4 className='h4_title'>{HeadSection.subheading}</h4>
                            <h2 className='h2_title'>{HeadSection.heading}</h2>
                        </div>
                        <Row>
                            {ErrorBox ?
                                <div className='warning'>
                                    <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                                </div>
                                : BoxContent.length === 0 ?
                                    <Row>
                                        <Col sm={6} md={6} lg={4} xl={4}>
                                            <div className="flip-card_EMPTY"></div>
                                        </Col>
                                        <Col sm={6} md={6} lg={4} xl={4}>
                                            <div className="flip-card_EMPTY"></div>
                                        </Col>
                                        <Col sm={6} md={6} lg={4} xl={4}>
                                            <div className="flip-card_EMPTY"></div>
                                        </Col>
                                        <Col sm={6} md={6} lg={4} xl={4}>
                                            <div className="flip-card_EMPTY"></div>
                                        </Col>
                                        <Col sm={6} md={6} lg={4} xl={4}>
                                            <div className="flip-card_EMPTY"></div>
                                        </Col>
                                        <Col sm={6} md={6} lg={4} xl={4}>
                                            <div className="flip-card_EMPTY"></div>
                                        </Col>
                                    </Row>
                                    : BoxContent.map((box, key) => {
                                        return <Col sm={6} md={6} lg={4} xl={4} key={key}>
                                            <div className="flip-card">
                                            {/* <div className="flip-card wow zoomIn"> */}
                                                <div className="flip-card-inner">
                                                    <div className="flip-card-front"
                                                        style={{
                                                            background: `linear-gradient(198deg, rgba(0, 0, 0, 0.4), rgba(0, 5, 69, 0.6862745098)), url(${box.image_url})`,
                                                        }}
                                                    >
                                                        <div className='tile_div'>
                                                            <h4 className='h4_title'>{box.name}</h4>
                                                        </div>
                                                    </div>
                                                    <div className="flip-card-back"
                                                        style={{
                                                            background: `linear-gradient(198deg, rgba(0, 0, 0, 0.618), rgba(0, 5, 69, 0.6862745098)), url(${box.image_url})`,
                                                        }}
                                                    >
                                                        <div className='tile_div'>
                                                            <h4 className='h4_title'>{box.name}</h4>
                                                            <p>{box.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    })}
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LaunchPlatform