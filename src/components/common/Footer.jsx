import React, { useState, useEffect } from 'react';
import "../../assets/style/common/footer.scss";
import { BiUpArrowAlt } from "react-icons/bi"
import { Container, Row, Col } from 'react-bootstrap'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { BsSkype, BsArrowLeft } from 'react-icons/bs'
import { BiRightArrowAlt } from 'react-icons/bi';
import { Link } from "react-router-dom"
import axios from 'axios';
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
  const [companyData, setCompanyData] = useState([])
  const [ErrorCompany, setErrorCompany] = useState(false)
  async function companyApi() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}company/get-all-models/`);
      setCompanyData(api.data.response.Company)
    } catch (error) {
      setErrorCompany(true)
    }
  }

  useEffect(() => {
    companyApi()
  }, [])
  

  return (
    <>

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
                <div className='foot_sec_subhead'>Products</div>
                <ul>
                  <li><Link to="/team">Our Team</Link></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className='foot_sec'>
                <div className='foot_sec_subhead'>Company</div>
                <ul>
                  {/* {companyData.map((e, key)=>{
                    return <li key={key}><a href="">{e}</a></li>
                  })} */}
                  {/* <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li> */}
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className='foot_sec_one'></div><div className='foot_sec'>
                <div className='foot_sec_subhead'>Products</div>
                <ul>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className='foot_sec'>
                <div className='foot_sec_subhead'>Products</div>
                <ul>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                  <li> <a href="">demo</a></li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className='footer_bottom'>
                <div className='logo'>Infograins</div>
                <div className='security_div'>
                  <a href='#'>Privacy Policy</a>
                  <a href='#'>Terms & Conditions</a>
                </div>
              </div>
            </Col>
          </Row>
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