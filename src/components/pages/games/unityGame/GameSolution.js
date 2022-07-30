import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import joyStick from "../../../../assets/images/background/games/joystick.png"

const GameSolution = () => {
    return (
        <>
            <section className='GameSolution-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className='GameSolution-text'>
                                <h3 className='h3_title'>Modern Solution For Various Platforms</h3>
                                <h2 className='h2_title'>Hire Our Unity Game Developer For Multiple Platforms</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore doloribus eligendi accusantium atque, velit neque expedita ut ipsa ratione ad unde nisi earum error possimus sapiente modi aliquid odio et.</p>
                                <div className="center">
                                    <a href="#"><span data-attr="Click">Click</span><span data-attr="Me">Me</span></a>
                                </div>
                            </div>
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