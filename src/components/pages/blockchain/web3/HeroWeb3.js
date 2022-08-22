import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Image, Spinner } from "react-bootstrap"
import Background from '../../../../assets/images/background/web3/banner3.jpg';
import Loader from "react-js-loader";
const HeroWeb3 = () => {
  // =====================================  API start ============================================
  const navigate = useNavigate() 
  const location = useLocation();
  const filterApi_PathName = location.pathname.slice(1);

  const [BlockchainCate, setBlockchainCate] = useState([])
  const [ErrorBlockchain, setErrorBlockchain] = useState(false);
  const [countryCodeData, setCountryCodeData] = useState([]);
  const [numberError, setNumberError] = useState("");
  const [loader, setLoader] = useState(false);
  async function API() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
      setBlockchainCate(api.data.response)
    } catch (error) {
      setErrorBlockchain(true)
      navigate('/')
    }
  }

  useEffect(() => {
    API()
  }, [filterApi_PathName])

  // =====================================  API end ============================================ 

  // ========================= form validation =========================
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    subject: ""
  })
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessage] = useState("");
  const handleChange = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value })
  }
  // ========================= Country Code =============================
  async function countryCode() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}get_country_dialing_code/`);
      const apiData = api.data.response.country_dialing_code;
      setCountryCodeData(apiData)
    } catch (error) {
      setErrorBlockchain(true)
    }
  }

  useEffect(() => {
    countryCode()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)
    // ================ name =============================
    if (!input.name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    // ===================== email =========================
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.email) {
      setEmailError("Email is required")
    } else if (!input.email.match(mailformat)) {
      setEmailError("Please enter your valid email")
    } else {
      setEmailError("")
    }
    // ==================== Number =========================
    // var phoneno = /^\d{10}$/;
    // if (!input.number) {
    //   setNumberError("Number is required")
    // } else if (input.number.match(phoneno)) {
    //   setNumberError("")
    // } else {
    //   setNumberError("Please enter valid number")
    //   return true
    // }
    // ================ subject =============================
    if (!input.subject) {
      setSubjectError("Subject is required");
    } else {
      setSubjectError("");
    }
    // // ================ Message =============================
    let messageId = document.getElementById("messageId").innerHTML;
    if (!messageId) {
      setMessage("Message is required");
    } else {
      setMessage("");
    }
    // ======================== concat number and dialingCode ==============================
    if (input.number != "") {
      var mobilesData = document.getElementById("mobile").value;
      var concatData = mobilesData + input.number;
    } else {
      concatData = ""
    }
    // console.log("mobilesData", mobilesData);
    // ======================== concat number and dialingCode ==============================
    const payload = {
      dialingCode: mobilesData,
      contactNumber: concatData,
      fullName: input.name,
      emailId: input.email,
      message: input.message,
      subject: input.subject
    }
    var formdata = new FormData();
    formdata.append('get_contact_detail', JSON.stringify(payload));
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}contact_us/`,
      data: formdata,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => {
      if (res) {
        setInput({
          name: "",
          email: "",
          message: "",
          number: "",
          subject: ""
        })
        setLoader(false)
      }
    }).catch(err => {
      setLoader(false)
      console.log("err", err);
      var numErr = JSON.parse(err.request.response);
      if (numErr.response === "Phone number is not valid!") {
        setNumberError("Phone number is not valid!")
      } else {
        setNumberError("")
      }
    })

  }

  // ========================= form validation ========================= 


  return (
    <>
      <section className='web3-hero-wrap'>
        <Image className='background_img' src={Background} fluid />
        <Container>
          <Row>
            <Col sm={6} md={6} lg={8} xl={8}>
              {ErrorBlockchain ? 'Error'
                : BlockchainCate.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                  : <div className='w3-about-wrap'>
                    <h2 className='h2_title'>{BlockchainCate.blockchain_name}</h2>
                    <h3 className='h3_title'>Company In India</h3>
                    <p>{BlockchainCate.blockchain_description}</p>
                  </div>
              }
            </Col>
            <Col sm={6} md={6} lg={4} xl={4}>
              <Form className='w3-from-wrap' onSubmit={handleSubmit}>
                <h3 className='h3_title'>Talk to our experts</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter name" className='input_field' name='name' value={input.name} onChange={handleChange} />
                  <small style={{ color: "red", fontSize: "12px" }}>{nameError}</small>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" className='input_field' name='email' value={input.email} onChange={handleChange} />
                  <small style={{ color: "red", fontSize: "12px" }}>{emailError}</small>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubjecy">
                  <Form.Control type="text" placeholder="Enter subject" className='input_field' name='subject' value={input.subject} onChange={handleChange} />
                  <small style={{ color: "red", fontSize: "12px" }}>{subjectError}</small>
                </Form.Group>
                <Form.Group className="mb-3">
                  <div className='mobile_div'>
                    <Form.Select id='mobile'>
                      {ErrorBlockchain ?
                        <option>00</option>
                        : countryCodeData.map((e, key) => {

                          return <option key={key} value={e.Dial}>{e.country_with_dialing_code}</option>
                        })}
                    </Form.Select>
                    <Form.Control type="number" min={0} id="userNumber" placeholder="Enter number" className='input_field' name="number" value={input.number} onChange={handleChange} />
                  </div>
                  <small style={{ color: "red", fontSize: "12px" }}>{numberError}</small>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    className='input_field'
                    name='message'
                    value={input.message} onChange={handleChange} id="messageId"
                  />
                  <small style={{ color: "red", fontSize: "12px" }}>{messageError}</small>
                </Form.Group>
                <Button type="submit">
                  {
                    loader ? <div className="item"><Loader type="spinner-circle" bgColor={"#fff"} color={'#FFFFFF'} size={40} /></div> : "Send"
                  }
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default HeroWeb3