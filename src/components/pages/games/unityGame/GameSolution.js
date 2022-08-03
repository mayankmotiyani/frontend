import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image } from "react-bootstrap";
import joyStick from "../../../../assets/images/background/games/joystick.png"

const GameSolution = () => {
    // =====================================  API start ============================================ 
    const location = useLocation();
    const filterApi_PathName = location.pathname.slice(1);
    // console.log(filterApi_PathName);

    const [GameCate, setGameCate] = useState([])
    const [ErrorGame, setErrorGame] = useState(false)
    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
            setGameCate(api.data.response)
            // console.log("try", api.data.response);
        } catch (error) {
            setErrorGame(true)
        }
    }

    useEffect(() => {
        API()
    }, [filterApi_PathName])

    // =====================================  API end ============================================ 
    return (
        <>
            <section className='GameSolution-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            {ErrorGame ? 'Error'
                                : GameCate.length === 0 ? 'loading...'
                                    : <div className='GameSolution-text'>
                                        <h3 className='h3_title'>Modern Solution For Various Platforms</h3>
                                        <h2 className='h2_title'>{GameCate.Section1.title}</h2>
                                        <p>{GameCate.Section1.content}</p>
                                        <div class="center">
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