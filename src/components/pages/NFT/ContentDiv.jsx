import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap'
export default function ContentDiv() {
    // =====================================  API start ============================================ 
    const { nft_slug } = useParams()
    const [NFTCate, setNFTCate] = useState([])
    const [ErrorNFT, setErrorNFT] = useState(false)

    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}nft/nft-section-2/${nft_slug}/`);
            setNFTCate(api.data.response);
        } catch (error) {
            setErrorNFT(true)
        }
    }

    useEffect(() => {
        API()
    }, [nft_slug])

    // =====================================  API end ============================================ 
    // ======================== Convert html ================================= 

    const content = useRef(null);
    useEffect(() => {
        content.current.innerHTML = `${NFTCate.content}`;
    }, [NFTCate]);

    // ======================== Convert html =================================
    return (
        <>
            <section className='content_div_section'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            {
                                ErrorNFT ? 'Error'
                                    : NFTCate === "" ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                        : <div className='content_div_cont'>
                                            <div className='content_div'>
                                                <h2 className='h2_title'>{NFTCate.heading}</h2>
                                                <p>{NFTCate.title}</p>
                                                <div ref={content}></div>
                                            </div>
                                        </div>
                            }
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className='content_img'>
                                <Image src={NFTCate.image} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
