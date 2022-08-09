import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const GameHero = () => {
    // ========================= form validation =========================
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: ""
    })
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
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

        // ================ subject =============================
        if (!input.subject) {
            setSubjectError("Subject is required");
        } else {
            setSubjectError("");
        }
    }

    // ========================= form validation ========================= 
    return (
        <>
            <section className='gameHero-wrap'>
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={8} xl={8}>
                            <div className='gameHero-about-wrap'>
                                <h2 className='h2_title'>Unity 3D Game</h2>
                                <h3 className='h3_title'>Development Company</h3>
                                <p>Step into the world of innovation where every opportunity level up your target audience with monetary, physical, and mental benefits. We provide Unity Game development services with top-notch blockchain experts that offer unlimited potential to scale your business and players.</p>
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
                                <Form.Group className="mb-3" controlId="formBasicSubjecy">
                                    <Form.Control type="text" placeholder="Enter subject" className='input_field' name='subject' value={input.subject} onChange={handleChange} />
                                    <small style={{ color: "red", fontSize: "12px" }}>{subjectError}</small>
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