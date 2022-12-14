import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const W3Services = () => {
  // =====================================  API start ============================================ 
  const params = useParams();
  const [BlockchainCate, setBlockchainCate] = useState([])
  const [ErrorBlockchain, setErrorBlockchain] = useState(false)

  const apiContent = useRef(null)

  async function API() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain-section-one/${params.slug}/`);
      setBlockchainCate(api.data.response)
      apiContent.current.innerHTML = `${api.data.response.content}`
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
      <section className='w3Service-wrap'>
        <Container>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6}>
              <figure className='w3-service-img'>
                <img src={BlockchainCate.image} alt="W3 Service" />
              </figure>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6}>
              <div className='w3-service-about'>
                <h3 className='h3_title'>{BlockchainCate.subheading}</h3>
                <h2 className='h2_title'>{BlockchainCate.title}</h2>
                <div className='description' ref={apiContent}></div>
                <button className='btn' type='button'>Get Free Consultancy</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default W3Services