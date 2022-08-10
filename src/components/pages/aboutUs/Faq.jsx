import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Accordion, Container } from 'react-bootstrap'
export default function Faq() {
    const [apiData, setapiData] = useState([])
    const [Error, setError] = useState(false)
    async function api() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/faq/`);
            setapiData(api.data.response)
        } catch (error) {
            setError(true)
        }
    }
    useEffect(() => {
        api()
    }, [])

    return (
        <>
            <section className='about-accordion-wrap'>
                <Container>
                    <div className='about-accordion-title'>
                        <h2 className='h2_title'>FAQ</h2>
                    </div>
                    <Accordion>
                        {Error ? 'Error'
                            : apiData.length === 0 ? 'loading...'
                                : apiData.map((e, key) => {
                                    return <Accordion.Item eventKey={e.id} key={key}>
                                        <Accordion.Header>{e.question}</Accordion.Header>
                                        <Accordion.Body>{e.answer}</Accordion.Body>
                                    </Accordion.Item>
                                })
                        }
                    </Accordion>
                </Container>
            </section>
        </>
    )
}
