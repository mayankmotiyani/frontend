import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { BsFillFileEarmarkBarGraphFill } from 'react-icons/bs';
import axios from "axios";
import AOS from "aos";
import { IoIosWarning } from 'react-icons/io';
import { WOW } from "wowjs";
export default function SideBoxSection() {
    const [sideText, setSideText] = useState([]);
    const [HeadContent, setHeadContent] = useState({})
    const [error, setError] = useState(false)
    const sideData = async () => {
        try {
            const url = await axios.get(`${process.env.REACT_APP_BASE_URL}api/blockchain-development-process/`);
            setSideText(url.data.response);
            setHeadContent(url.data.heading_and_subheading)
            // console.log("url", url.data.response);
            // setSide(url.data.response);
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        sideData()
    }, []);
    useEffect(() => {
        const wow = new WOW({ live: false });
        wow.init()
    })
    return (
        <>
            <section className='sideBox_section'>
                <Container>
                    <div className='sideBox_section-title'>
                        <h4 className='h4_title'>{HeadContent.subheading}</h4>
                        <h2 className='h2_title'>{HeadContent.heading}</h2>
                    </div>
                    <Row>
                    <Col sm={12} md={12} lg={6} xl={8}>
                            <Row>
                                {
                                    error ?
                                        <div className='warning'>
                                            <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                                        </div>
                                        :
                                        sideText.length === 0 ?
                                            <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                                            :
                                            sideText.map((ele, key) => {
                                                return (
                                                    <Col sm={6} md={6} lg={6} xl={6} key={key}>
                                                        <div className='box_content_div wow zoomIn'>
                                                            {/* <BsFillFileEarmarkBarGraphFill /> */}
                                                            <img src={ele.image} alt="" />
                                                            <h4 className='h4_title'>{ele.title}</h4>
                                                            <p>{ele.content}</p>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                }
                                {/* <Col lg={6}>
                                    <div className='box_content_div' data-aos="fade-up">
                                        <BsFillFileEarmarkBarGraphFill />
                                        <h4 className='h4_title'>Title Heading Here</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim nihil officia iste repellat repellendus sunt, accusamus nostrum temporibus hic velit deserunt numquam voluptatibus aperiam quam veniam quod error autem.</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='box_content_div' data-aos="fade-up">
                                        <BsFillFileEarmarkBarGraphFill />
                                        <h4 className='h4_title'>Title Heading Here</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim nihil officia iste repellat repellendus sunt, accusamus nostrum temporibus hic velit deserunt numquam voluptatibus aperiam quam veniam quod error autem.</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='box_content_div' data-aos="fade-up">
                                        <BsFillFileEarmarkBarGraphFill />
                                        <h4 className='h4_title'>Title Heading Here</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim nihil officia iste repellat repellendus sunt, accusamus nostrum temporibus hic velit deserunt numquam voluptatibus aperiam quam veniam quod error autem.</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='box_content_div' data-aos="fade-up">
                                        <BsFillFileEarmarkBarGraphFill />
                                        <h4 className='h4_title'>Title Heading Here</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim nihil officia iste repellat repellendus sunt, accusamus nostrum temporibus hic velit deserunt numquam voluptatibus aperiam quam veniam quod error autem.</p>
                                    </div>
                                </Col> */}
                            </Row>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={4}>
                            <div className='side_image_content_div wow zoomIn'>
                                <BsFillFileEarmarkBarGraphFill />
                                <h3 className='h3_title'>Your Heading Title here</h3>
                                <button>Click Me</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
