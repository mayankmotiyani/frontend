import React, { useEffect } from 'react';
import BlogSection from './BlogSection';
import ContactUs from './ContactUs';
import HeroSection from './HeroSection';
import LaunchPlatform from './LaunchPlatform';
import OnlineStore from './OnlineStore';
import PartnerStrip from './PartnerStrip';
import SideBoxSection from './SideBoxSection';
import StartSomething from './StartSomething';
import Technology from './Technology';
import Testimonial from './Testimonial';
import WhyChoose from './WhyChoose';

const Home = (props) => {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================
    return (
        <>
            <HeroSection />
            <PartnerStrip />
            <Technology />
            <OnlineStore />
            <StartSomething />
            <LaunchPlatform />
            <SideBoxSection/>
            <WhyChoose/>
            <BlogSection />
            <Testimonial />
            <ContactUs />
        </>
    )
}

export default Home