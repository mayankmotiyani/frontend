import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default function Contact() {
    return (
        <>
            <section className='contact_form'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head'>
                                <h2 className='h2_title'>React Us</h2>
                            </div>
                        </Col>
                        <Col lg={12}>
                            <div className='franchise_form'>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
