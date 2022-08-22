import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Carousel, Row, Col, Spinner } from 'react-bootstrap'
import { IoIosWarning } from 'react-icons/io'

const Testimonial = () => {

    // ================================ Testimonial API ===================================
    const [TestimonialData, setTestimonialData] = useState([])
    const [ErrorTestimonial, setErrorTestimonial] = useState(false)
    async function testimonialAPI() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/testimonial/`)
            setTestimonialData(api.data.response)
        } catch (error) {
            setErrorTestimonial(true)
        }
    }

    // =============================== Head API =====================================
    const [HeadData, setHeadData] = useState([])
    const [ErrorHead, setErrorHead] = useState(false)
    async function head() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/testimonials-section/`);
            setHeadData(api.data.response)
        } catch (error) {
            setErrorHead(true)
        }
    }

    useEffect(() => {
        head()
        testimonialAPI()
    }, [])

    // ================================ Testimonial API ===================================
    return (
        <>
            <section className='carousel-wrap'>
                <Container>
                    <Row>
                        {ErrorHead ? 'Error'
                            : HeadData.length === 0 ?  <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                : <Col lg={12}>
                                    <div className='testimonial_head'>
                                        <h2 className='h2_title'>{HeadData.subheading}</h2>
                                        <p>{HeadData.content}</p>
                                    </div>
                                </Col>
                        }
                    </Row>
                    <Carousel variant="dark">
                        {ErrorTestimonial ?
                            <div className='warning'>
                                <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                            </div>
                            : TestimonialData.length === 0 ?
                                <div className="carousel-item">
                                    <div className='testimonial_content_EMPTY'>
                                        <div className='image_circle'></div>
                                        <h5 className="mb-3"></h5>
                                        <p className="text-muted"></p>
                                        <p className="text-muted"></p>
                                    </div>
                                </div>
                                : TestimonialData.map((data, key) => {
                                    return <div className="carousel-item" key={key}>
                                        <div className='testimonial_content'>
                                            <img className="rounded-circle shadow-1-strong mb-4"
                                                src={data.image} alt="avatar"
                                                style={{ width: "150px" }} />
                                            <div className="row d-flex justify-content-center">
                                                <div className="col-lg-8 text-center">
                                                    <h5 className="mb-3">{data.client_name}</h5>
                                                    <p className="text-muted">
                                                        <i className="fas fa-quote-left pe-2"></i>
                                                        {data.client_feedback}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })}
                    </Carousel>
                </Container>
                {/* <!-- Carousel wrapper --> */}
            </section>
        </>
    )
}

export default Testimonial