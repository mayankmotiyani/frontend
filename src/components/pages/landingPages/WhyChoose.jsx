import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DemoIcon from '../../../assets/media/demo_icon.png';
import AOS from "aos";
import axios from "axios";
import { IoIosWarning } from 'react-icons/io';
export default function WhyChoose() {
    const [choose, setChoose] = useState([]);
    const [error, setError] = useState(false)
    const chooseData = async () => {
        try {
            const url = await axios.get(`${process.env.REACT_APP_BASE_URL}api/why-we-choose/`);
            setChoose(url.data.response);
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
        chooseData();
    }, []);
    return (
        <>
            <section className='whyChoose_section'>
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className='head_section'>
                                <h4 className='h4_title'>Why Choose Us</h4>
                                <h2 className='h2_title'>Connect with us to receive top-notch <span>Blockchain Development Services</span> that can effectively drive your <span>company</span> toward long-term innovation</h2>
                            </div>
                        </Col>
                        {
                            error ?
                                <div className='warning'>
                                    <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                                </div>
                                : choose.length === 0 ?
                                    <>
                                        <Col lg={6}>
                                            <div className='box_div' >
                                                <img src={DemoIcon} alt="" />
                                                <h4 className='h4_title'>Your Title Here</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, atque nisi. Culpa, praesentium! Numquam quis quidem facere nemo mollitia placeat molestiae, corrupti harum sed quam dolor illo. Magnam, ipsam magni!</p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='box_div' >
                                                <img src={DemoIcon} alt="" />
                                                <h4 className='h4_title'>Your Title Here</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, atque nisi. Culpa, praesentium! Numquam quis quidem facere nemo mollitia placeat molestiae, corrupti harum sed quam dolor illo. Magnam, ipsam magni!</p>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className='box_div' >
                                                <img src={DemoIcon} alt="" />
                                                <h4 className='h4_title'>Your Title Here</h4>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, atque nisi. Culpa, praesentium! Numquam quis quidem facere nemo mollitia placeat molestiae, corrupti harum sed quam dolor illo. Magnam, ipsam magni!</p>
                                            </div>
                                        </Col>
                                    </>
                                    :
                                    choose.map((ele, key) => {
                                        return (
                                            <Col lg={6} key={key}>
                                                <div className='box_div'>
                                                    <img src={DemoIcon} alt="" />
                                                    <h4 className='h4_title'>{ele.service_name}</h4>
                                                    <p>{ele.content}</p>
                                                </div>
                                            </Col>
                                        );
                                    })
                        }
                    </Row>
                </Container>
            </section>
        </>
    )
}
