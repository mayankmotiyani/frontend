import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function HeroSections() {
    // =====================================  API start ============================================ 
    const location = useLocation();
    const filterApi_PathName = location.pathname.slice(1);
    // console.log(filterApi_PathName);

    const [NFTCate, setNFTCate] = useState([])
    const [ErrorNFT, setErrorNFT] = useState(false)
    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
            setNFTCate(api.data.response)
            // console.log("try", api.data.response);
        } catch (error) {
            setErrorNFT(true)
        }
    }

    useEffect(() => {
        API()
    }, [filterApi_PathName])

    // =====================================  API end ============================================ 
    return (
        <>
            <section className='nft_heroSections'>
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={8} xl={8}>
                            {ErrorNFT ? 'Error'
                                : NFTCate.length === 0 ? 'loading...'
                                    : <div className='nftHero-about-wrap'>
                                        <h2 className='h2_title'>NFT</h2>
                                        <h3 className='h3_title'>Development Company</h3>
                                        <p>{NFTCate.description}</p>
                                    </div>
                            }
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4}>
                            <Form className='nftHero-from-wrap'>
                                <h3 className='h3_title'>Talk to our experts</h3>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Enter name" className='input_field' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" className='input_field' />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicSubjecy">
                                    <Form.Control type="text" placeholder="Enter subject" className='input_field' />
                                </Form.Group>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    className='input_field'
                                />
                                <Button type="submit">
                                    Send
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
