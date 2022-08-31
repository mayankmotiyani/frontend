import React, { useEffect } from 'react'
import Contact from '../landingPages/ContactUs';
import Address from './Address';
import Map from './Map';
import axios from 'axios';
const ContactUs = (props) => {
  // =========================== scroll To Top default =========================
  useEffect(() => {
    props.demo('top')
  }, [])
  // =========================== scroll To Top default =========================

  // const [infograinsData, setInfograinsData] = useState([])
  // const [otherData, setOtherData] = useState([])
  const addressData = async () => {
    try {
      const url = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/contact-us/`)
      const title_tag = document.getElementsByTagName('title')
      const meta_description = document.getElementsByTagName('meta');
      meta_description.description.content = url.data.metacontent.content
      title_tag[0].innerText = url.data.metacontent.title
    } catch (error) {
    }
  }
  useEffect(() => {
    addressData()
  }, [])
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