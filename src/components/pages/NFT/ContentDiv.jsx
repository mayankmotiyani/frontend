import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap'
import Nft from '../../../assets/media/nft.png'
export default function ContentDiv() {
    // =====================================  API start ============================================ 
    // const location = useLocation();
    // const filterApi_PathName = location.pathname.slice(1);
    // console.log(filterApi_PathName);

    const [NFTCate, setNFTCate] = useState([])
    const [ErrorNFT, setErrorNFT] = useState(false)

    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}nft/nft-section-2/nft-marketing-company/`);
            setNFTCate(api.data.response);
        } catch (error) {
            console.log("error", error);
            setErrorNFT(true)
        }
    }

    useEffect(() => {
        API()
    }, [])

    // =====================================  API end ============================================ 
    // ======================== Convert html ================================= 

    const content = useRef(null);
    useEffect(() => {
        content.current.innerHTML = `${NFTCate.content}`;
        // console.log("content", content);
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
                                                {/* list */}
                                                <div ref={content}></div>
                                                {/* // list */}
                                            </div>
                                        </div>
                            }
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className='content_img'>
                                <Image src={Nft} fluid />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
