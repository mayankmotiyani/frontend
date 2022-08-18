import React, { useRef, useEffect, useState } from 'react';
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

    const description = useRef(null)
    const [BlockchainCate, setBlockchainCate] = useState([])
    const [ErrorBlockchain, setErrorBlockchain] = useState(false)
    async function API() {
        try {
            // const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain-section-two/${params.slug}/`);

            setBlockchainCate(api.data.response)
            description.current.innerHTML = api.data.response.content
            // console.log("try", api);
        } catch (error) {
            // console.log(error);
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
                    <Row>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <div className='w3-technologies-content'>
                                <h3 className='h3_title'>{BlockchainCate.subheading}</h3>
                                <h2 className='h2_title'>{BlockchainCate.title}</h2>
                                <div className='description' ref={description}></div>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={6} xl={6}>
                            <figure className='web3-technologies-img'>
                                <Image src={BlockchainCate.image} alt="technologies-img" fluid />
                            </figure>
                        </Col>
                    </Row>

                </Container>
            </section>
        </>
    )
}

export default W3Technologies