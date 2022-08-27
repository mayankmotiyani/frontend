import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from "react-bootstrap"
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs"
import { useState } from 'react';
const Address = () => {

  const [infograinsData, setInfograinsData] = useState([])
  const [otherData, setOtherData] = useState([])
  const addressData = async () => {
    try {
      const url = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/office-address/`)
      setInfograinsData(url.data.infograins_india_office)
      setOtherData(url.data.response);
      const title_tag = document.getElementsByTagName('title')
      const meta_description = document.getElementsByTagName('meta');
      meta_description.description.content = url.data.metacontent.content
      title_tag[0].innerText = url.data.metacontent.title
    } catch (error) {
    }
  }
  useEffect(() => {
    // addressData()
  }, [])

  return (
    <>
      <section className='address-wrap'>
        <Container>
          <div className='address-title'>
            <h2 className='h2_title'>Development Center-InfoGrains Software Solutions Pvt. Ltd.</h2>
          </div>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className='ind-address-wrap'>
                <Card>
                  <Card.Body>
                    <Card.Title>{infograinsData.office}</Card.Title>
                    <Card.Text>{infograinsData.location}</Card.Text>
                    <div className='address-num'>
                      <BsTelephone /> <Card.Link href="#">{infograinsData.phone}</Card.Link>
                    </div>
                    <div className='address-email'>
                      <AiOutlineMail /> <Card.Link href="#">{infograinsData.email}</Card.Link>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className='sub_address'>
                <Row>
                  {
                    otherData.map((ele) => {
                      return (
                        <Col sm={6} md={6} lg={6} xl={6} key={ele.id}>
                          <Card>
                            <Card.Body>
                              <Card.Title>{ele.office}</Card.Title>
                              <Card.Text>{ele.location}</Card.Text>
                              <div className='address-num'>
                                <BsTelephone />  <Card.Link href="#">{ele.phone}</Card.Link>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      )
                    })
                  }
                </Row>
              </div>
            </Col>
          </Row>

        </Container>
      </section>
    </>
  )
}

export default Address