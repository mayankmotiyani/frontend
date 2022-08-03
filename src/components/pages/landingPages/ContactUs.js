import axios from 'axios';
import { React, useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Form, Container, Col, Row, FloatingLabel } from 'react-bootstrap';

const ContactUs = () => {

    const [countryCodeData, setCountryCodeData] = useState([])
    const [ErrorCountryCode, setErrorCountryCode] = useState(false)
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
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault(e);

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
        var phoneno = /^\d{10}$/;
        if (!input.number) {
            setNumberError("Number is required")
        } else if (input.number.match(phoneno)) {
            setNumberError("")
        } else {
            setNumberError("Please enter valid number")
            return true
        }

        // ================ subject =============================
        if (!input.subject) {
            setSubject("Subject is required");
        } else {
            setSubject("");
        }
        // // ================ Message =============================
        // if (!input.messageError) {
        //     setMessage("Message is required");
        // } else {
        //     setMessage("");
        // }

        // ======================== concat number and dialingCode ==============================
        var mobilesData = document.getElementById("mobile").value;
        var concatData = mobilesData + input.number;
        // ======================== concat number and dialingCode ==============================



        var get_json = { dialingCode: mobilesData, contactNumber: concatData, fullName: input.name, emailId: input.email, projectDescription: "...." }
        var formdata = new FormData();
        formdata.append("get_contact_detail", JSON.stringify(get_json));

        var requestOptions = {
            method: 'POST',
            body: formdata,
        };

        fetch("http://127.0.0.1:8000/contact_us/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
    useEffect(() => {
        countryCode()
    }, [])


    return (
        <>
            <div className='form-wrap'>
                <Container>
                    <div className="contact-form-heading">
                        <div className='contact_form_head_div'>
                            <h2 className='h2_title'>Get In Touch</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugiat quasi id eius ducimus eum similique minima exercitationem distinctio a sapiente reiciendis consequuntur ea? Voluptatibus, commodi! Voluptatibus error illum ratione.</p>
                        </div>
                    </div>
                    <div className='get_in_touch_div'>
                        <Row className='get_in_touch_row justify-content-between'>
                            <Col sm={12} md={5} lg={5} xl={5}>
                                <div className='contact_information'>
                                    <div className='head'>
                                        <h3 className='h3_title'>Contact Information</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium non</p>
                                    </div>
                                    <div className='contact-details'>
                                        <h5 className='h5_title'>Email</h5>
                                        <a href="mailto:info@infograins.com" target={'_blank'}>info@infograins.com</a>
                                        <h5 className='h5_title'>Phone</h5>
                                        <a href='tel:+918925564395'>IND +91 8925564395</a>
                                        <h5 className='h5_title'>On The Web</h5>
                                        <a href='#'>ingrains@gmail.com</a>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={7} lg={7} xl={7}>
                                <Form className='contact-form-wrap row' onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" className='input_field' name="name" value={input.name} onChange={handleChange} />
                                        <small style={{ color: "red", fontSize: "12px" }}>{nameError}</small>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" className='input_field' name="email" value={input.email} onChange={handleChange} />
                                        <small style={{ color: "red", fontSize: "12px" }}>{emailError}</small>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-lg-6">
                                        <Form.Label>Mobile No.</Form.Label>
                                        <div className='mobile_div'>
                                            <Form.Select id='mobile'>
                                                {ErrorCountryCode ?
                                                    <option>00</option>
                                                : countryCodeData.map((e, key) => {
                                                    return <option key={key}>{e}</option>
                                                })}
                                            </Form.Select>
                                            <Form.Control type="number" placeholder="Enter number" className='input_field' name="number" value={input.number} onChange={handleChange} />
                                        </div>
                                        <small style={{ color: "red", fontSize: "12px" }}>{numberError}</small>
                                    </Form.Group>
                                    <Form.Group className="mb-3 col-lg-6" controlId="formBasicSubjecy">
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
                                            name="message" value={input.message} onChange={handleChange}
                                        />
                                        {/* <small style={{ color: "red", fontSize: "12px" }}>{messageError}</small> */}
                                    </Form.Group>
                                    <button type="submit">
                                        Send
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