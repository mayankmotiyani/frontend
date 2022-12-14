import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AboutSection from './AboutSection'
import Connect from './Connect'
import Functionality from './Functionality'
import HeroSection from './HeroSection'
import OurGoal from './OurGoal'
import PaymentMethod from './PaymentMethod'

export default function ProductPage(props) {
    const { product_slug } = useParams()
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    },[product_slug])
    // =========================== scroll To Top default =========================
    return (
        <>
            <HeroSection />
            <AboutSection />
            <OurGoal />
            <PaymentMethod />
            <Functionality />
            {/* <Connect /> */}
        </>
    )
}
