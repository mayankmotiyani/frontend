import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BsBox } from 'react-icons/bs'
export default function BoxSections() {
    return (
        <>
            <section className='boxSections'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head_section'>
                                <h4 className='h4_title'>Sub Head</h4>
                                <h2 className='h2_title'>Heading Text Here</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corrupti recusandae blanditiis commodi voluptatem maxime sed, consectetur delectus exercitationem est ut architecto sint cum deserunt quia voluptates nam placeat ipsum.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='box_shell'>
                                <BsBox />
                                <h5 className='h5_title'>Title Here</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt aut neque tenetur eos reprehenderit amet, in dolores error repellat, laudantium modi magni dolor velit et molestias, necessitatibus ex magnam.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='box_shell'>
                                <BsBox />
                                <h5 className='h5_title'>Title Here</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt aut neque tenetur eos reprehenderit amet, in dolores error repellat, laudantium modi magni dolor velit et molestias, necessitatibus ex magnam.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='box_shell'>
                                <BsBox/>
                                <h5 className='h5_title'>Title Here</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt aut neque tenetur eos reprehenderit amet, in dolores error repellat, laudantium modi magni dolor velit et molestias, necessitatibus ex magnam.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='box_shell'>
                                <BsBox />
                                <h5 className='h5_title'>Title Here</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt aut neque tenetur eos reprehenderit amet, in dolores error repellat, laudantium modi magni dolor velit et molestias, necessitatibus ex magnam.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='box_shell'>
                                <BsBox />
                                <h5 className='h5_title'>Title Here</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt aut neque tenetur eos reprehenderit amet, in dolores error repellat, laudantium modi magni dolor velit et molestias, necessitatibus ex magnam.</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='box_shell'>
                                <BsBox/>
                                <h5 className='h5_title'>Title Here</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus nesciunt aut neque tenetur eos reprehenderit amet, in dolores error repellat, laudantium modi magni dolor velit et molestias, necessitatibus ex magnam.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
