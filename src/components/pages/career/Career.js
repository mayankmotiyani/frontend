import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import axios from "axios";
import { Link } from 'react-router-dom';
import Background from '../../../assets/images/career/career.png'
const Career = (props) => {
    const [career, setCareer] = useState([]);
    const [error, setError] = useState(false)
    const careerData = async () => {
        try {
            const url = await axios.get(`${process.env.REACT_APP_BASE_URL}career/`);
            setCareer(url.data.response);
        } catch (error) {
            setError(true)
        }
    }
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        careerData();
        props.demo('top')
    }, []);

    return (
        <>
            <section className='career-wrap'>
                <div className='career-banner-wrap'>
                    <Image className='background_img' src={Background} fluid />
                    <h2 className='h2_title'>Career</h2>
                </div>
                <Container>
                    <div className='opportunities-wrap'>
                        <h2 className='h2_title'>opportunities</h2>
                        <Row>
                            {
                                career.map((ele, key) => {
                                    return (
                                        <Col sm={12} md={6} lg={6} xl={4} key={key}>
                                            <div className="opportunities-card-wrap">
                                                <div className='opportunities-card-header'>
                                                    <h3 className='h3_title'>{ele.opening_designation}</h3>
                                                    <p>{ele.designation_brief}</p>
                                                </div>
                                                <div className='opportunities-card-body'>
                                                    <div className='opportunities-card-loc'>
                                                        <p><span>Join duration:</span> {ele.join_duration}</p>
                                                        <p><span>Location:</span> {ele.location}</p>
                                                    </div>
                                                    <p style={{ fontWeight: "600" }}>{ele.opening} Opening</p>
                                                </div>
                                                <div className='opportunities-card-footer'>
                                                    <p><span>Experience:</span> {ele.experience}</p>
                                                    <Link to={ele.career_url} className='apply-btn'>Apply Now</Link>
                                                </div>
                                            </div>
                                        </Col>
                                    )
                                })
                            }

                        </Row>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Career