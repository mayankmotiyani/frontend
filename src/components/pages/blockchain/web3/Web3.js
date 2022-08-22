import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Achievements from './Achievements';
import HeroWeb3 from './HeroWeb3';
import W3Card from './W3Card';
import W3Owl from './W3Owl';
import W3Services from './W3Services';
import W3Technologies from './W3Technologies';

const Web3 = (props) => {
    const { slug } = useParams()
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [slug])
    // =========================== scroll To Top default =========================
    return (
        <>
            <HeroWeb3 />
            <Achievements />
            <W3Services />
            <W3Technologies />
            <W3Owl />
            <W3Card />
        </>
    )
}

export default Web3