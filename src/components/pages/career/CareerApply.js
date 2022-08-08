import React, { useEffect, useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, FloatingLabel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AOS from "aos";
import axios from "axios";
import { Link } from 'react-router-dom';
const CareerApply = (props) => {
  // =================================== apply from validation ===============================
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    email: "",
    number: "",
    skills: "",
    address: "",
    position: "",
    experience: "",
    file: "",
    state: "",
    city: ""
  })
  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [skillsError, setSkillsError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [positionError, setPositionError] = useState("");
  const [experienceError, setExperience] = useState("");
  const [fileError, setFileError] = useState("");

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault(e);
    // Allowing file type
    var allowedExtensions = /(\.eml|\.pdf|\.dot|\.docx)$/i;

    if (!allowedExtensions.exec(input.file)) {
      setFileError("Invalid file type")
    }
    else {
      setFileError("")
    }
    // ================ fname =============================
    if (!input.fname) {
      setFnameError("First name is required");
    } else {
      setFnameError("");
    }
    // ================ lname =============================

    if (!input.lname) {
      setLnameError("Last name is required");
    } else {
      setLnameError("");
    }
    // ================ email =============================
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.email) {
      setEmailError("Email is required")
    } else if (!input.email.match(mailformat)) {
      setEmailError("Please enter your valid email")
    } else {
      setEmailError("")
    }
    // ==================== Number =========================
    var phoneno = /^\d{10}$/;
    if (!input.number) {
      setNumberError("Number is required")
    } else if (input.number.match(phoneno)) {
      setNumberError("")
    } else {
      setNumberError("Please enter valid number")
      return true
    }
    // ================ skills =============================

    if (!input.skills) {
      setSkillsError("Skills is required");
    } else {
      setSkillsError("");
    }
    // ================ address =============================

    if (!input.address) {
      setAddressError("Address is required");
    } else {
      setAddressError("");
    }
    // ================ position =============================

    if (!input.position) {
      setPositionError("Position is required");
    } else {
      setPositionError("");
    }
    // ================ Experience =============================

    if (!input.experience) {
      setExperience("Experience is required");
    } else {
      setExperience("");
    }
    axios.post(`${process.env.REACT_APP_BASE_URL}apply-job/${apl_slug}/`, {
      headers: {
        'Content-Type': 'multipart/form-data;'
      },
      name: input.fname,
      email: input.email,
      state: input.state,
      city: input.city,
      address: input.address,
      resume: "input.file",
      contact: input.number
    }).then(res => {
      console.log("res", res)
    }).catch(err => {
      console.log("err", err)
    })

    console.log("input.fname", input.fname, "input.email", input.email, "input.state", input.state, "input.city", input.city, "input.address", input.address, "input.file", input.file, "input.number", input.number);
  }

  // =================================== state api ===========================================
  var states = input.state;
  const [stateData, setStateData] = useState([])
  const stateApi = async () => {
    try {
      const state = await axios.post("https://countriesnow.space/api/v0.1/countries/states", {
        "country": "India",
        headers: {
          'Content-Type': 'application/json'
        },
      });
      setStateData(state.data.data.states);
    } catch (error) {
      console.log("error", error);
    }
  }
  const [cityData, setCityData] = useState([]);
  const cityApi = async () => {
    try {
      const city = await axios.post("https://countriesnow.space/api/v0.1/countries/state/cities", {
        "country": "India",
        "state": states,
        headers: {
          'Content-Type': 'application/json'
        },
      });
      console.log("city", city.data.data);
      setCityData(city.data.data);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    cityApi()
  }, [states])

  // =================================== careerDetails =======================================

  const [careerDetails, setCareerDetails] = useState([]);
  const params = useParams();
  const { apl_slug } = params;
  const slugData = async () => {
    try {
      const url = await axios.get(`${process.env.REACT_APP_BASE_URL}career/${apl_slug}/`);
      setCareerDetails(url.data.response)
    } catch (error) {
      console.log(error);
    }
  }
  // =========================== scroll To Top default =========================
  useEffect(() => {
    props.demo('top');
    slugData();
    stateApi();
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
        <div className='career-apply-banner'>
          <h2 className='h2_title'>Career</h2>
        </div>
        <div className='career-apply-details-wrap'>
          <Container>
            <Row>
              <Col sm={12} md={12} lg={6} xl={6}>
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
              <Col sm={12} md={12} lg={6} xl={6}>
                <div className='career-apply-form-wrap'>
                  <h2 className='h2_title'>Apply For Job</h2>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingFname" label="First Name">
                          <Form.Control type="text" placeholder="First Name" className='input_field' name="fname" value={input.fname} onChange={handleChange} />
                          <small style={{ color: "red", fontSize: "12px" }}>{fnameError}</small>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingLname" label="Last Name">
                          <Form.Control type="text" placeholder="Last Name" className='input_field' name="lname" value={input.lname} onChange={handleChange} />
                          <small style={{ color: "red", fontSize: "12px" }}>{lnameError}</small>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingEmail" label="Email address" >
                          <Form.Control type="email" placeholder="xxx@xxx.com" className='input_field' name="email" value={input.email} onChange={handleChange} />
                          <small style={{ color: "red", fontSize: "12px" }}>{emailError}</small>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingNumber" label="Phone Number">
                          <Form.Control type="number" placeholder="Phone Number" className='input_field' name="number" value={input.number} onChange={handleChange} />
                          <small style={{ color: "red", fontSize: "12px" }}>{numberError}</small>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingSelect">
                          <Form.Select aria-label="State" className='input_field' name="state" value={input.state} onChange={handleChange} >
                            <option value="state">State</option>
                            {
                              stateData.map((ele, key) => {
                                return (
                                  <option value={ele.name} key={key}>{ele.name}</option>
                                )
                              })
                            }

                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingSelect">
                          <Form.Select aria-label="City" className='input_field' name="city" value={input.city} onChange={handleChange} >
                            <option value="city" >City</option>
                            {
                              cityData.map((city, key) => {
                                return (
                                  <option value={city} key={key}>{city}</option>
                                )
                              })
                            }
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingPosition" label="Position applying for">
                          <Form.Control type="text" placeholder="Position applying for" className='input_field' name="position" value={input.position} onChange={handleChange} />
                          <small style={{ color: "red", fontSize: "12px" }}>{positionError}</small>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingExperience" label="Experience">
                          <Form.Control type="text" placeholder="Experience" className='input_field' name="experience" value={input.experience} onChange={handleChange} />
                          <small style={{ color: "red", fontSize: "12px" }}>{experienceError}</small>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <FloatingLabel controlId="floatingSelect">
                          <Form.Select aria-label="Reference" className='input_field' defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Reference</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                      <Col sm={6} md={6} lg={6} xl={6}>
                        <Form.Group controlId="exampleFile">
                          <Form.Control type="file" placeholder="Experience" className='input_field input_file' name="file" value={input.file} onChange={handleChange} accept=".pdf, .docx, .dot, .dotx " />
                          <small style={{ color: "red", fontSize: "12px" }}>{fileError}</small>
                        </Form.Group>
                      </Col>
                      <Col sm={12} md={12} lg={12} xl={12}>
                        <FloatingLabel controlId="floatingSkills" label="Skills" >
                          <Form.Control type="text" placeholder="Skills" className='input_field' name="skills" value={input.skills} onChange={handleChange} />
                          <small style={{ color: "red", fontSize: "12px" }}>{skillsError}</small>
                        </FloatingLabel>
                      </Col>
                      <Col sm={12} md={12} lg={12} xl={12}>
                        <FloatingLabel controlId="floatingAddress" label="Address" >
                          <Form.Control type="text" placeholder="Address" className='input_field' name="address" value={input.address} onChange={handleChange} />
                          <small style={{ color: "red", fontSize: "12px" }}>{addressError}</small>
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