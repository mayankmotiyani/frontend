import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import w3Services from "../../../../assets/images/background/web3/w3_service.png"
const W3Services = () => {
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
              <div className='w3-service-about'>
                <h3 className='h3_title'>Our Unparalleled Services</h3>
                <h2 className='h2_title'>Web3 Development Firm - How We Help You To Achieve What You Desire?</h2>
                <p>Get a premium web3 development service that everyone wants to enjoy due to advanced and multi-purpose leveraging factors. We build and launch platforms that witness the emerging technology that exclusively concentrates on web services. Our designed web3 gaming, ecommerce, banking, real estate, or any other industry can skyrocket your business success. We believe in our services to represent your business in the virtual world from our past experiences in building 50+ NFT marketplaces, Play2Earn platforms, crypto wallet creation, crypto trading platforms, and more. Now, revamp your current platform or build fresh with us to enjoy a wonderful experience.</p>
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