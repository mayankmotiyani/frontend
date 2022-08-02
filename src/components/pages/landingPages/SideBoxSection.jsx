import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillFileEarmarkBarGraphFill } from 'react-icons/bs';
import axios from "axios";
import AOS from "aos";
import { IoIosWarning } from 'react-icons/io';
export default function SideBoxSection() {
    const [sideText, setSideText] = useState([]);
    const [error, setError] = useState(false)
    const sideData = async () => {
        try {
            const url = await axios.get(`${process.env.REACT_APP_BASE_URL}api/blockchain-development-process/`);
            setSideText(url.data.response);
            console.log("url", url.data.response);
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
    return (
        <>
            <section className='sideBox_section'>
                <Container>
                    <div className='sideBox_section-title'>
                        <h3 className='h3_title'>Sub heading</h3>
                        <h2 className='h2_title'>Side Box Text Heading</h2>
                    </div>
                    <Row>
                        <Col lg={8}>
                            <Row>
                                {
                                    error ?
                                        <div className='warning'>
                                            <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                                        </div>
                                        :
                                        sideText.length === 0 ?
                                            <>
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
                                                </Col>
                                            </>
                                            :
                                            sideText.map((ele, key) => {
                                                return (
                                                    <Col lg={6} key={key}>
                                                        <div className='box_content_div' data-aos="fade-up">
                                                            <BsFillFileEarmarkBarGraphFill />
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
                        <Col lg={4}>
                            <div className='side_image_content_div' data-aos="fade-left">
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
