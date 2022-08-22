import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import productBanner from "../../../../assets/images/product/Infograin_product.png"
import axios from 'axios';
const ProductHeroWeb = () => {
  // =========================================== API ======================================
  const [HeroSectionData, setHeroSectionData] = useState([])

  async function api() {
    try {
      const { data: { hero_section } } = await axios.get(`${process.env.REACT_APP_BASE_URL}product/sliceledger_product/`);
      setHeroSectionData(hero_section)
    } catch (error) {

    }
  }

  useEffect(() => {
    api()
  }, [])
  return (
    <>
      <section className='productHeroWeb-wrap'>
        <Image src={HeroSectionData.banner_image} className='banner_img' fluid/>
        <Container>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6}>
              <div className='productHeroWeb-details'>
                <h3 className='h3_title'>{HeroSectionData.sub_heading}</h3>
                <h2 className='h2_title'>{HeroSectionData.heading}</h2>
                <p>{HeroSectionData.content}</p>
                <button className='btn' type='button'>Click Me</button>
              </div>
            </Col>
            <Col sm={4} md={4} lg={4} xl={4}>
              <figure className='productHeroWeb-img'>
                <Image src={HeroSectionData.image} alt="Infograins" fluid />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductHeroWeb