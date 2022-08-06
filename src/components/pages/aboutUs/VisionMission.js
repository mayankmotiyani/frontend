import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import mission from "../../../assets/images/mission/misson1.jpg"
// D:\Sudhanshu\project\infograins_sFront-end\front-end\src\assets\images\mission\misson1.jpg
const VisionMission = () => {
  return (
    <>
      <section className='visionMission-wrap'>
        <Container>
          <Row>
            <Col sm={12} md={12} lg={6} xl={6}>
              <figure className='mission-img'>
                <img src={mission} alt="mission" />
              </figure>
            </Col>
            <Col sm={12} md={12} lg={6} xl={6}>
              <div className='visionMission-list'>
                <h3 className='h3_title'>Mission <span>&</span> vision</h3>
                <h2 className='h2_title'>Heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro incidunt cumque? Ex vitae quis numquam enim inventore! Eum, in autem nisi illum cum nihil inventore numquam consequuntur distinctio! Dolorum.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic porro incidunt cumque? Ex vitae quis numquam enim inventore! Eum, in autem nisi illum cum nihil inventore numquam consequuntur distinctio! Dolorum.</p>
                <ul>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum voluptas</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum voluptas</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum voluptas</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum voluptas</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default VisionMission