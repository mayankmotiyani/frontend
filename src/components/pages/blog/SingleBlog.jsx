import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
export default function SingleBlog(props) {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================
    const location = useLocation();
    const filterApi_PathName = location.pathname.slice(1);
    // ========================= Single Blog api ================================
    const [blogContent, setBlogContent] = useState({})
    const blog_content = useRef(null)
    const [listData, setListData] = useState([])
    async function singleBlog() {
        const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
        setListData(api.data.blog_list)
        setBlogContent(api.data.response)
        blog_content.current.innerHTML = `${api.data.response.content}`
    }
    useEffect(() => {
        singleBlog()
    }, [filterApi_PathName])

    // ========================= Single Blog api ================================
    return (
        <>
            <section className='single_blog_page'>
                <Container>
                    <Row>
                        <Col lg={3}>
                            <div className='side_menu_div'>
                                <div className='side_menu'>
                                    <h4 className='h4_title'>You May Also Like This Blogs</h4>
                                    <ul>
                                        {listData.map((list, key) => {
                                            return <li key={key}>
                                                <Link to={list.blog_url}>{list.title}</Link>
                                            </li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className='blog_body'>
                                <h2 className='h2_title'>{blogContent.title}</h2>
                                <img className='blog_img' src={blogContent.image} alt="" />
                                <div ref={blog_content} className="blog_content_div"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
