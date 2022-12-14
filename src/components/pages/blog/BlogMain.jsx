import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from "react-js-loader";
export default function BlogMain(props) {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================

    // ========================================== Featured Blog List =================================
    const [featuredData, setFeaturedData] = useState([])
    async function featuredApi() {
        const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blog/blog_list/`);
        setFeaturedData(api.data.response);
        const title_tag = document.getElementsByTagName('title')
        const meta_description = document.getElementsByTagName('meta');
        meta_description.description.content = api.data.metacontent.content
        title_tag[0].innerText = api.data.metacontent.title
    }

    useEffect(() => {
        featuredApi()
    }, [])

    // ========================================== Featured Blog List =================================
    // =============================== InfiniteScroll ==========================

    // ======================================= User Value =======================================
    const [userEnteredValue, setUserEnteredValue] = useState('')
    // ==================================== Search API =========================================

    const [dummy, setdummy] = useState([])
    const [LimitReached, setLimitReached] = useState(0)
    const [Count, setCount] = useState(0)
    async function searchAPI() {
        setTimeout(async () => {
            let xo;
            xo = dummy.length + 5
            setCount(xo)
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blog/search_query/title/?blog=${userEnteredValue}`);
            setLimitReached(api.data.response.length)
            setdummy(api.data.response.slice(0, xo))

        }, 500);
    }

    function userSearchValue(e) {
        // console.log("e.target.value", e.target.value);
        let eCode = e.target.value;
        if (eCode === '') {
            setUserEnteredValue("")
            searchAPI()
        } else {
            setUserEnteredValue(eCode)
            searchAPI()
        }

        // setUserEnteredValue(e.target.value)
        // searchAPI()
    }
    // ==================================== Search API =========================================

    useEffect(() => {
        searchAPI()
    }, [dummy])

    // =============================== InfiniteScroll ==========================


    // ==================================================== Top Header API =============================================
    const [HeaderData, setHeaderData] = useState({})
    async function api() {
        try {
            const { data: { response } } = await axios.get(`${process.env.REACT_APP_BASE_URL}/blog/blog/blog_section_one/`)
            setHeaderData(response)

        } catch (error) {

        }
    }

    useEffect(() => {
        api()
    }, [])


    return (
        <>
            <section className='blog_section'>
                <div className='top_section'>
                    <h2 className='h2_title'>{HeaderData.title}</h2>
                    <p>{HeaderData.content}</p>
                </div>
                <Container fluid>
                    <div className='blog_tab_section'>
                        <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="profile" title="Latest Blogs">
                                <Row>
                                    <Col lg={12} md={12}>
                                        <div className='all_blogs'>
                                            <Container>
                                                <Row>
                                                    {featuredData.map((blog, key) => {
                                                        return <Col className='my-3' sm={6} xl={4} lg={4} md={6} key={key}>
                                                            <div className='blog_card'>
                                                                <img src={blog.image} alt="" />
                                                                <div className='blog_card_content'>
                                                                    <h3 className='h3_title' data-blog-title>{blog.title}</h3>
                                                                    <p>{blog.description}</p>
                                                                    <Link to={blog.blog_url}>Read More</Link>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    })}
                                                </Row>
                                            </Container>
                                        </div>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab eventKey="home" title="All Blogs">
                                <div className='list_of_blog_section'>
                                    <Container>
                                        <Row>
                                            <Col lg={12}>
                                                <div className='head_search'>
                                                    <input type="text" placeholder='Search your blog here...' value={userEnteredValue} onInput={userSearchValue} />
                                                </div>
                                            </Col>
                                            <Col lg={12}>
                                                <div className='list_of_blogs'>
                                                    <ul>
                                                        <InfiniteScroll
                                                            style={{ overflow: 'unset' }}
                                                            dataLength={dummy.length}
                                                            next={searchAPI}
                                                            hasMore={true}
                                                            loader={Count >= LimitReached ? "" :
                                                                <div className='blog_loader'>
                                                                    <Loader type="bubble-loop" bgColor={"#069aff"} color={'#707070'} size={100} />
                                                                </div>
                                                            }
                                                        >
                                                            {dummy.map((i, index) => (
                                                                <li key={index}>
                                                                    <Link to={i.blog_url} className='blog_div'>
                                                                        <div className='img_blog'>
                                                                            <img src={i.image} alt="" />
                                                                        </div>
                                                                        <div className='content_div'>
                                                                            <h4 className='h4_title'>{i.title}</h4>
                                                                            <p>{i.description}</p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </InfiniteScroll>
                                                    </ul>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </Tab>

                        </Tabs>
                    </div>
                </Container>
                <Row>
                    <Col lg={12}>
                        <div className='blog_contact_form'>
                        </div>
                    </Col>
                </Row>
            </section>

        </>
    )
}
