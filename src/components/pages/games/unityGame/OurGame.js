import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";
import gameGirl from "../../../../assets/images/trusted/aceRemove.png"

const OurGame = () => {
    // =====================================  API start ============================================ 
    // const location = useLocation();
    // const filterApi_PathName = location.pathname.slice(1);
    // console.log(filterApi_PathName);
    const params = useParams();
    const [GameCate, setGameCate] = useState([])
    const [Head, setHead] = useState({})
    const [ErrorGame, setErrorGame] = useState(false)
    async function API() {
        try {
            // const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}game/game-section-2/${params.game_slug}/`);
            setGameCate(api.data.response)
            setHead(api.data.heading_and_subheading)
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
            <section className='ourGame-wrap'>
                <Container>
                    <div className='ourGame-title'>
                        <h3 className='h3_title'>{Head.subheading}</h3>
                        <h2 className='h2_title'>{Head.heading}</h2>
                    </div>
                    <Row>
                        {ErrorGame ? 'Error'
                            : GameCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                : GameCate.map((e, key) => {
                                    return <Col sm={6} md={6} lg={4} xl={4} key={key}>
                                        <div className='ourGame-card-wrap'>
                                            <figure className="ourGame-card-img">
                                                <Image src={gameGirl} alt='Ace' />
                                            </figure>
                                            <div className='ourGame-card-detail'>
                                                <h3 className='h3_title'>{e.title}</h3>
                                                <p>{e.content}</p>
                                            </div>
                                        </div>
                                    </Col>
                                })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default OurGame