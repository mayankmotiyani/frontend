import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Image, Spinner } from "react-bootstrap"
import Background from '../../../../assets/images/background/web3/banner3.jpg';
import BannerForm from '../../../common/BannerForm';
const HeroWeb3 = () => {
  // =====================================  API start ============================================
  const navigate = useNavigate() 
  const location = useLocation();
  const filterApi_PathName = location.pathname.slice(1);
  const [BlockchainCate, setBlockchainCate] = useState([])
  const [ErrorBlockchain, setErrorBlockchain] = useState(false);

  async function API() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
      setBlockchainCate(api.data.response)
    } catch (error) {
      setErrorBlockchain(true)
      navigate('/')
    }
  }
  useEffect(() => {
    API()
  }, [filterApi_PathName])
  // =====================================  API end ============================================ 
 
  return (
    <>
      <section className='web3-hero-wrap'>
        <Image className='background_img' src={Background} fluid />
        <Container>
          <Row>
            <Col sm={6} md={6} lg={8} xl={8}>
              {ErrorBlockchain ? 'Error'
                : BlockchainCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                  : <div className='w3-about-wrap'>
                    <h2 className='h2_title'>{BlockchainCate.blockchain_name}</h2>
                    <h3 className='h3_title'>Company In India</h3>
                    <p>{BlockchainCate.blockchain_description}</p>
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

export default HeroWeb3