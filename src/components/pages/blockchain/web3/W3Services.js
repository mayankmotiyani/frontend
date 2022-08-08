import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import w3Services from "../../../../assets/images/background/web3/w3_service.png"
import axios from 'axios';
const W3Services = () => {
  // =====================================  API start ============================================ 
  // const location = useLocation();
  // const filterApi_PathName = location.pathname.slice(1);
  // console.log(filterApi_PathName);
  const params = useParams();
  // console.log(params);

  const [BlockchainCate, setBlockchainCate] = useState([])
  const [ErrorBlockchain, setErrorBlockchain] = useState(false)
  async function API() {
    try {
      // const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
      // blockchain/blockchain-section-one/launchpad-development-company/
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain-section-one/${params.slug}/`);
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
      <section className='w3Service-wrap'>
        <Container>
          {ErrorBlockchain ? 'Error'
            : BlockchainCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
              : <Row>
                <Col sm={6} md={6} lg={6} xl={6}>
                  <figure className='w3-service-img'>
                    <img src={BlockchainCate.image} alt="W3 Service" />
                  </figure>
                </Col>
                <Col sm={6} md={6} lg={6} xl={6}>
                  <div className='w3-service-about'>
                    <h3 className='h3_title'>{BlockchainCate.subheading}</h3>
                    <h2 className='h2_title'>{BlockchainCate.title}</h2>
                    <p>{BlockchainCate.content}</p>
                    <button className='btn' type='button'>Get Free Consultancy</button>
                  </div>
                </Col>
              </Row>
          }
        </Container>
      </section>
    </>
  )
}

export default W3Services