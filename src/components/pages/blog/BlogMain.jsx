import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
                        {/* <Col lg={3} md={12}>
                            <div className='side_menu'>
                                <h4 className='h4_title'>List of Blogs</h4>
                                <ul>
                                    <li>
                                        <a href="#">Blog 1 List of Blogs List of Blogs List of dummy</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog 1</a>
                                    </li>
                                </ul>
                            </div>
                        </Col> */}
                        <Col lg={12} md={12}>
                            <div className='all_blogs'>
                                <Container fluid>
                                    {/* <Row>
                                        <Col lg={12}>
                                            <div className='search_blog'>
                                                <input type="text" placeholder='Search Blog By Name' data-search />
                                                <button>Search</button>
                                            </div>
                                        </Col>
                                    </Row> */}
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
                                        {/* <Col className='my-4' lg={4} md={6} sm={12}>
                                            <div className='blog_card'>
                                                <img src={BlogImage} alt="" />
                                                <div className='blog_card_content'>
                                                    <h3 className='h3_title' data-blog-title>Our Blog Title</h3>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi tempora labore dolorum. Aspernatur, corporis quis et amet voluptatum ad natus quo ab repudiandae incidunt vero officia autem odit, odio quod.</p>
                                                    <Link to="/blog/demo">Read More</Link>
                                                </div>
                                            </div>
                                        </Col> */}
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
