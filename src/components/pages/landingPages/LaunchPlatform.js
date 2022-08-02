import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../assets/style/pages/landing_page/launchPlatform.scss"
import { IoIosWarning } from 'react-icons/io'
const LaunchPlatform = () => {
    // ======================================== Box Data Api ===============================================
    const [BoxContent, setBoxContent] = useState([])
    const [ErrorBox, setErrorBox] = useState(false)
    async function boxData() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/our-mastery/`);
            setBoxContent(api.data.response)
        } catch (error) {
            setErrorBox(true)
        }
    }
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
                            <h3 className='h3_title'>Choose Your Niche</h3>
                            <h2 className='h2_title'>Launch Web 3 Platform with Professional Web3 Development Company</h2>
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
                                                <div className="flip-card-inner">
                                                    <div className="flip-card-front">
                                                        <img src="https://compile.blog/wp-content/uploads/2021/11/web3-icon.png" alt="Avatar" />
                                                        <h4 className='h4_title'>{box.name}</h4>
                                                    </div>
                                                    <div className="flip-card-back">
                                                        <p>{box.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    })}



                            {/* <Col sm={6} md={6} lg={4} xl={4}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src="https://compile.blog/wp-content/uploads/2021/11/web3-icon.png" alt="Avatar" />
                                            <h4 className='h4_title'>Web3 platform Development</h4>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>Build a decentralization and token-based economy that revolves around the concepts of blockchain technology in the digital era with our experts.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={6} lg={4} xl={4}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src="https://compile.blog/wp-content/uploads/2021/11/web3-icon.png" alt="Avatar" />
                                            <h4 className='h4_title'>Web3 platform Development</h4>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>Build a decentralization and token-based economy that revolves around the concepts of blockchain technology in the digital era with our experts.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col> */}
                            {/* <Col sm={6} md={6} lg={4} xl={4}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src="https://compile.blog/wp-content/uploads/2021/11/web3-icon.png" alt="Avatar" />
                                            <h4 className='h4_title'>Web3 platform Development</h4>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>Build a decentralization and token-based economy that revolves around the concepts of blockchain technology in the digital era with our experts.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={6} lg={4} xl={4}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src="https://compile.blog/wp-content/uploads/2021/11/web3-icon.png" alt="Avatar" />
                                            <h4 className='h4_title'>Web3 platform Development</h4>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>Build a decentralization and token-based economy that revolves around the concepts of blockchain technology in the digital era with our experts.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={6} md={6} lg={4} xl={4}>
                                <div className="flip-card">
                                    <div className="flip-card-inner">
                                        <div className="flip-card-front">
                                            <img src="https://compile.blog/wp-content/uploads/2021/11/web3-icon.png" alt="Avatar" />
                                            <h4 className='h4_title'>Web3 platform Development</h4>
                                        </div>
                                        <div className="flip-card-back">
                                            <p>Build a decentralization and token-based economy that revolves around the concepts of blockchain technology in the digital era with our experts.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col> */}
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default LaunchPlatform