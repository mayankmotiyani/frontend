import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Container, Col, Row } from 'react-bootstrap';
import mission from "../../../assets/images/mission/misson1.jpg";
const VisionMission = () => {
  const [vision, setVision] = useState("");
  const [visionHead, setVisionHead] = useState("");
  const [Error, setError] = useState(false)
  const visionData = async () => {
    try {
      const url = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/vision-and-mission/`);
      setVision(url.data.response)
      setVisionHead(url.data.heading_and_subheading)
    } catch (error) {
      setError(true)
      console.log("error", error.message);
    }
  }
  useEffect(() => {
    visionData()
  }, []);

  const descriptions = useRef({});
  useEffect(() => {
    descriptions.current.innerHTML = `${vision.description}`;
  }, [vision]);
  return (
    <>
      <section className='visionMission-wrap' id='mission'>
        <Container>
          <Row>
            <Col sm={6} md={6} lg={6} xl={6}>
              {Error ? 'Error'
                : vision.length === 0 ? 'loading...'
                  : <figure className='mission-img'>
                    <img src={vision.image} alt="mission" />
                  </figure>
              }
            </Col>
            {Error ? 'Error'
              : vision === "" ? 'loading...'
                :
                <Col sm={6} md={6} lg={6} xl={6}>
                  <div className='visionMission-list'>
                    <h2 className='h2_title'>{visionHead.subheading}</h2>
                    <h2 className='h2_title'>{visionHead.visionHead}</h2>
                    <div ref={descriptions}></div>
                    {/* <ul>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum voluptas</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum voluptas</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum voluptas</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto laborum voluptas</li>
                </ul> */}
                  </div>
                </Col>
            }
          </Row>
        </Container>
      </section>
    </>
  )
}

export default VisionMission