import React, { useEffect } from 'react'
import BoxSections from './BoxSections'
import ContentDiv from './ContentDiv'
import HeroSections from './HeroSections'
import KeyFeature from './KeyFeature'

export default function Main_nft(props) {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================
    return (
        <>
            <HeroSections />
            <BoxSections />
            <ContentDiv />
            <KeyFeature />
        </>
    )
}
