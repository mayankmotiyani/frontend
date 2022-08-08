import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Image, Row, Spinner } from 'react-bootstrap'
import Nft from '../../../assets/media/nft.png'
export default function ContentDiv() {
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
            <section className='content_div_section'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            {ErrorNFT ? 'Error'
                                : NFTCate.length === 0 ?  <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                    : <div className='content_div_cont'>
                                        <div className='content_div'>
                                            <h2 className='h2_title'>Your Heading Text Here</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos qui, perspiciatis facere odio debitis esse porro fugit ullam eaque cum maxime amet nesciunt quidem consectetur? Velit blanditiis fuga aspernatur?</p>
                                            <ul>
                                                {NFTCate.Section2.map((e, key) => {
                                                    return <li key={key}>{e}</li>
                                                })}
                                            </ul>
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
