import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Image, Spinner } from "react-bootstrap";
import technologies from "../../../../assets/images/blockchainService1.png";

const W3Technologies = () => {
    // =====================================  API start ============================================ 
    // const location = useLocation();
    // const filterApi_PathName = location.pathname.slice(1);
    // console.log(filterApi_PathName);
    const params = useParams();


    const [BlockchainCate, setBlockchainCate] = useState([])
    const [ErrorBlockchain, setErrorBlockchain] = useState(false)
    async function API() {
        try {
            // const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain-section-two/${params.slug}/`);

            setBlockchainCate(api.data.response)
            // console.log("try", api.data.response);
        } catch (error) {
            setErrorBlockchain(true)
        }
    }

    useEffect(() => {
        API()
    }, [params])

    // =====================================  API end ============================================ 
    return (
        <>
            <section className='w3-technologies-wrap'>
                <Container>
                    {ErrorBlockchain ? 'Error'
                        : BlockchainCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                            : <Row>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div className='w3-technologies-content'>
                                        <h3 className='h3_title'>{BlockchainCate.subheading}</h3>
                                        <h2 className='h2_title'>{BlockchainCate.title}</h2>
                                        <p>{BlockchainCate.content}</p>
                                    </div>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <figure className='web3-technologies-img'>
                                        <Image src={BlockchainCate.image} alt="technologies-img" fluid />
                                    </figure>
                                </Col>
                            </Row>
                    }
                </Container>
            </section>
        </>
    )
}

export default W3Technologies