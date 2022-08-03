import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AOS from "aos";
import axios from "axios";
import { Link } from 'react-router-dom';
const CareerApply = (props) => {

  const [careerDetails, setCareerDetails] = useState([]);
  const params = useParams();
  const { apl_slug } = params;
  // console.log('apl_slug', apl_slug);
  // var slug = apl_slug
  // console.log("slug", slug);
  const slugData = async () => {
    try {
      const url = await axios.get(`${process.env.REACT_APP_BASE_URL}career/${apl_slug}/`);
      console.log("url_slug", url.data);
      setCareerDetails(url.data.response)
    } catch (error) {
      console.log(error);
    }
  }
  // =========================== scroll To Top default =========================
  useEffect(() => {
    props.demo('top');
    slugData()
  }, [])
  // =========================== scroll To Top default =========================

  // ======================== Convert html ================================= 

  const skills = useRef(null);
  const responsibilities = useRef(null);
  useEffect(() => {
    skills.current.innerHTML = `${careerDetails.skills}`;
    responsibilities.current.innerHTML = `${careerDetails.responsibilities}`;
  }, [careerDetails]);

  // ======================== Convert html =================================
  return (
    <>
      <section className='career-apply-wrap'>
        <div className='career-apply-banner'></div>
        <div className='career-apply-details-wrap'>
          <Container>
            <Row>
              <Col sm={6} md={6} lg={6} xl={6}>
                <div className='career-apply-details'>
                  <div className='career-apply-head'>
                    <h2 className='h2_title'>{careerDetails.opening_designation}</h2>
                    <p>{careerDetails.designation_brief}</p>
                    <p><strong>Experience:</strong> {careerDetails.experience}</p>
                  </div>
                  <div className="career-apply-dis">
                    {/* <h3 className='h3_title'>Skills</h3> */}
                    <div className='career-apply-skills' ref={skills}></div>
                    {/* <h3 className='h3_title'>Responsibilities</h3> */}
                    <div className='career-apply-res' ref={responsibilities}></div>
                  </div>
                </div>
              </Col>
              <Col sm={6} md={6} lg={6} xl={6}>
                <div className='career-apply-form-wrap'>
                  <h2 className='h2_title'>Apply For Job</h2>
                  <Form>
                    <Row>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingFname" label="First Name">
                          <Form.Control type="text" placeholder="First Name" className='input_field' />
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingLname" label="Last Name">
                          <Form.Control type="text" placeholder="Last Name" className='input_field' />
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingEmail" label="Email address" >
                          <Form.Control type="email" placeholder="xxx@xxx.com" className='input_field' />
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingNumber" label="Phone Number">
                          <Form.Control type="number" placeholder="Phone Number" className='input_field' />
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingSelect">
                          <Form.Select aria-label="City" className='input_field'>
                            <option disabled selected>City</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                      <FloatingLabel controlId="floatingSelect">
                          <Form.Select aria-label="State" className='input_field'>
                            <option disabled selected>State</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </FloatingLabel>
                        </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingPosition" label="Position applying for">
                          <Form.Control type="text" placeholder="Position applying for" className='input_field' />
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingExperience" label="Experience">
                          <Form.Control type="text" placeholder="Experience" className='input_field' />
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingSelect">
                          <Form.Select aria-label="Reference" className='input_field'>
                            <option disabled selected>Reference</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <Form.Group controlId="exampleFile">
                          <Form.Control type="file" placeholder="Experience" className='input_field input_file' />
                        </Form.Group>
                      </Col>
                      <Col sm={12} md={12} lg={12} xl={12}>
                        <FloatingLabel controlId="floatingSkills" label="Skills" >
                          <Form.Control type="text" placeholder="Skills" className='input_field' />
                        </FloatingLabel>
                      </Col>
                      <Col sm={12} md={12} lg={12} xl={12}>
                        <FloatingLabel controlId="floatingAddress" label="Address" >
                          <Form.Control type="text" placeholder="Address" className='input_field' />
                        </FloatingLabel>
                      </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default CareerApply