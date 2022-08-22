import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoIosWarning } from 'react-icons/io';
import { WOW } from "wowjs";
export default function BlogSection() {
    // ========================== Blog API ===========================
    const [BlogData, setBlogData] = useState([])
    const [ErrorBlogData, setErrorBlogData] = useState(false)
    async function blogApi() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blog/blog_list/`);
            setBlogData(api.data.response.slice(0, 3))
        } catch (error) {
            setErrorBlogData(true)
        }
    }

    // ===================================== Blog Head ==========================
    const [BlogHeadData, setBlogHeadData] = useState([])
    const [HeadError, setHeadError] = useState(false)
    async function blogHead() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}api/blog-section/`);
            setBlogHeadData(api.data.response)
        } catch (error) {
            setHeadError(true)
        }
    }

    useEffect(() => {
        blogHead()
        blogApi()
    }, [])
    useEffect(() => {
        const wow = new WOW({ live: false });
        wow.init()
    })

    return (
        <>
            <section className='home_blog_section'>
                <Container>
                    <Row>
                        {HeadError ? 'Error'
                            : BlogHeadData.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                : <Col lg={12}>
                                    <div className='blog_head'>
                                        <h2 className='h2_title'>{BlogHeadData.subheading}</h2>
                                        <p>{BlogHeadData.content}</p>
                                    </div>
                                </Col>
                        }
                    </Row>
                    <Row>
                        {ErrorBlogData ?
                            <div className='warning'>
                                <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                            </div>
                            : BlogData.length === 0 ?
                                <Row>
                                    <Col sm={12} md={12} lg={4} xl={4}>
                                        <div className='blog_section_EMPTY'>
                                            <div className='image_EMPTY'></div>
                                            <div className='blog_content'>
                                                <div className='head_title'></div>
                                                <p className='para'></p>
                                                <div className='link'></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={4} xl={4}>
                                        <div className='blog_section_EMPTY'>
                                            <div className='image_EMPTY'></div>
                                            <div className='blog_content'>
                                                <div className='head_title'></div>
                                                <p className='para'></p>
                                                <div className='link'></div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={12} lg={4} xl={4}>
                                        <div className='blog_section_EMPTY'>
                                            <div className='image_EMPTY'></div>
                                            <div className='blog_content'>
                                                <div className='head_title'></div>
                                                <p className='para'></p>
                                                <div className='link'></div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                : BlogData.map((e, key) => {
                                    return <Col sm={6} md={6} lg={4} xl={4} key={key}>
                                        <div className='blog_section wow zoomIn'>
                                            <img src={e.image} alt="" />
                                            <div className='blog_content'>
                                                <h3 className='h3_title'>{e.title}</h3>
                                                <p>{e.description}</p>
                                                <Link to={e.blog_url}>Read More</Link>
                                            </div>
                                        </div>
                                    </Col>
                                })}
                    </Row>
                </Container>
            </section>
        </>
    )
}
