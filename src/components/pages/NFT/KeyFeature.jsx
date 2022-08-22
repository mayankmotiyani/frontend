import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { AiFillFire } from 'react-icons/ai'
import { useParams } from 'react-router-dom';
export default function KeyFeature() {
    // =====================================  API start ============================================ 

    const { nft_slug } = useParams()

    const [NFTCate, setNFTCate] = useState([]);
    const [ErrorNFT, setErrorNFT] = useState(false);
    const [head, setHead] = useState("");

    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}nft/nft-section-3/${nft_slug}/`);
            setNFTCate(api.data.response)
            setHead(api.data.heading_and_subheading)
        } catch (error) {
            setErrorNFT(true)
        }
    }

    useEffect(() => {
        API()
    }, [nft_slug])
    // =====================================  API end ============================================ 
    return (
        <>
            <section className='keyFeature_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h3 className='h3_title'>{head.subheading}</h3>
                                <h2 className='h2_title'>{head.heading}</h2>
                                <p>{head.description}</p>
                            </div>
                        </Col>
                        {ErrorNFT ? 'Error'
                            : NFTCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                : NFTCate.map((e, key) => {
                                    return <Col sm={6} md={6} lg={3} xl={3} key={key}>
                                        <div className='key_box'>
                                            <AiFillFire />
                                            <h4 className='h4_title'>{e.title}</h4>
                                            <p>{e.content}</p>
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
