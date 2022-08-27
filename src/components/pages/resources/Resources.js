import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
// import { useParams } from "react-router-dom";
import resourceBanner from "../../../assets/images/video/resource_banner.mp4"
import axios from 'axios';
const Resources = (props) => {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    })
    // =========================== scroll To Top default =========================
    // const params = useParams();
    // const { res_slug } = params;

    // ==================== resource details ===========================
    const [contentData, setContentData] = useState([]);
    const [heroData, setHeroData] = useState({});

    const resourceData = async () => {
        try {
            const url = await axios.get(`${process.env.REACT_APP_BASE_URL}/resource/how-can-we-help/`)
            setContentData(url.data.response);
            setHeroData(url.data.resource)
            // const title_tag = document.getElementsByTagName('title')
            // const meta_description = document.getElementsByTagName('meta');
            // meta_description.description.content = url.data.metacontent.content
            // title_tag[0].innerText = url.data.metacontent.title
        } catch (error) {
        }
    }
    useEffect(() => {
        resourceData()
    }, [])
    // ==================== resource details ==========================
    return (
        <>
            <section className='resources-wrap'>
                <div className='resources-banner'>
                    <video autoPlay muted loop width="100%" className='heroSection_video'>
                        <source src={resourceBanner} type="video/mp4" />
                        <source src={resourceBanner} type="video/ogg" />
                    </video>
                    <Container>
                        <Row>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <h2 className='h2_title'>{heroData.name}</h2>
                                <p>{heroData.description}</p>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <figure className='resourcesImg'>
                                    <Image src={heroData.image} alt='Resources Img' fluid />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='resources-details'>
                    <Container>
                            {
                                contentData.map((ele, key) => {
                                    return (
                                        <Row key={key}>
                                            <Col sm={3} md={3} lg={3} xl={3}>
                                                <figure className='product-img'>
                                                    <Image src={ele.image} alt='Resources Img' fluid />
                                                </figure>
                                            </Col>
                                            <Col sm={9} md={9} lg={9} xl={9}>
                                                <div className='product-about'>
                                                    <h2 className='h2_title'>{ele.title}</h2>
                                                    <div  dangerouslySetInnerHTML={{ __html: ele.content }}></div>
                                                </div>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Resources