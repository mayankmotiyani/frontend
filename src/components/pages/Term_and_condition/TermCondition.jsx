import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

export default function TermCondition(props) {
    
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================

    // ==================================== API ============================================= 
    const Api_content = useRef(null)
    const [ApiData, setApiData] = useState([])
    async function api() {
        try {
            const { data: { response } } = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/term-and-condition/`);
            setApiData(response)
            Api_content.current.innerHTML = response[0].content;
        } catch (error) {

        }
    }

    useEffect(() => {
        api()
    }, [])

    return (
        <>
            <section className='term_condition_section'>
                <div className='head'>
                    {ApiData.length === 0 ? ''
                        :
                        <>
                            <h2 className="h2_title">{ApiData[0].title}</h2>
                            <p>{ApiData[0].description}</p>
                        </>
                    }
                </div>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div ref={Api_content} className='term_condition_content'></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
