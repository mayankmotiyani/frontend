import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { AiFillFire } from 'react-icons/ai'
export default function KeyFeature() {
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
            <section className='keyFeature_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h4 className='h4_title'>Sub Heading</h4>
                                <h2 className='h2_title'>Your Head Title Text</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora inventore rem suscipit modi, distinctio consectetur facere. Provident nisi tempore hic nam nostrum, ut sequi aperiam magni, error quod facilis officia.</p>
                            </div>
                        </Col>
                        {ErrorNFT ? 'Error'
                            : NFTCate.length === 0 ?  <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                : NFTCate.Section3.map((e, key) => {
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
