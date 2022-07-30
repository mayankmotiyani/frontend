import React from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import productDemo from "../../../../assets/images/team/team.jpg"

const ProductHeroWeb = () => {
  return (
    <>
      <section className='productHeroWeb-wrap'>
        <Container>
          <Row>
            <Col sm={8} md={8} lg={8} xl={8}>
              <div className='productHeroWeb-details'>
                <h3 className='h3_title'>Sub Heading</h3>
                <h2 className='h2_title'>Let's Think Beyond IT</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque aspernatur quam excepturi, corrupti reprehenderit perspiciatis dolorem? Ducimus rem libero laboriosam!  corrupti reprehenderit perspiciatis dolorem? Ducimus rem libero laboriosam!</p>
                <button className='btn' type='button'>Click Me</button>
              </div>
            </Col>
            <Col sm={4} md={4} lg={4} xl={4}>
              <figure className='productHeroWeb-img'>
                <Image src={productDemo} alt="Infograins" fluid />
              </figure>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductHeroWeb