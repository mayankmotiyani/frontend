import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap'
import { BsBox } from 'react-icons/bs'
export default function BoxSections() {
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
            <section className='boxSections'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head_section'>
                                <h4 className='h4_title'>Sub Head</h4>
                                <h2 className='h2_title'>Heading Text Here</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corrupti recusandae blanditiis commodi voluptatem maxime sed, consectetur delectus exercitationem est ut architecto sint cum deserunt quia voluptates nam placeat ipsum.</p>
                            </div>
                        </Col>
                        {ErrorNFT ? "Error"
                            : NFTCate.length === 0 ? 'loading...'
                                : NFTCate.Section1.map((e, key) => {
                                    return <Col sm={12} md={6} lg={4} xl={4} key={key}>
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
