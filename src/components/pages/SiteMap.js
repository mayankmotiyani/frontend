import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
const SiteMap = (props) => {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================
    const [blockChain, setBlockChain] = useState([]);
    const [error, setError] = useState(false);
    const blockChainData = async () => {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain_list/`);
            // console.log("api.data.response", api.data.response);
            setBlockChain(api.data.response)
        } catch (error) {
            setError(true)
        }
    }
    useEffect(() => {
        blockChainData();
    }, [])

    return (
        <>
            <section className='siteMap-wrap'>
                <Container>
                    <div className='siteMap-title'>
                        <h2 className='h2_title'>Site Map</h2>
                    </div>
                    <Row>
                        <Col sm={4} md={4} lg={4} xl={4}>
                            <div className="siteMap-card-wrap">
                                <div className="blockChain-card-head">
                                    <h3 className='h3_title'>BlockChain Services</h3>
                                </div>
                                <div className='blockChain-card-details'>
                                    <ul>
                                        {
                                            blockChain.map((ele, key) => {
                                                return (
                                                    <div className='h4_title' key={key}>{ele.blockchain_category}
                                                        {
                                                            ele.array_of_blockchain_category_list.map((e, index) => {
                                                                return (
                                                                    <li className='blockChain-category-list' key={index}><Link to="/">{e.blockchain_name}</Link></li>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SiteMap