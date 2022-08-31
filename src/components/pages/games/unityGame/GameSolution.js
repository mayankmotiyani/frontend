import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import joyStick from "../../../../assets/images/background/games/joystick.png"

const GameSolution = () => {
    // =====================================  API start ============================================ 
    const params = useParams();
    const [GameCate, setGameCate] = useState([])
    const [ErrorGame, setErrorGame] = useState(false)
    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}game/game-section-1/${params.game_slug}/`);
            setGameCate(api.data.response)
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
            <section className='GameSolution-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            {ErrorGame ? 'Error'
                                : GameCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                    : <div className='GameSolution-text'>
                                        <h3 className='h3_title'>{GameCate.subheading}</h3>
                                        <h2 className='h2_title'>{GameCate.title}</h2>
                                        <p>{GameCate.content}</p>
                                        <div className="center">
                                            <a href="#"><span data-attr="Click">Click</span><span data-attr="Me">Me</span></a>
                                        </div>
                                    </div>
                            }
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <figure className='GameSolution-img'>
                                <Image src={joyStick} alt='GameSolution' fluid />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GameSolution