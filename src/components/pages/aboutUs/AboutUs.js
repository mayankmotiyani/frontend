import React, { useEffect } from 'react'
import AboutAnalysis from './AboutAnalysis'
import AboutBanner from './AboutBanner'
import AboutPlatform from './AboutPlatform'
import AboutTrusted from './AboutTrusted'
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
        </>
    )
}

export default AboutUs