import React, { useState, useEffect } from 'react';
import "../../assets/style/common/footer.scss";
import { BiUpArrowAlt } from "react-icons/bi";
import { IoIosWarning } from 'react-icons/io';
import { Container, Row, Col, NavLink, Spinner } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { BsSkype, BsArrowLeft } from 'react-icons/bs';
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import WhatsApp from '../../assets/media/whatsapp.png'
// import Logo from '../../assets/media/Infograins IT-02.png'
const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setShowTopBtn(true);
    } else {
      setShowTopBtn(false);
    }
  });

  const handleTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }


  // =============================== company api ================================
  const [companyData, setCompanyData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [aboutData, setAboutData] = useState([]);
  const [resourcesData, setResourcesData] = useState([]);
  const [ErrorCompany, setErrorCompany] = useState(false);
  // ============================ service =================================
  async function serviceApi() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain_list/`);
      setServiceData(api.data.response[0].array_of_blockchain_category_list);
      // console.log("api.data.response", api.data.response[0].array_of_blockchain_category_list[0].blockchain_url);
    } catch (error) {
      setServiceData(true)
    }

  }
  // ============================ service =================================

  async function footerApi() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}get-all-models/`);
      // console.log("api", api.data.response);
      setCompanyData(api.data.response.Company)
      // console.log("api.data.response", api.data);
      setServiceData(api.data.response.Services)
      setAboutData(api.data.response.About)
    } catch (error) {
      setErrorCompany(true)
    }
  }
  const resources = async () => {
    try {
      const url = await axios.get(`${process.env.REACT_APP_BASE_URL}resource/resources_list/`);
      // console.log("url.data", url.data.response);
      setResourcesData(url.data.response)
    } catch (error) {
      setErrorCompany(true)
    }
  }
  // const { footer_slug } = useParams();
  // console.log("footer_slug", footer_slug);
  useEffect(() => {
    footerApi();
    resources();
    serviceApi()
  }, [])
  const navAbout = useNavigate()
  const handleNav = () => {
    navAbout("/aboutUs")
    // console.log("navAbout", navAbout);
    // event.currentTarget.classList.add('sudhanshu');
    // console.log("event", event);
    // navAbout.style.position = "relative"
    // style.top = "-100px"
    // style.left = "0px"
  }

  return (
    <>
      <div className='whats_app_div'>
        <a href='https://wa.me/+918925564395' target={'_blank'}><img src={WhatsApp} alt="" /></a>
      </div>

      <div className='top-btn-wrap' onClick={handleTop} style={showTopBtn === false ? { display: "none" } : { display: "block" }}>
        <button className='btn'><BiUpArrowAlt /></button>
      </div>
      <section className='footer_section'>
        <Container>
          <Row>
            <Col lg={12}>
              <div className='footer_head'>
                <div className='subscribe_fieldDiv'>
                  <div className='subscribe_text'>Subscribe for Updated</div>
                  <div className='subscribe_email_field'>
                    <input type="email" placeholder='Email Address' />
                    <button><BiRightArrowAlt /> </button>
                  </div>
                </div>
                <div className='social_media_links'>
                  <a href="https://www.facebook.com/infograins/" target={'_blank'}>
                    <FaFacebookF />
                  </a>
                  <a href="https://twitter.com/infograinssoft?s=20" target={'_blank'}>
                    <FaTwitter />
                  </a>
                  <a href="https://www.instagram.com/infograins/" target={'_blank'}>
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/company/infograin-software-solutions/" target={'_blank'}>
                    <FaLinkedinIn />
                  </a>
                  <a href="https://join.skype.com/invite/NqBQ11qKBCxI" target={'_blank'}>
                    <BsSkype />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3}>
              <div className='foot_sec'>
                <div className='foot_sec_subhead'>Resources</div>
                <ul>
                  {
                    resourcesData.map((ele, key) => {
                      return (
                        <li key={key}><Link to={ele.resource_url}>{ele.name}</Link></li>
                      )
                    })
                  }
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className='foot_sec'>
                <div className='foot_sec_subhead'>Company</div>
                <ul>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/career">Career</Link>
                  </li>
                  <li>
                    <Link to="/sitemap">Sitemap</Link>
                  </li>
                  <li>
                    <Link to="/">Event</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/term_and_condition">Term and Condition</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className='foot_sec_one'></div><div className='foot_sec'>
                <div className='foot_sec_subhead'>Services</div>
                <ul>
                  {
                    ErrorCompany ?
                      <div className='warning'>
                        <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                      </div>
                      :
                      serviceData.length === 0 ?
                        <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                        :
                        serviceData.map((e, key) => {
                          return (
                            <li key={key}><Link to={'/'}>{e.blockchain_name}</Link></li>
                          )
                        })
                  }
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className='foot_sec'>
                <div className='foot_sec_subhead'>About</div>
                <ul>
                  {/* {
                    ErrorCompany ?
                      <div className='warning'>
                        <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                      </div>
                      :
                      aboutData.length === 0 ?
                        <>
                          <li> <a href="">demo</a></li>
                          <li> <a href="">demo</a></li>
                          <li> <a href="">demo</a></li>
                          <li> <a href="">demo</a></li>
                          <li> <a href="">demo</a></li>
                        </>
                        :
                        aboutData.map((e, key) => {
                          return (
                            <li key={key}><Link to="/aboutUs">{e}</Link></li>
                          )
                        })
                  } */}
                  <li> <Link to="/aboutUs">About Company</Link></li>
                  <li> <a href="#mission" onClick={handleNav}>Vision & Mission</a></li>
                  <li> <a href="#ourPartner" onClick={handleNav}>Become Our Partner</a></li>
                  <li> <a href="#technology" onClick={handleNav}>Our Technology Partners</a></li>
                </ul>
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col lg={12}>
              <div className='footer_bottom'>
                <div className='logo'>Infograins</div>
                <div className='security_div'>
                  <Link to='/privacy'>Privacy Policy</Link>
                  <Link to='/term_and_condition'>Terms & Conditions</Link>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>
      <footer className='app-footer'>
        <Container>
          <Row>
            <Col lg={12}>
              <p>Copyright©2022 | All right reserved</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer