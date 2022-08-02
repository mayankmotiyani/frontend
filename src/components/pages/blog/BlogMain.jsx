import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import BlogImage from '../../../assets/media/man-work.png'
export default function BlogMain(props) {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================

    // useEffect(() => {
    //     const inputSearch = document.querySelector('[data-search]');
    //     // console.log(inputSearch);
    //     const blogTitle = document.querySelector('[data-blog-title]');
    //     console.log(blogTitle.textContent.includes('title'));
    //     inputSearch.addEventListener('input', (e) => {
    //         console.log(e.target.value);
    //     })

    // }, [])


    // ========================================== Featured Blog List =================================
    const [featuredData, setFeaturedData] = useState([])
    async function featuredApi() {
        const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blog/blog_list/`);
        // console.log(api.data.response);
        setFeaturedData(api.data.response)
    }

    useEffect(() => {
        featuredApi()
    }, [])

    // ========================================== Featured Blog List =================================


    return (
        <>
            <section className='blog_section'>
                <div className='top_section'>
                    <h2 className='h2_title'>Your Blog Title Here</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores excepturi perspiciatis libero pariatur eos, eveniet quos sed, dolor esse aliquid rerum incidunt obcaecati debitis blanditiis. Eos velit expedita ea illo.</p>
                </div>
                <Container >
                    <Row>
                        <Col lg={12}>
                            <div className='blog_tab_section'>
                                <Tabs
                                    defaultActiveKey="profile"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="All Blogs">
                                        <div className='list_of_blog_section'>
                                            <Container>
                                                <Row>
                                                    <Col lg={12}>
                                                        <div className='head_search'>
                                                            <input type="text" placeholder='Search your blog here...' />
                                                        </div>
                                                    </Col>
                                                    <Col lg={12}>
                                                        <div className='list_of_blogs'>
                                                            <ul>
                                                                <li>
                                                                    <div className='blog_div'>
                                                                        <div className='img_blog'>
                                                                            <img src={BlogImage} alt="" />
                                                                        </div>
                                                                        <div className='content_div'>
                                                                            <h4 className='h4_title'>Your Blog Title Here</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sit hic quod dignissimos dolorum, eius corporis repudiandae, est expedita distinctio nobis ratione unde odio nulla enim nisi dolore deleniti alias.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='blog_div'>
                                                                        <div className='img_blog'>
                                                                            <img src={BlogImage} alt="" />
                                                                        </div>
                                                                        <div className='content_div'>
                                                                            <h4 className='h4_title'>Your Blog Title Here</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sit hic quod dignissimos dolorum, eius corporis repudiandae, est expedita distinctio nobis ratione unde odio nulla enim nisi dolore deleniti alias.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='blog_div'>
                                                                        <div className='img_blog'>
                                                                            <img src={BlogImage} alt="" />
                                                                        </div>
                                                                        <div className='content_div'>
                                                                            <h4 className='h4_title'>Your Blog Title Here</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sit hic quod dignissimos dolorum, eius corporis repudiandae, est expedita distinctio nobis ratione unde odio nulla enim nisi dolore deleniti alias.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='blog_div'>
                                                                        <div className='img_blog'>
                                                                            <img src={BlogImage} alt="" />
                                                                        </div>
                                                                        <div className='content_div'>
                                                                            <h4 className='h4_title'>Your Blog Title Here</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sit hic quod dignissimos dolorum, eius corporis repudiandae, est expedita distinctio nobis ratione unde odio nulla enim nisi dolore deleniti alias.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='blog_div'>
                                                                        <div className='img_blog'>
                                                                            <img src={BlogImage} alt="" />
                                                                        </div>
                                                                        <div className='content_div'>
                                                                            <h4 className='h4_title'>Your Blog Title Here</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sit hic quod dignissimos dolorum, eius corporis repudiandae, est expedita distinctio nobis ratione unde odio nulla enim nisi dolore deleniti alias.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className='blog_div'>
                                                                        <div className='img_blog'>
                                                                            <img src={BlogImage} alt="" />
                                                                        </div>
                                                                        <div className='content_div'>
                                                                            <h4 className='h4_title'>Your Blog Title Here</h4>
                                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem sit hic quod dignissimos dolorum, eius corporis repudiandae, est expedita distinctio nobis ratione unde odio nulla enim nisi dolore deleniti alias.</p>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title="Latest Blogs">
                                        <Row>
                                            <Col lg={12} md={12}>
                                                <div className='all_blogs'>
                                                    <Container fluid>
                                                        <Row>
                                                            {featuredData.map((blog, key) => {
                                                                return <Col className='my-4' lg={4} md={6} sm={12} key={key}>
                                                                    <div className='blog_card'>
                                                                        <img src={BlogImage} alt="" />
                                                                        <div className='blog_card_content'>
                                                                            <h3 className='h3_title' data-blog-title>{blog.title}</h3>
                                                                            <p>{blog.description}</p>
                                                                            <Link to={blog.blog_url}>Read More</Link>
                                                                        </div>
                                                                    </div>
                                                                </Col>
                                                            })}
                                                            <Col className='my-4' lg={4} md={6} sm={12}>
                                                                <div className='blog_card'>
                                                                    <img src={BlogImage} alt="" />
                                                                    <div className='blog_card_content'>
                                                                        <h3 className='h3_title' data-blog-title>Our Blog Title</h3>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora labore dolorum. Aspernatur, corporis quis et amet voluptatum ad natus quo ab repudiandae incidunt vero officia autem odit, odio quod.</p>
                                                                        <Link to="/blog/demo">Read More</Link>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col className='my-4' lg={4} md={6} sm={12}>
                                                                <div className='blog_card'>
                                                                    <img src={BlogImage} alt="" />
                                                                    <div className='blog_card_content'>
                                                                        <h3 className='h3_title' data-blog-title>Our Blog Title</h3>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora labore dolorum. Aspernatur, corporis quis et amet voluptatum ad natus quo ab repudiandae incidunt vero officia autem odit, odio quod.</p>
                                                                        <Link to="/blog/demo">Read More</Link>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Container>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className='blog_contact_form'>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}
