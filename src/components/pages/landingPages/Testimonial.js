import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Carousel, Row, Col } from 'react-bootstrap'

const Testimonial = () => {

    // ================================ Testimonial API ===================================
    const [TestimonialData, setTestimonialData] = useState([])
    async function testimonialAPI() {
        const api = await axios.get(`${process.env.REACT_APP_BASE_URL}company/testimonial/`)
        setTestimonialData(api.data.response)
        // console.log("testimonial", TestimonialData);
    }

    useEffect(() => {
        testimonialAPI()
    }, [])

    // ================================ Testimonial API ===================================
    return (
        <>
            <section className='carousel-wrap'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='testimonial_head'>
                                <h2 className='h2_title'>Testimonial</h2>
                                <p> ipsum dolor sit amet consectetur adipisicing elit. Aliquid id atque fugit dicta soluta voluptate eum labore laudantium earum ratione.</p>
                            </div>
                        </Col>
                    </Row>
                    <Carousel variant="dark">
                        {TestimonialData.length === 0 ?
                            <div className="carousel-item">
                                <div className='testimonial_content_EMPTY'>
                                    {/* <img className="rounded-circle shadow-1-strong mb-4"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                                        style={{ width: "150px" }} /> */}
                                    <div className='image_circle'></div>
                                    <h5 className="mb-3"></h5>
                                    <p className="text-muted"></p>
                                    <p className="text-muted"></p>
                                    {/* <div className="row d-flex justify-content-center">
                                        <div className="col-lg-8 text-center">
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            : TestimonialData.map((data, key) => {
                                return <div className="carousel-item" key={key}>
                                    <div className='testimonial_content'>
                                        <img className="rounded-circle shadow-1-strong mb-4"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
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
                        {/* <Carousel.Item>
                            <div className='testimonial_content'>
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                                    style={{ width: "150px" }} />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <h5 className="mb-3">Maria Kate</h5>
                                        <p>Photographer</p>
                                        <p className="text-muted">
                                            <i className="fas fa-quote-left pe-2"></i>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                            doloremque.
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="far fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='testimonial_content'>
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                                    style={{ width: "150px" }} />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8 text-center">
                                        <h5 className="mb-3">Maria Kate</h5>
                                        <p>Photographer</p>
                                        <p className="text-muted">
                                            <i className="fas fa-quote-left pe-2"></i>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                            doloremque.
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="far fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                        </Carousel.Item> */}
                    </Carousel>
                    {/* <!-- Carousel wrapper --> */}
                    {/* <div id="carouselExampleControls" className="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp" alt="avatar"
                                    style={{ width: "150px" }} />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h5 className="mb-3">Maria Kate</h5>
                                        <p>Photographer</p>
                                        <p className="text-muted">
                                            <i className="fas fa-quote-left pe-2"></i>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                            doloremque.
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="far fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar"
                                    style={{ width: "150px" }} />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h5 className="mb-3">John Doe</h5>
                                        <p>Web Developer</p>
                                        <p className="text-muted">
                                            <i className="fas fa-quote-left pe-2"></i>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                            nesciunt sint eligendi reprehenderit reiciendis.
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="far fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <img className="rounded-circle shadow-1-strong mb-4"
                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" alt="avatar" style={{ width: "150px" }} />
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h5 className="mb-3">Anna Deynah</h5>
                                        <p>UX Designer</p>
                                        <p className="text-muted">
                                            <i className="fas fa-quote-left pe-2"></i>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus et deleniti
                                            nesciunt sint eligendi reprehenderit reiciendis, quibusdam illo, beatae quia
                                            fugit consequatur laudantium velit magnam error. Consectetur distinctio fugit
                                            doloremque.
                                        </p>
                                    </div>
                                </div>
                                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="fas fa-star fa-sm"></i></li>
                                    <li><i className="far fa-star fa-sm"></i></li>
                                </ul>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
                            data-mdb-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
                            data-mdb-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div> */}
                </Container>
                {/* <!-- Carousel wrapper --> */}
            </section>
        </>
    )
}

export default Testimonial