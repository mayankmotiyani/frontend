import React, { useEffect } from 'react'
import W3Details from '../blockchain/web3/W3Details';
import Contact from '../landingPages/ContactUs';
import Address from './Address';
import Map from './Map';
const ContactUs = (props) => {
    // =========================== scroll To Top default =========================
    useEffect(() => {
        props.demo('top')
    }, [])
    // =========================== scroll To Top default =========================
    return (
        <>
            <div className='contact-page-wrap'>
                <Contact />
            </div>
            <Address />
            <Map />
            {/* <W3Details /> */}
        </>
    )
}

export default ContactUs