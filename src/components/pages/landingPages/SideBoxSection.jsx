import React, { useEffect  } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsFillFileEarmarkBarGraphFill } from 'react-icons/bs';
import AOS from "aos"
export default function SideBoxSection() {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);
    return (
        <>
            <section className='sideBox_section'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <Row>
                                <Col lg={6}>
                                    <div className='box_content_div' data-aos="fade-up">
                                        {/* <img src="" alt="" /> */}
                                        <BsFillFileEarmarkBarGraphFill />
                                        <h4 className='h4_title'>Title Heading Here</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim nihil officia iste repellat repellendus sunt, accusamus nostrum temporibus hic velit deserunt numquam voluptatibus aperiam quam veniam quod error autem.</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='box_content_div' data-aos="fade-up">
                                        {/* <img src="" alt="" /> */}
                                        <BsFillFileEarmarkBarGraphFill />
                                        <h4 className='h4_title'>Title Heading Here</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim nihil officia iste repellat repellendus sunt, accusamus nostrum temporibus hic velit deserunt numquam voluptatibus aperiam quam veniam quod error autem.</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='box_content_div' data-aos="fade-up">
                                        {/* <img src="" alt="" /> */}
                                        <BsFillFileEarmarkBarGraphFill />
                                        <h4 className='h4_title'>Title Heading Here</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim nihil officia iste repellat repellendus sunt, accusamus nostrum temporibus hic velit deserunt numquam voluptatibus aperiam quam veniam quod error autem.</p>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className='box_content_div' data-aos="fade-up">
                                        {/* <img src="" alt="" /> */}
                                        <BsFillFileEarmarkBarGraphFill />
                                        <h4 className='h4_title'>Title Heading Here</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae enim nihil officia iste repellat repellendus sunt, accusamus nostrum temporibus hic velit deserunt numquam voluptatibus aperiam quam veniam quod error autem.</p>
                                    </div>
                                </Col>
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
