import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import BoxSections from './BoxSections'
import ContentDiv from './ContentDiv'
import HeroSections from './HeroSections'
import KeyFeature from './KeyFeature'

export default function Main_nft(props) {
    const { nft_slug } = useParams()
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [nft_slug])
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
