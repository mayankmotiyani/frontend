import React, { useEffect } from 'react'
import AboutAnalysis from './AboutAnalysis'
import AboutBanner from './AboutBanner'
import AboutPlatform from './AboutPlatform'
import AboutTrusted from './AboutTrusted'
import BecomePartner from './BecomePartner'
import TechnologyPartners from './TechnologyPartners'
import VisionMission from './VisionMission'
import { useParams } from "react-router-dom"
import Faq from './Faq'
const AboutUs = (props) => {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================

    return (
        <>
            <AboutBanner />
            <AboutAnalysis />
            <AboutPlatform />
            <AboutTrusted />
            <VisionMission />
            <TechnologyPartners />
            <BecomePartner />
            <Faq/>
        </>
    )
}

export default AboutUs