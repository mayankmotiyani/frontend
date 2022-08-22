import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import DemoIcon from '../../../assets/media/demo_icon.png';
import AOS from "aos";
import axios from "axios";
import { IoIosWarning } from 'react-icons/io';
import { WOW } from "wowjs";
export default function WhyChoose() {
    const [choose, setChoose] = useState([]);
    const [HeadContent, setHeadContent] = useState({})
    const [error, setError] = useState(false)
    const chooseData = async () => {
        try {
            const url = await axios.get(`${process.env.REACT_APP_BASE_URL}api/why-we-choose/`);
            setChoose(url.data.response);
            setHeadContent(url.data.heading_and_subheading)
        } catch (error) {
            setError(true)
        }
    }
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        chooseData();
    }, []);
    useEffect(() => {
        const wow = new WOW({ live: false });
        wow.init()
    })
    return (
        <>
            <section className='whyChoose_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head_section'>
                                <h4 className='h4_title'>{HeadContent.subheading}</h4>
                                <h2 className='h2_title'>{HeadContent.heading}</h2>
                            </div>
                        </Col>
                        {
                            error ?
                                <div className='warning'>
                                    <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                                </div>
                                : choose.length === 0 ?
                                    <Row>
                                        <Col sm={12} md={6} lg={6} xl={6}>
                                            <div className='box_div' style={{backgroundColor:'#f3f3f3',boxShadow:'none'}}>
                                                <h4 className='h4_title'></h4>
                                                <p></p>
                                            </div>
                                            <div className='box_div' style={{backgroundColor:'#f3f3f3',boxShadow:'none'}}>
                                                <h4 className='h4_title'></h4>
                                                <p></p>
                                            </div>
                                            <div className='box_div' style={{backgroundColor:'#f3f3f3',boxShadow:'none'}}>
                                                <h4 className='h4_title'></h4>
                                                <p></p>
                                            </div>
                                        </Col>
                                        <Col sm={12} md={6} lg={6} xl={6}>
                                            <div className='box_div' style={{backgroundColor:'#f3f3f3',boxShadow:'none'}}>
                                                <h4 className='h4_title'></h4>
                                                <p></p>
                                            </div>
                                            <div className='box_div' style={{backgroundColor:'#f3f3f3',boxShadow:'none'}}>
                                                <h4 className='h4_title'></h4>
                                                <p></p>
                                            </div>
                                            <div className='box_div' style={{backgroundColor:'#f3f3f3',boxShadow:'none'}}>
                                                <h4 className='h4_title'></h4>
                                                <p></p>
                                            </div>
                                        </Col>
                                    </Row>
                                    :
                                    choose.map((ele, key) => {
                                        return (
                                            <Col sm={12} md={6} lg={6} xl={6} key={key}>
                                                <div className='box_div wow zoomIn'>
                                                    <img src={ele.icon} alt="" />
                                                    <h4 className='h4_title'>{ele.service_name}</h4>
                                                    <p>{ele.content}</p>
                                                </div>
                                            </Col>
                                        );
                                    })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}
