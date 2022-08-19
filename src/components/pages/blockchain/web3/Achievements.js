import React, { useEffect, useState } from 'react';
import achievementsImg from "../../../../assets/images/background/web3/achievements2.png";
import { Container, Row, Col } from 'react-bootstrap';
import clipboard from "../../../../assets/images/background/web3/icon/clipboard.png";
// import CounterInput from 'react-bootstrap-counter';
import CountUp from 'react-countup';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Achievements = () => {
    // ================================== API =====================================
    const { slug } = useParams()
    const [ImageApi, setImageApi] = useState('')
    const [HeadData, setHeadData] = useState({})
    const [ApiData, setApiData] = useState([])
    async function api() {
        try {
            const { data: { heading_and_subheading, response, image: { blockchainSectionImage } } } = await axios.get(`${process.env.REACT_APP_BASE_URL}/blockchain/blockchain-main-section/${slug}/`);
            setHeadData(heading_and_subheading)
            setApiData(response)
            setImageApi(blockchainSectionImage)
        } catch (error) {

        }
    }

    useEffect(() => {
        api()
    }, [slug])

    return (
        <>
            <section className='achievements-wrap'>
                <Container>
                    <div className='achievements-title'>
                        <h3 className='h3_title'>{HeadData.subheading}</h3>
                        <h2 className='h2_title'>{HeadData.heading}</h2>
                        <p>{HeadData.description}</p>
                    </div>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <Row>
                                {ApiData.map(({ title, content }, key) => {
                                    return <Col sm={12} md={12} lg={12} xl={12} key={key}>
                                        <div className='achievements-card'>
                                            <h5 className='h5_title'>{title}</h5>
                                            <p>{content}</p>
                                        </div>
                                    </Col>
                                })}
                                {/* <Col sm={12} md={12} lg={12} xl={12}>
                                    <div className='achievements-card'>
                                        <h5 className='h5_title'>Title</h5>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={12} xl={12}>
                                    <div className='achievements-card'>
                                        <h5 className='h5_title'>Title</h5>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col>
                                <Col sm={12} md={12} lg={12} xl={12}>
                                    <div className='achievements-card'>
                                        <h5 className='h5_title'>Title</h5>
                                        <p>Projects Launched</p>
                                    </div>
                                </Col> */}
                            </Row>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <figure className='achievements-img'>
                                <img src={ImageApi} alt="W3 Service" />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Achievements