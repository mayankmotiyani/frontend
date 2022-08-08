import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Image, Spinner } from "react-bootstrap"
import Background from '../../../../assets/images/background/web3/banner3.jpg'
const HeroWeb3 = () => {
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
      <section className='web3-hero-wrap'>
        <Image className='background_img' src={Background} fluid />
        <Container>
          <Row>
            <Col sm={6} md={6} lg={8} xl={8}>
              {ErrorBlockchain ? 'Error'
                : BlockchainCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                  : <div className='w3-about-wrap'>
                    <h2 className='h2_title'>Best Web3 Development</h2>
                    <h3 className='h3_title'>Company In India</h3>
                    <p>{BlockchainCate.blockchain_description}</p>
                  </div>
              }
            </Col>
            <Col sm={6} md={6} lg={4} xl={4}>
              <Form className='w3-from-wrap'>
                <h3 className='h3_title'>Talk to our experts</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter name" className='input_field' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" className='input_field' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubjecy">
                  <Form.Control type="text" placeholder="Enter subject" className='input_field' />
                </Form.Group>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                  className='input_field'
                />
                <Button type="submit">
                  Send
                </Button>
              </Form>

            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroWeb3