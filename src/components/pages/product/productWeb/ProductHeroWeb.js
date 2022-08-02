import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import productBanner from "../../../../assets/images/product/Infograin_product.png"

const ProductHeroWeb = () => {
  return (
    <>
      <section className='productHeroWeb-wrap'>
        <Container>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6}>
              <div className='productHeroWeb-details'>
                <h3 className='h3_title'>Sub Heading</h3>
                <h2 className='h2_title'>Let's Think Beyond IT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aspernatur quam excepturi, corrupti reprehenderit perspiciatis dolorem? Ducimus rem libero laboriosam!  corrupti reprehenderit perspiciatis dolorem? Ducimus rem libero laboriosam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aspernatur quam excepturi, corrupti reprehenderit perspiciatis dolorem? Ducimus rem libero laboriosam!  corrupti reprehenderit perspiciatis dolorem? Ducimus rem libero laboriosam!</p>
                <button className='btn' type='button'>Click Me</button>
              </div>
            </Col>
            <Col sm={4} md={4} lg={4} xl={4}>
              <figure className='productHeroWeb-img'>
                <Image src={productBanner} alt="Infograins" fluid />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductHeroWeb