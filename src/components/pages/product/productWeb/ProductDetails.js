import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Image, Tabs, Tab } from "react-bootstrap";
import axios from 'axios';
import { Link } from 'react-router-dom'

const ProductDetails = () => {
  // =========================================== API ======================================
  const [WebData, setWebData] = useState([])
  const [AppData, setAppData] = useState([])
  const [SectionOneData, setSectionOneData] = useState({})

  async function api() {
    try {
      const { data: { web, app, section_one } } = await axios.get(`${process.env.REACT_APP_BASE_URL}product/sliceledger_product/`);
      setWebData(web)
      setAppData(app)
      setSectionOneData(section_one)
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
          <h2 className='h2_title'>{SectionOneData.heading}</h2>
          <p>{SectionOneData.content}</p>
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
                    return <Row key={key}>
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