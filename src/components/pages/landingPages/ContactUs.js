import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import Loader from "react-js-loader";
const ContactUs = () => {

    const [countryCodeData, setCountryCodeData] = useState([])
    const [ErrorCountryCode, setErrorCountryCode] = useState(false);
    const [loader, setLoader] = useState(false);

    const [input, setInput] = useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: ""
    })
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [subjectError, setSubject] = useState("");
    const [messageError, setMessage] = useState("");


    async function countryCode() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}get_country_dialing_code/`);
            const apiData = api.data.response.country_dialing_code;
            setCountryCodeData(apiData)
        } catch (error) {
            setErrorCountryCode(true)
        }
    }

    useEffect(() => {
        countryCode()
    }, [])


    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault(e);
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
        //     setNumberError("")
        // } else if (input.number.match(phoneno)) {
        //     setNumberError("")
        // } else {
        //     setNumberError("Please enter valid number")
        //     return true
        // }

        // ================ subject =============================
        if (!input.subject) {
            setSubject("Subject is required");
        } else {
            setSubject("");
        }
        // // ================ Message =============================
        let messageId = document.getElementById("messageId").innerHTML
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
                setNumberError("");
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


    // ========================================================= Get in Touch =============================================
    const [getContentData, setGetContentData] = useState([])
    const [Error, setError] = useState(false)
    async function getContent() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/get-in-touch/`);
            setGetContentData(api.data.response)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        getContent()
    }, [])


    // ========================================= Arrow Key ==============================
    useEffect(() => {
        document.getElementById('userNumber').addEventListener('keydown', function (e) {
            if (e.code === 'ArrowUp' || e.code === 'ArrowDown') { e.preventDefault() }
        });
    }, [])

    return (
        <>
            <div className='form-wrap'>
                <Container>
                    <div className="contact-form-heading">
                        <div className='contact_form_head_div'>
                            <h2 className='h2_title'>{getContentData.heading}</h2>
                            <p>{getContentData.description}</p>
                        </div>
                    </div>
                    <div className='get_in_touch_div'>
                        
                        <Row className='get_in_touch_row justify-content-around'>
                            <Col sm={12} md={5} lg={5} xl={5}>
                                {Error ? "Error" :
                                    getContentData.length === 0 ? 'loading...'
                                        : <div className='contact_information'>
                                            <div className='head'>
                                                <h3 className='h3_title'>Contact Information</h3>
                                                <p>{getContentData.contactInformation.description}</p>
                                            </div>
                                            <div className='contact-details'>
                                                <h5 className='h5_title'>Email</h5>
                                                <a href={`mailto:${getContentData.contactInformation.email}`} target={'_blank'}>{getContentData.contactInformation.email}</a>
                                                <h5 className='h5_title'>Phone</h5>
                                                <a href={`tel:${getContentData.contactInformation.phone}`}>IND {getContentData.contactInformation.phone}</a>
                                                <h5 className='h5_title'>On The Web</h5>
                                                <a href={`mailto:${getContentData.contactInformation.on_the_web}`}>{getContentData.contactInformation.on_the_web}</a>
                                            </div>
                                        </div>
                                }
                            </Col>
                            <Col sm={12} md={6} lg={6} xl={6}>
                                <Form className='contact-form-wrap row' onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 col-lg-12" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" className='input_field' name="name" value={input.name} onChange={handleChange} />
                                        <small style={{ color: "red", fontSize: "12px" }}>{nameError}</small>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" className='input_field' name="email" value={input.email} onChange={handleChange} />
                                        <small style={{ color: "red", fontSize: "12px" }}>{emailError}</small>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-lg-12">
                                        <Form.Label>Mobile No. (optional)</Form.Label>
                                        <div className='mobile_div'>
                                            <Form.Select id='mobile'>
                                                {ErrorCountryCode ?
                                                    <option>00</option>
                                                    : countryCodeData.map((e, key) => {

                                                        return <option key={key} value={e.Dial}>{e.country_with_dialing_code}</option>
                                                    })}
                                            </Form.Select>
                                            <Form.Control type="number" min={0} id="userNumber" placeholder="Enter number" className='input_field' name="number" value={input.number} onChange={handleChange} />
                                        </div>
                                        <small style={{ color: "red", fontSize: "12px" }}>{numberError}</small>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-lg-12" controlId="formBasicSubjecy">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type="text" placeholder="Enter subject" className='input_field' name="subject" value={input.subject} onChange={handleChange} />
                                        <small style={{ color: "red", fontSize: "12px" }}>{subjectError}</small>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Your Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Leave a comment here"
                                            style={{ height: '100px' }}
                                            className='input_field'
                                            name="message" value={input.message} onChange={handleChange} id="messageId"
                                        />
                                        <small style={{ color: "red", fontSize: "12px" }}>{messageError}</small>
                                    </Form.Group>
                                    <button type="submit" > 
                                        {
                                            loader ?  <div className="item"><Loader type="spinner-circle" bgColor={"#fff"} color={'#FFFFFF'} size={40} /></div> : "Send"
                                        }
                                    </button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default ContactUs