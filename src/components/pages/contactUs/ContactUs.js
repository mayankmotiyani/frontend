import React, { useEffect } from 'react'
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
        </>
    )
}

export default ContactUs