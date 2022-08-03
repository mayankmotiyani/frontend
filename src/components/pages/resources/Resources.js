import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from "react-bootstrap";
import resourcesImg from "../../../assets/images/product/Infograin_product.png";
import { useParams } from "react-router-dom";
import resourceBanner from "../../../assets/images/video/resource_banner.mp4"
const Resources = (props) => {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    })
    // =========================== scroll To Top default =========================
    const params = useParams();
    const { res_slug } = params;
    // console.log('res_slug', res_slug);
    return (
        <>
            <section className='resources-wrap'>
                <div className='resources-banner'>
                    <video autoPlay muted loop  width="100%" className='heroSection_video'>
                        <source src={resourceBanner} type="video/mp4" />
                        <source src={resourceBanner} type="video/ogg" />
                    </video>
                    <Container>
                        <Row>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <h2 className='h2_title'>How Can We Help</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus maiores maxime quam expedita sit. Soluta, commodi rem nam tempora praesentium maiores quidem minima vero nobis obcaecati sit exercitationem, optio tempore.</p>
                            </Col>
                            <Col sm={6} md={6} lg={6} xl={6}>
                                <figure className='resourcesImg'>
                                    <Image src={resourcesImg} alt='Resources Img' fluid />
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing</p>
                                </figure>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='resources-details'>
                    <Container>
                        <Row>
                            <Col sm={3} md={3} lg={3} xl={3}>
                                <figure className='product-img'>
                                    <Image src="https://producttribe.com/wp-content/uploads/2018/03/Img-2-2x-1.png" alt='Resources Img' fluid />
                                </figure>
                            </Col>
                            <Col sm={9} md={9} lg={9} xl={9}>
                                <div className='product-about'>
                                    <h2 className='h2_title'>Project Communication Strategy</h2>
                                    <p>Beheading project in an effective way is an art and is also decisive for the development team to interpret the requirements properly. Potent communication is also the key to prosperity. After the execution of project effectively, Infograins interpret the importance of spotless communication and we strive hard to develop a spotless communication channel that starts from you and ends on our team, all synchronized through team leaders.</p>
                                </div>
                            </Col>
                            <Col sm={3} md={3} lg={3} xl={3}>
                                <figure className='product-img'>
                                    <Image src="https://producttribe.com/wp-content/uploads/2018/03/Img-2-2x-1.png" alt='Resources Img' fluid />
                                </figure>
                            </Col>
                            <Col sm={9} md={9} lg={9} xl={9}>
                                <div className='product-about'>
                                    <h2 className='h2_title'>Project Communication Strategy</h2>
                                    <p>Beheading project in an effective way is an art and is also decisive for the development team to interpret the requirements properly. Potent communication is also the key to prosperity. After the execution of project effectively, Infograins interpret the importance of spotless communication and we strive hard to develop a spotless communication channel that starts from you and ends on our team, all synchronized through team leaders.</p>
                                </div>
                            </Col>
                            <Col sm={3} md={3} lg={3} xl={3}>
                                <figure className='product-img'>
                                    <Image src="https://producttribe.com/wp-content/uploads/2018/03/Img-2-2x-1.png" alt='Resources Img' fluid />
                                </figure>
                            </Col>
                            <Col sm={9} md={9} lg={9} xl={9}>
                                <div className='product-about'>
                                    <h2 className='h2_title'>Project Communication Strategy</h2>
                                    <p>Beheading project in an effective way is an art and is also decisive for the development team to interpret the requirements properly. Potent communication is also the key to prosperity. After the execution of project effectively, Infograins interpret the importance of spotless communication and we strive hard to develop a spotless communication channel that starts from you and ends on our team, all synchronized through team leaders.</p>
                                </div>
                            </Col>
                            <Col sm={3} md={3} lg={3} xl={3}>
                                <figure className='product-img'>
                                    <Image src="https://producttribe.com/wp-content/uploads/2018/03/Img-2-2x-1.png" alt='Resources Img' fluid />
                                </figure>
                            </Col>
                            <Col sm={9} md={9} lg={9} xl={9}>
                                <div className='product-about'>
                                    <h2 className='h2_title'>Project Communication Strategy</h2>
                                    <p>Beheading project in an effective way is an art and is also decisive for the development team to interpret the requirements properly. Potent communication is also the key to prosperity. After the execution of project effectively, Infograins interpret the importance of spotless communication and we strive hard to develop a spotless communication channel that starts from you and ends on our team, all synchronized through team leaders.</p>
                                </div>
                            </Col>
                            <Col sm={3} md={3} lg={3} xl={3}>
                                <figure className='product-img'>
                                    <Image src="https://producttribe.com/wp-content/uploads/2018/03/Img-2-2x-1.png" alt='Resources Img' fluid />
                                </figure>
                            </Col>
                            <Col sm={9} md={9} lg={9} xl={9}>
                                <div className='product-about'>
                                    <h2 className='h2_title'>Project Communication Strategy</h2>
                                    <p>Beheading project in an effective way is an art and is also decisive for the development team to interpret the requirements properly. Potent communication is also the key to prosperity. After the execution of project effectively, Infograins interpret the importance of spotless communication and we strive hard to develop a spotless communication channel that starts from you and ends on our team, all synchronized through team leaders.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Resources