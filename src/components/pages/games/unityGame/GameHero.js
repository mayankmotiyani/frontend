import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const GameHero = () => {
    // ========================= form validation =========================
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: ""
    });
    const [countryCodeData, setCountryCodeData] = useState([]);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [Error, setError] = useState(false);
    const [numberError, setNumberError] = useState("");
    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
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
            setSubjectError("Subject is required");
        } else {
            setSubjectError("");
        }
    }

    // ========================= form validation ========================= 

    // ================================= API ======================================
    const { game_slug } = useParams()
    const [ApiData, setApiData] = useState([])
    async function api() {
        try {
            const { data: { response } } = await axios.get(`${process.env.REACT_APP_BASE_URL}/game/${game_slug}/`);
            setApiData(response)
            // console.log(response);
        } catch (error) {

        }
    }
    useEffect(() => {
        api()
    }, [game_slug])
    // ========================= Country Code =============================
    async function countryCode() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}get_country_dialing_code/`);
            const apiData = api.data.response.country_dialing_code;
            setCountryCodeData(apiData)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        countryCode()
    }, [])
    return (
        <>
            <section className='gameHero-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={8} xl={8}>
                            <div className='gameHero-about-wrap'>
                                <h2 className='h2_title'>{ApiData.name}</h2>
                                <h3 className='h3_title'>Company</h3>
                                <p>{ApiData.description}</p>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <Form className='gameHero-from-wrap' onSubmit={handleSubmit}>
                                <h3 className='h3_title'>Talk to our experts</h3>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="text" placeholder="Enter name" className='input_field' name='name' value={input.name} onChange={handleChange} />
                                    <small style={{ color: "red", fontSize: "12px" }}>{nameError}</small>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" className='input_field' name='email' value={input.email} onChange={handleChange} />
                                    <small style={{ color: "red", fontSize: "12px" }}>{emailError}</small>
                                </Form.Group>
                                {/* <Form.Group className="mb-3" controlId="formBasicSubjecy">
                                    <Form.Control type="text" placeholder="Enter subject" className='input_field' name='subject' value={input.subject} onChange={handleChange} />
                                    <small style={{ color: "red", fontSize: "12px" }}>{subjectError}</small>
                                </Form.Group> */}
                                <Form.Group className="mb-3">
                                    <div className='mobile_div'>
                                        <Form.Select id='mobile'>
                                            {Error ?
                                                <option>00</option>
                                                : countryCodeData.map((e, key) => {

                                                    return <option key={key} value={e.Dial}>{e.country_with_dialing_code}</option>
                                                })}
                                        </Form.Select>
                                        <Form.Control type="number" min={0} id="userNumber" placeholder="Enter number" className='input_field' name="number" value={input.number} onChange={handleChange} />
                                    </div>
                                    <small style={{ color: "red", fontSize: "12px" }}>{numberError}</small>
                                </Form.Group>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                    className='input_field'
                                />
                                <Button type="submit">
                                    Send
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default GameHero