import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import news from "../../../../assets/images/trusted/aceGame2.jpg"

const GameNews = () => {
    // =====================================  API start ============================================ 
    // const location = useLocation();
    // const filterApi_PathName = location.pathname.slice(1);
    // console.log(filterApi_PathName);
    const params = useParams()

    const [GameCate, setGameCate] = useState([])
    const [ErrorGame, setErrorGame] = useState(false)
    async function API() {
        try {
            // const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}game/game-section-3/${params.game_slug}/`);
            setGameCate(api.data.response)
            // console.log("try", api.data.response);
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