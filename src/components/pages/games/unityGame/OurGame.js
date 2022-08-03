import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image } from "react-bootstrap";
import gameGirl from "../../../../assets/images/trusted/aceRemove.png"

const OurGame = () => {
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
            <section className='ourGame-wrap'>
                <Container>
                    <div className='ourGame-title'>
                        <h3 className='h3_title'>Our Game</h3>
                        <h2 className='h2_title'>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
                    </div>
                    <Row>
                        {ErrorGame ? 'Error'
                            : GameCate.length === 0 ? 'loading...'
                                : GameCate.Section2.map((e, key) => {
                                    return <Col sm={4} md={4} lg={4} xl={4} key={key}>
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