import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import AOS from "aos";
export default function Privacy(props) {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================
    const [privacy, setPrivacy] = useState([]);
    const [error, setError] = useState(false)
    const privacyData = async () => {
        try {
            const url = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/privacy-policy/`);
            setPrivacy(url.data.response[0]);
            console.log("privacy-policy", url.data.response[0]);
            // setSide(url.data.response);
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }
    useEffect(() => {
        privacyData()
        AOS.init({
            duration: 1000
        });
    }, []);

    const content = useRef([]);
    const title = useRef([]);
    const description = useRef([]);

    useEffect(() => {
        content.current.innerHTML = `${privacy.content}`;
        title.current.innerHTML = `${privacy.title}`;
        description.current.innerHTML = `${privacy.description}`;
    }, [privacy]);

    return (
        <>
            <section className='privacy_section'>

                <div className='head'>
                    <Container>
                        <h2 className="h2_title" ref={title}></h2>
                        <p ref={description}></p>
                    </Container>
                </div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='privacy_content'>
                                <div className='privacy_content-details' ref={content}></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
