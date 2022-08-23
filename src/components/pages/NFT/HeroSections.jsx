import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import BannerForm from '../../common/BannerForm';
export default function HeroSections() {

    const navigate = useNavigate()
    const { nft_slug } = useParams()
    const [NFTCate, setNFTCate] = useState({})
    const [ErrorNFT, setErrorNFT] = useState(false)
    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}nft/${nft_slug}/`);
            setNFTCate(api.data.response)
        } catch (error) {
            setErrorNFT(true)
            navigate('/')
        }
    }

    useEffect(() => {
        API()
    }, [nft_slug])

    // =====================================  API end ============================================ 


    return (
        <>
            <section className='nft_heroSections'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={8} xl={8}>
                            {ErrorNFT ? 'Error'
                                : NFTCate === "" ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                    : <div className='nftHero-about-wrap'>
                                        <h2 className='h2_title'>{NFTCate.name}</h2>
                                        <p>{NFTCate.description}</p>
                                    </div>
                            }
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <BannerForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
