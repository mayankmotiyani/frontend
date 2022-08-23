import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BannerForm from '../../../common/BannerForm';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Loader from "react-js-loader";

const GameHero = () => {
    // ================================= API ======================================
    const navigate = useNavigate()
    const { game_slug } = useParams()
    const [ApiData, setApiData] = useState([])
    async function api() {
        try {
            const { data: { response } } = await axios.get(`${process.env.REACT_APP_BASE_URL}/game/${game_slug}/`);
            setApiData(response);
        } catch (error) {
            navigate('/')
        }
    }
    useEffect(() => {
        api()
    }, [game_slug])

    return (
        <>
            <section className='gameHero-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={8} xl={8}>
                            <div className='gameHero-about-wrap'>
                                <h2 className='h2_title'>{ApiData.name}</h2>
                                <h3 className='h3_title'>Company</h3>
                                <p>{ApiData.description}</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                                <BannerForm />
                        </Col>
                    </Row>
                </Container>
        

            </section>
        </>
    )
}

export default GameHero