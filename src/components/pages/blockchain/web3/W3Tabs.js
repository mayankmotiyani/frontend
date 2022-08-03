import React from 'react';
import { Tabs, Tab, Container, Image } from 'react-bootstrap';
import tab_bg from "../../../../assets/images/background/tab_bg.jpg"
const W3Tabs = () => {

    return (
        <>
            <section className='tabs-wrap'>
                <Container>
                    <div className='tabs-title'>
                        <h2 className='h2_title'>Tabs</h2>
                    </div>
                    <Tabs
                        defaultActiveKey="home"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="home" title="Home">
                            <div className='tabs-img'>
                                {/* <Image src={tab_bg} alt="Tabs image" fluid /> */}
                                <div className='tabs-text'>
                                    <h2 className='h2_title'>Heading Text Here</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae iusto perferendis consequuntur obcaecati officiis illum nihil error officia voluptates sunt, alias deleniti quae quos doloribus animi at numquam culpa!</p>
                                    <button className='btn' type='button'>Click me</button>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                            <div className='tabs-img'>
                                {/* <Image src={tab_bg} alt="Tabs image" fluid /> */}
                                <div className='tabs-text'>
                                    <h2 className='h2_title'>Heading Text Here</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae iusto perferendis consequuntur obcaecati officiis illum nihil error officia voluptates sunt, alias deleniti quae quos doloribus animi at numquam culpa!</p>
                                    <button className='btn' type='button'>Click me</button>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                            <div className='tabs-img'>
                                {/* <Image src={tab_bg} alt="Tabs image" fluid /> */}
                                <div className='tabs-text'>
                                    <h2 className='h2_title'>Heading Text Here</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae iusto perferendis consequuntur obcaecati officiis illum nihil error officia voluptates sunt, alias deleniti quae quos doloribus animi at numquam culpa!</p>
                                    <button className='btn' type='button'>Click me</button>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="about" title="About">
                            <div className='tabs-img'>
                                {/* <Image src={tab_bg} alt="Tabs image" fluid /> */}
                                <div className='tabs-text'>
                                    <h2 className='h2_title'>Heading Text Here</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae iusto perferendis consequuntur obcaecati officiis illum nihil error officia voluptates sunt, alias deleniti quae quos doloribus animi at numquam culpa!</p>
                                    <button className='btn' type='button'>Click me</button>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </Container>
            </section>
        </>
    )
}

export default W3Tabs