import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import w3Services from "../../../../assets/images/background/web3/w3_service.png"
import axios from 'axios';
const W3Services = () => {
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
      <section className='w3Service-wrap'>
        <Container>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6}>
              <figure className='w3-service-img'>
                <img src={w3Services} alt="W3 Service" />
              </figure>
            </Col>
            <Col sm={6} md={6} lg={6} xl={6}>
              {ErrorBlockchain ? 'Error'
                : BlockchainCate.length === 0 ? 'loading'
                  : <div className='w3-service-about'>
                    <h3 className='h3_title'>Our Unparalleled Services</h3>
                    <h2 className='h2_title'>{BlockchainCate.Section1.title}</h2>
                    <p>{BlockchainCate.Section1.content}</p>
                    <button className='btn' type='button'>Get Free Consultancy</button>
                  </div>
              }
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default W3Services