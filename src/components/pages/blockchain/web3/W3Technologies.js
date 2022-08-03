import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import technologies from "../../../../assets/images/blockchainService1.png";

const W3Technologies = () => {
    // =====================================  API start ============================================ 
    const location = useLocation();
    const filterApi_PathName = location.pathname.slice(1);
    // console.log(filterApi_PathName);

    const [BlockchainCate, setBlockchainCate] = useState([])
    const [ErrorBlockchain, setErrorBlockchain] = useState(false)
    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
            setBlockchainCate(api.data.response)
            // console.log("try", api.data.response);
        } catch (error) {
            setErrorBlockchain(true)
        }
    }

    useEffect(() => {
        API()
    }, [filterApi_PathName])

    // =====================================  API end ============================================ 
    return (
        <>
            <section className='w3-technologies-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            {ErrorBlockchain ? 'Error'
                                : BlockchainCate.length === 0 ? 'loading...'
                                    : <div className='w3-technologies-content'>
                                        <h3 className='h3_title'>Sub heading </h3>
                                        <h2 className='h2_title'>{BlockchainCate.Section2.title}</h2>
                                        <p>{BlockchainCate.Section2.content}</p>
                                    </div>
                            }
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <figure className='web3-technologies-img'>
                                <Image src={technologies} alt="technologies-img" fluid />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default W3Technologies