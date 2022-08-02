import React from 'react';
import { Container, Row, Col, Image, Tabs, Tab } from "react-bootstrap";
import webImg from "../../../../assets/images/product/web.png";
import appImg from "../../../../assets/images/product/app.png";

const productDetails = () => {
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
                  <Row>
                    <Col sm={6} md={6} lg={6} xl={6}>
                      <div className='productDetails-web-tab'>
                        <h2 className='h2_title'>Heading</h2>
                        <h3 className='h3_title'>Sub title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est harum perspiciatis aperiam impedit. Debitis soluta porro unde iusto laboriosam, nulla tempora minima veritatis a minus tenetur assumenda dicta corporis.</p>
                        <button className='btn' type='button'>Live Preview</button>
                      </div>
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={6}>
                      <figure className='productDetails-web-tab'>
                        <Image src={webImg} alt="Web Img" />
                      </figure>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className='productDetails-web-detail'>
                <Container>
                  <Row>
                    <Col sm={6} md={6} lg={6} xl={6}>
                      <div className='productDetails-web-tab'>
                        <h2 className='h2_title'>Heading</h2>
                        <h3 className='h3_title'>Sub title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est harum perspiciatis aperiam impedit. Debitis soluta porro unde iusto laboriosam, nulla tempora minima veritatis a minus tenetur assumenda dicta corporis.</p>
                        <button className='btn' type='button'>Live Preview</button>
                      </div>
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={6}>
                      <figure className='productDetails-web-img'>
                        <Image src={webImg} alt="Web Img" />
                      </figure>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Tab>
            <Tab eventKey="app" title="App">
              <div className='productDetails-app-detail'>
                <Container>
                  <Row>
                    <Col sm={6} md={6} lg={6} xl={6}>
                      <div className='productDetails-app-tab'>
                        <h2 className='h2_title'>Heading</h2>
                        <h3 className='h3_title'>Sub title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore est harum perspiciatis aperiam impedit. Debitis soluta porro unde iusto laboriosam, nulla tempora minima veritatis a minus tenetur assumenda dicta corporis.</p>
                        <button className='btn' type='button'>Live Preview</button>
                      </div>
                    </Col>
                    <Col sm={6} md={6} lg={6} xl={6}>
                      <figure className='productDetails-app-img'>
                        <Image src={appImg} alt="App Img" />
                      </figure>
                    </Col>
                  </Row>
                </Container>
              </div>
              
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  )
}

export default productDetails