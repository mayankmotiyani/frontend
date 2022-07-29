import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import blockchainService1 from "../../../assets/images/blockchainService1.png"

const OnlineStore = () => {
  return (
    // ===================== store area ========================
    <section className='store_wrap'>
      <Container >
        <div className='store_details'>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <figure className='store_img'>
                <img src={blockchainService1} alt='Store' />
              </figure>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className='store_div'>
                <div className='store_text'>
                  <h4 className='h4_title'>What We Do?</h4>
                  <h2 className='h2_title'>We Are The Masters Of Modern Technology</h2>
                  <p>Helping organizations tap into a decentralized ecosystem, create NFT marketplace platforms, and launch a future-ready Metaverse, too by crafting contemporary solutions that comply with the regulations.</p>
                  <button type='button' className='btn'>More About Us</button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
    // ===================== // store area ========================
  )
}

export default OnlineStore