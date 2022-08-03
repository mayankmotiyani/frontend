import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image } from "react-bootstrap";
import news from "../../../../assets/images/trusted/aceGame2.jpg"

const GameNews = () => {
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
            <section className='gameNews-wrap'>
                <Container>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4}>
                            <div className='gameNews-detail'>
                                <h3 className='h3_title'>Latest News</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, harum?</p>
                                <div class="center">
                                    <a href="#"><span data-attr="Click">Click</span><span data-attr="Me">Me</span></a>
                                </div>
                            </div>
                        </Col>
                        <Col sm={8} md={8} lg={8} xl={8}>
                            <Row>
                                {ErrorGame ? 'Error'
                                    : GameCate.length === 0 ? 'loading...'
                                        : GameCate.Section3.map((e, key) => {
                                            return <Col sm={6} md={6} lg={6} xl={6} key={key}>
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