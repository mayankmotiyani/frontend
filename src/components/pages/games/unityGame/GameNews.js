import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import news from "../../../../assets/images/trusted/aceGame2.jpg"

const GameNews = () => {
    // =====================================  API start ============================================ 
    const params = useParams()
    const [HeadData, setHeadData] = useState({})
    const [GameCate, setGameCate] = useState([])
    const [ErrorGame, setErrorGame] = useState(false)
    async function API() {
        try {
            const { data: { heading_and_subheading, response } } = await axios.get(`${process.env.REACT_APP_BASE_URL}game/game-section-3/${params.game_slug}/`);
            setGameCate(response)
            setHeadData(heading_and_subheading)
        } catch (error) {
            setErrorGame(true)
        }
    }

    useEffect(() => {
        API()
    }, [params])

    // =====================================  API end ============================================ 
    return (
        <>
            <section className='gameNews-wrap'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='text-center mb-4'>
                                <h4 className='h4_title'>{HeadData.subheading}</h4>
                                <h2 className='h2_title'>{HeadData.heading}</h2>
                                <p className='description'>{HeadData.description}</p>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={12} xl={12}>
                            <Row>
                                {ErrorGame ? 'Error'
                                    : GameCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                        : GameCate.map((e, key) => {
                                            return <Col sm={6} md={6} lg={3} xl={3} key={key}>
                                                <div className='gameNews-card-wrap'>
                                                    <figure className="gameNews-card-img">
                                                        <Image src={news} alt='News' fluid />
                                                    </figure>
                                                    <div className='gameNews-card-detail'>
                                                        <h3 className='h3_title'>{e.title}</h3>
                                                        <p>{e.content}</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GameNews