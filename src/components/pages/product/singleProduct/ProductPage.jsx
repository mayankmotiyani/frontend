import React, { useEffect } from 'react'
import AboutSection from './AboutSection'
import Connect from './Connect'
import Functionality from './Functionality'
import HeroSection from './HeroSection'
import OurGoal from './OurGoal'
import Outcome from './Outcome'
import PaymentMethod from './PaymentMethod'
import Solution from './Solution'

export default function ProductPage(props) {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    })
    // =========================== scroll To Top default =========================
    return (
        <>
            <HeroSection />
            <AboutSection />
            <OurGoal />
            <Solution />
            <PaymentMethod />
            <Outcome />
            <Functionality />
            <Connect />
        </>
    )
}
