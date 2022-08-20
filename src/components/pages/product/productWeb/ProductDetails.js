import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Tabs, Tab } from "react-bootstrap";
import webImg from "../../../../assets/images/product/web.png";
import appImg from "../../../../assets/images/product/app.png";
import axios from 'axios';
import { Link } from 'react-router-dom'

const ProductDetails = () => {
  // =========================================== API ======================================
  const [WebData, setWebData] = useState([])
  const [AppData, setAppData] = useState([])

  async function api() {
    try {
      const { data: { web, app } } = await axios.get(`${process.env.REACT_APP_BASE_URL}product/sliceledger_product/`);
      setWebData(web)
      setAppData(app)
    } catch (error) {

    }
  }

  useEffect(() => {
    api()
  }, [])

  return (
    <>
      <section className='productDetails-wrap'>

        <div className='productDetails-title'>
          <h2 className='h2_title'>We Serve Our Clients With Smile...<br /> That's Why We Are Lauded</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam repudiandae perspiciatis aliquam quam iure dolorem illum eius quae dolor ipsa ut, debitis, ratione labore mollitia! Distinctio animi fugiat fugit odio dolorum at placeat provident voluptatibus laborum sapiente sit ad dignissimos odit explicabo illum blanditiis, vel aut maiores, optio nihil alias.</p>
        </div>
        <div className='productDetails-tabs-wrap'>
          <Tabs
            defaultActiveKey="web"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="web" title="Web">
              <div className='productDetails-web-detail'>
                <Container>
                  {WebData.map(({ product_slug, heading, content, image, title }, key) => {
                    return <Row>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <div className='productDetails-web-tab'>
                          <h3 className='h3_title'>{title}</h3>
                          <h2 className='h2_title'>{heading}</h2>
                          <p>{content}</p>
                          <Link to={product_slug} className='btn' type='button'>Live Preview</Link>
                        </div>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <figure className='productDetails-web-tab'>
                          <Image src={image} alt="Web Img" />
                        </figure>
                      </Col>
                    </Row>
                  })}
                </Container>
              </div>
            </Tab>
            <Tab eventKey="app" title="App">
              <div className='productDetails-app-detail'>
                <Container>
                  {AppData.map(({ product_slug, title, content, image, heading }, key) => {
                    return <Row key={key}>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <div className='productDetails-app-tab'>
                          <h3 className='h3_title'>{title}</h3>
                          <h2 className='h2_title'>{heading}</h2>
                          <p>{content}</p>
                          <Link to={product_slug} className='btn' type='button'>Live Preview</Link>
                        </div>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <figure className='productDetails-app-img'>
                          <Image src={image} alt="App Img" />
                        </figure>
                      </Col>
                    </Row>
                  })}
                </Container>
              </div>

            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default ProductDetails