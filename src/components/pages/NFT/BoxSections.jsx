import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { BsBox } from 'react-icons/bs'
export default function BoxSections() {
    // =====================================  API start ============================================ 
    // const location = useLocation();
    // const filterApi_PathName = location.pathname.slice(1);
    // console.log(filterApi_PathName);

    const { nft_slug } = useParams()

    const [NFTCate, setNFTCate] = useState([]);
    const [ErrorNFT, setErrorNFT] = useState(false);
    const [head, setHead] = useState([]);
    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}nft/nft-section-1/${nft_slug}/`);
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
            <section className='boxSections'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head_section'>
                                <h3 className='h3_title'>{head.subheading}</h3>
                                <h2 className='h2_title'>{head.heading}</h2>
                                <p>{head.description}</p>
                            </div>
                        </Col>
                        {ErrorNFT ? "Error"
                            : NFTCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                : NFTCate.map((e, key) => {
                                    return <Col sm={6} md={6} lg={4} xl={4} key={key}>
                                        <div className='box_shell'>
                                            <BsBox />
                                            <h5 className='h5_title'>{e.title}</h5>
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
