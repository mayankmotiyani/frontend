import React, { useState, useEffect } from 'react'
import { Form, Container, Row, Col, Image, Nav, Navbar, NavDropdown, Tab, Spinner } from 'react-bootstrap'
// import FaceBook from '../../assets/media/icons/facebook-app.svg'
// import Instagram from '../../assets/media/icons/ig-instagram.svg'
// import Linkedin from '../../assets/media/icons/linkedin-app.svg'
// import Twitter from '../../assets/media/icons/twitter-app.svg'
// import Skype from '../../assets/media/icons/skype.svg'
// import {Form, Container, Row, Col, Nav, Tab, Spinner } from 'react-bootstrap'
import { IoMdArrowDropdown } from 'react-icons/io'
import Mail_icon from '../../assets/media/gif/message.gif'
import InfograinsIcon from '../../assets/media/logo-infograins.png'
import { GrFormNextLink } from 'react-icons/gr'
import { AiOutlineMessage } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import popupGif from "../../assets/media/CUNSTULTANT.png";
import { BiConversation } from "react-icons/bi";
import axios from 'axios'
import { Link } from "react-router-dom";
import { IoIosWarning } from 'react-icons/io'
import NFT_bg from '../../assets/media/nft_bg.png'
import Slice_bg from '../../assets/media/slice3ss.png'
import Game_bg from '../../assets/media/games-d.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { BsSkype } from 'react-icons/bs'
import Loader from "react-js-loader";


export default function Header() {
  // ====================================== popup validations ===================================
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
    subject: ""
  });
  const [countryCodeData, setCountryCodeData] = useState([]);
  const [Error, setError] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [numberError, setNumberError] = useState("");
  const [success, seSuccess] = useState(false);
  // const [subjectError, setSubjectError] = useState("");


  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true)

    // ================ name =============================
    if (!input.name) {
      setNameError("Name is required");
      setTimeout(() => {
        setLoader(false)
      }, 100)
      return true;
    } else {
      setNameError("");
    }

    // ===================== email =========================
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.email) {
      setEmailError("Email is required")
      setTimeout(() => {
        setLoader(false)
      }, 100)
      return true;
    } else if (!input.email.match(mailformat)) {
      setEmailError("Please enter your valid email")
      setTimeout(() => {
        setLoader(false)
      }, 100)
      return true;
    } else {
      setEmailError("")
    }
    // ==================== Number =========================
    // var phoneno = /^\d{10}$/;
    // if (!input.number) {
    //     setNumberError("Number is required")
    // } else if (input.number.match(phoneno)) {
    //     setNumberError("")
    // } else {
    //     setNumberError("Please enter valid number")
    //     return true
    // }
    // ================ subject =============================
    if (!input.subject) {
      setSubjectError("Subject is required");
      setTimeout(() => {
        setLoader(false)
      }, 100)
      return true;
    } else {
      setSubjectError("");
    }
    // // ================ Message =============================
    // let messageId = document.getElementById("messageId").innerHTML;
    // if (!messageId) {
    //     setMessage("Message is required");
    //     setTimeout(() => {
    //         setLoader(false)
    //     }, 100)
    //     return true;
    // } else {
    //     setMessage("");

    // }
    // ======================== concat number and dialingCode ==============================
    if (input.number != "") {
      var mobilesData = document.getElementById("mobile").value;
      var concatData = mobilesData + input.number;
    } else {
      concatData = ""
    }
    // console.log("mobilesData", mobilesData);
    // ======================== concat number and dialingCode ==============================
    const payload = {
      dialingCode: mobilesData,
      contactNumber: concatData,
      fullName: input.name,
      emailId: input.email,
      message: input.message,
      subject: input.subject
    }
    var formdata = new FormData();
    formdata.append('get_contact_detail', JSON.stringify(payload));
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_BASE_URL}contact_us/`,
      data: formdata,
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(res => {
      if (res) {
        setInput({
          name: "",
          email: "",
          message: "",
          number: "",
          subject: ""
        })
        setLoader(false);
        setNumberError("")
      }
      document.body.style.overflow = "hidden"
      seSuccess(true);
      setTimeout(() => {
        document.body.style.overflow = "auto"
        seSuccess(false)
      }, 3000)
    }).catch(err => {
      setLoader(false)
      console.log("err", err);
      var numErr = JSON.parse(err.request.response);
      if (numErr.response === "Phone number is not valid!") {
        setNumberError("Phone number is not valid!")
        setTimeout(() => {
          setLoader(false)
        }, 100)
        return true
      } else {
        setNumberError("")
      }
    })

  }
  // ====================================== popup validations ===================================
  // ========================= Country Code =============================
  async function countryCode() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}get_country_dialing_code/`);
      const apiData = api.data.response.country_dialing_code;
      setCountryCodeData(apiData)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    countryCode()
  }, [])
  // ======================================== chandrakant Dropdown start ========================================
  function toggleDropdown_enter(e) {
    const currentDropdown = e.target.attributes.mainlink.nodeValue;
    document.getElementsByClassName('desk_dropdown')[currentDropdown].style.transform = 'scaleY(1)'
  }

  function toggleDropdown_leave(e) {
    const currentDropdown = e.target.attributes.mainlink.nodeValue;
    document.getElementsByClassName('desk_dropdown')[currentDropdown].style.transform = 'scaleY(0)'
  }
  // ======================================== chandrakant Dropdown end ========================================
  // ====================================== chandrakant toggle menu start ========================================
  function toggle_menu_icon(e) {
    if (e.target.classList.value.includes('open')) {
      e.target.classList.remove('open')
      document.getElementsByClassName('menu_bar1')[0].style.transform = 'rotate(0deg)';
      document.getElementsByClassName('menu_bar2')[0].style.transform = 'translateX(10px)';
      document.getElementsByClassName('menu_bar3')[0].style.transform = 'rotate(0deg)';
      document.getElementsByClassName('mobile_menu_section')[0].style.display = "none"
      document.getElementsByClassName('mobile_menu_div')[0].style.width = '0%'
    } else {
      e.target.classList.add('open')
      document.getElementsByClassName('menu_bar1')[0].style.transform = 'rotate(38deg)';
      document.getElementsByClassName('menu_bar2')[0].style.transform = 'translateX(40px)';
      document.getElementsByClassName('menu_bar3')[0].style.transform = 'rotate(-38deg)';
      document.getElementsByClassName('mobile_menu_section')[0].style.display = "block"
      document.getElementsByClassName('mobile_menu_div')[0].style.width = '100%'
    }
  }

  // ========================================= chandrakant toggle mobile menu list start ================================
  function toggleDropdown_mobile(e) {
    const currentClick = e.target.attributes.menulink.nodeValue;
    const dropLink = document.getElementsByClassName('mobile_drop_menu_list');
    const dropMenuLink = document.getElementsByClassName('mobile_drop_link');
    for (let i = 0; i < dropLink.length; i++) {
      if (dropLink[i].style.height == '210px') {
        dropLink[i].style.cssText = "height : 0px !important; transform : rotate(0deg)"
      }
    }

    const arrow = document.getElementsByClassName('downArrow');
    for (let i = 0; i < arrow.length; i++) {
      if (arrow[i].style.transform == 'rotate(180deg)') {
        arrow[i].style.transform = 'rotate(0deg)';
      }
    }
    if (e.target.classList.value.includes('open_mob_link')) {
      e.target.classList.remove('open_mob_link')
      document.getElementsByClassName('mobile_drop_menu_list')[currentClick].style.height = "0px"
      document.getElementsByClassName('mobile_drop_menu_list')[currentClick].style.padding = "0px"
      document.getElementsByClassName('downArrow')[currentClick].style.transform = "rotate(0deg)"

    } else {
      const index = e.target.attributes.menulink.nodeValue;
      e.target.classList.add('open_mob_link')
      for (let i = 0; i < dropMenuLink.length; i++) {
        if (dropMenuLink[i].classList.value.includes('open_mob_link')) {
          dropMenuLink[i].classList.remove('open_mob_link')
          dropMenuLink[index].classList.add('open_mob_link')
        } else {
        }
      }
      document.getElementsByClassName('mobile_drop_menu_list')[currentClick].style.cssText = "height : 210px !important;padding : 10px !important"
      document.getElementsByClassName('downArrow')[currentClick].style.transform = "rotate(180deg)"
    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ========================================= chandrakant toggle mobile menu list end ================================

  // ===================================== Header API start ============================================ 
  // ===================================== Header API end ============================================ 

  useEffect(() => {
    var header = document.getElementById("myHeader");
    var header1 = document.getElementById("headContainer");
    var sticky;
    window.onscroll = function () { myFunction() };
    sticky = header.offsetTop;
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        header1.classList.add('head');
      } else {
        header.classList.remove("sticky");
        header1.classList.remove('head');
      }
    }
  }, [])

  // ===================================== NFT API start ============================================ 

  const [nftList, setNftList] = useState([])
  const [ErrorNft, setErrorNft] = useState(false)
  async function headerAPI() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}nft/nft_list/`);
      setNftList(api.data.response)
    } catch (error) {
      setErrorNft(true)
    }
  }

  useEffect(() => {
    headerAPI()
  }, [])

  // ===================================== NFT API end ============================================ 

  // ==================================== BLOCKCHAIN API ============================
  const [CategoriesList, setCategoriesList] = useState([])
  const [ErrorBlockchain, setErrorBlockchain] = useState(false)
  async function blockchainCategories() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}blockchain/blockchain_list/`);
      setCategoriesList(api.data.response)
    } catch (error) {
      setErrorBlockchain(true)
    }

  }

  useEffect(() => {
    blockchainCategories()
  }, [])
  // ==================================== BLOCKCHAIN API ============================
  // ==================================== GAME API ============================
  const [gameList, setGameList] = useState([])
  const [errorGame, setErrorGame] = useState(false)
  async function gameApi() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}game/game_list/`);
      setGameList(api.data.response)
    } catch (error) {
      setErrorGame(true)
    }
  }

  useEffect(() => {
    gameApi()
  }, [])


  // ==================================== GAME API ============================

  // =============================== navdrop back on click ===========


  setTimeout(() => {

    const allLink = document.getElementsByClassName('desk_dropdown_link');

    for (let i = 0; i < allLink.length; i++) {
      allLink[i].addEventListener('click', (e) => {
        const index = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.getAttribute('mainlink');
        document.getElementsByClassName('desk_dropdown')[index].style.transform = 'translateY(-500px)';
      })

    }
  }, 500);


  // =============================================== Product API ========================================
  const [ProductData, setProductData] = useState([])
  const [ErrorProduct, setErrorProduct] = useState(false)
  async function ourProduct() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}product/product_list/`);
      setProductData(api.data.response[0].array_of_product_list)
    } catch (error) {
      setErrorProduct(true)
    }
  }

  useEffect(() => {
    ourProduct()
  }, [])

  function closeMobileNav(e) {
    document.getElementsByClassName('menu_toggle_btn')[0].click()
  }


  // ========================================================== Top Bar Nav =============================================================
  const [TopBarNum, setTopBarNum] = useState([])
  const [ErrorTopBar, setErrorTopBar] = useState(false)
  async function topBar_Numbers() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/header-office-address/`);
      setTopBarNum(api.data.response)
    } catch (error) {
      setErrorTopBar(true)
    }
  }

  useEffect(() => {
    topBar_Numbers()
  }, [])

  return (
    // /* ============================ header area =============================*/
    <>
      <section className='site_main_head'>
        <div className='top_most_bar'>
          <Container >
            <Row>
              <Col lg={12}>
                <div className='top_bar'>
                  <a href="mailto:info@infograins.com" className='mail_link'> <img src={Mail_icon} alt="" /> info@infograins.com</a>
                  <div className='call_us_div'>
                    <div>Call Us :</div>
                    <ul className='call_us_list'>

                      {ErrorTopBar ? 'Error'
                        : TopBarNum.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                          : TopBarNum.map((e, key) => {
                            return <li key={key}><div className='country_name'>{e.office}</div>  <a href={`tel:${e.phone1}`}>{e.phone1}</a>  <a className="ms-4" href={`tel:${e.phone2}`}>{e.phone2}</a></li>
                          })}
                    </ul>
                  </div>
                  <div className='social_link_div'>
                    <a href="https://www.facebook.com/infograins/" target={'_blank'}>  <FaFacebookF /> </a>
                    <a href="https://twitter.com/infograinssoft?s=20" target={'_blank'}> <FaTwitter /> </a>
                    <a href="https://www.instagram.com/infograins/" target={'_blank'}> <FaInstagram /> </a>
                    <a href="https://www.linkedin.com/company/infograin-software-solutions/" target={'_blank'}> <FaLinkedinIn /> </a>
                    <a href="https://join.skype.com/invite/NqBQ11qKBCxI" target={'_blank'}> <BsSkype /> </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='menu_bar_container'>
          <div className='menu_bar_div' id='myHeader'>
            <div className='animated_bar'></div>
            <Container fluid id='headContainer'>
              <Row>
                <Col lg={12}>
                  <div className='nav_bar'>
                    <div className='main_nav'>
                      <div className='site_logo'>
                        <div className='site_logo_img'>
                          <Link to='/'>
                            <img src={InfograinsIcon} alt="site_logo" />
                          </Link>
                        </div>
                      </div>
                      <div className='main_nav_list'>
                        <ul className='main_nav_ul'>
                          <li className='main_nav_link main_nav_Drop_link' mainlink="0" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>Blockchain <IoMdArrowDropdown /></li>
                          <li className='main_nav_link main_nav_Drop_link' mainlink="1" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>NFT <IoMdArrowDropdown /> </li>
                          <li className='main_nav_link main_nav_Drop_link' mainlink="2" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>Game <IoMdArrowDropdown /> </li>
                          <li className='main_nav_link main_nav_Drop_link' mainlink="3" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>Our Products <IoMdArrowDropdown /> </li>
                          <li className='main_nav_link'><Link to="/aboutUs">About Us</Link></li>
                          <li className='main_nav_link'><Link to='/blog'>Blogs</Link></li>
                          <li className='main_nav_link'><Link to="/contactUs">Contact Us</Link></li>
                        </ul>
                        <button className='menu_toggle_btn' onClick={toggle_menu_icon}>
                          <div className='menu_bar1'></div>
                          <div className='menu_bar2'></div>
                          <div className='menu_bar3'></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
            {/* =============================================== Mobile Menu ======================================= */}
            <section className='mobile_menu_section'>
              <div className='mobile_menu_div'>
                <ul>
                  <li className='mobile_drop_link with_dropdown' menulink="0" onClick={toggleDropdown_mobile}>Blockchain <IoMdArrowDropdown className='downArrow' /> </li>

                  <li className='mobile_drop_menu_list'>
                    {ErrorBlockchain ?
                      <div className='warning'>
                        <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                      </div>
                      : CategoriesList.length === 0 ?
                        <div className='warning'>
                          <b><IoIosWarning /> Something went wrong</b>
                        </div>
                        : CategoriesList.map((e, key) => {
                          return <div className='mobile_drop_menu' key={key}>
                            <div className='subheading_text'>{e.blockchain_category}</div>
                            <ul>
                              {e.array_of_blockchain_category_list.map((e, key) => {
                                return <li key={key} onClick={closeMobileNav}>
                                  <Link to={e.blockchain_url} className='desk_dropdown_link' >
                                    <div>{e.blockchain_name}</div>
                                  </Link>
                                </li>
                              })}
                            </ul>
                          </div>
                        })}
                  </li>

                  <li className='mobile_drop_link with_dropdown' menulink="1" onClick={toggleDropdown_mobile}>NFT <IoMdArrowDropdown className='downArrow' /> </li>

                  <li className='mobile_drop_menu_list'>
                    <div className='mobile_drop_menu'>
                      <ul>
                        {ErrorNft ?
                          <div className='warning'>
                            <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                          </div>
                          : nftList.length === 0 ?
                            <div className='warning'>
                              <b><IoIosWarning /> Something went wrong</b>
                            </div>
                            : nftList.map((nft, index) => {
                              return <li key={index} onClick={closeMobileNav}>
                                <Link to={nft.nft_url} className='desk_dropdown_link' >
                                  <div>{nft.name}</div>
                                </Link>
                              </li>
                            })}

                      </ul>
                    </div>
                  </li>
                  <li className='mobile_drop_link with_dropdown' menulink="2" onClick={toggleDropdown_mobile}>Games <IoMdArrowDropdown className='downArrow' /> </li>

                  <li className='mobile_drop_menu_list'>
                    <div className='mobile_drop_menu'>
                      <ul>
                        {errorGame ?
                          <div className='warning' mainlink="2">
                            <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                          </div>
                          : gameList.length === 0 ? 'loading...'
                            : gameList.map((game, index) => {
                              return <li key={index} onClick={closeMobileNav}>
                                <Link to={game.game_slug} className='desk_dropdown_link' >
                                  <div>{game.name}</div>
                                </Link>
                              </li>
                            })}
                      </ul>
                    </div>
                  </li>

                  <li className='mobile_drop_link with_dropdown' menulink="3" onClick={toggleDropdown_mobile}>Our Products <IoMdArrowDropdown className='downArrow' /> </li>

                  <li className='mobile_drop_menu_list'>
                    <div className='mobile_drop_menu'>
                      <ul>
                        {ErrorProduct ?
                          <div className='warning' mainlink="2">
                            <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                          </div>
                          : ProductData.length === 0 ? 'loading...'
                            : ProductData.map((product, index) => {
                              return (
                                <li key={index} onClick={closeMobileNav}>
                                  <Link to={product.product_url} className='desk_dropdown_link' >
                                    <div>{product.name}</div>
                                  </Link>
                                </li>
                              )
                            })}
                      </ul>
                    </div>
                  </li>

                  <li className='mobile_drop_link'><Link to="/aboutUs" onClick={closeMobileNav}>About Us</Link></li>

                  <li className='mobile_drop_link'><Link to='/blog' onClick={closeMobileNav}>Blogs</Link></li>

                  <li className='mobile_drop_link'><Link to='/contactUs' onClick={closeMobileNav}>Contact Us</Link></li>

                </ul>
              </div>
            </section>
            {/* =============================================== Desktop Dropdown ======================================= */}
            <div className='desk_dropdown' mainlink="0" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>
              <Container mainlink="0">
                <Tab.Container id="left-tabs-example" defaultActiveKey='Core Blockchain' mainlink="0">
                  <Row mainlink="0">
                    <Col sm={3} mainlink="0">
                      <Nav variant="pills" className="flex-column" mainlink="0">
                        {ErrorBlockchain ? "Error"
                          : CategoriesList.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                            : CategoriesList.map((e, key) => {
                              return <Nav.Item key={key} mainlink="0">
                                <Nav.Link eventKey={e.blockchain_category} mainlink="0">{e.blockchain_category}</Nav.Link>
                              </Nav.Item>
                            })}
                      </Nav>
                    </Col>
                    <Col sm={9} mainlink="0">
                      <Tab.Content mainlink="0">
                        {ErrorBlockchain ? 'Error'
                          : CategoriesList.length === 0 ? <div className='spin_loader'> <Spinner variant='primary' animation='border' /> </div>
                            : CategoriesList.map((e, key) => {
                              return <Tab.Pane eventKey={e.blockchain_category} key={key} mainlink="0">
                                <div className='d-flex' mainlink="0">
                                  <ul mainlink="0">
                                    {e.array_of_blockchain_category_list.slice(0, 8).map((e, key) => {
                                      return <li key={key} mainlink="0">
                                        <Link to={e.blockchain_url} className='desk_dropdown_link' mainlink="0">
                                          <GrFormNextLink mainlink="0" />
                                          <div mainlink="0">{e.blockchain_name}</div>
                                        </Link>
                                      </li>
                                    })}
                                  </ul>
                                  <ul mainlink="0">
                                    {e.array_of_blockchain_category_list.slice(8, 16).map((e, key) => {
                                      return <li key={key} mainlink="0">
                                        <Link to={e.blockchain_url} className='desk_dropdown_link' mainlink="0">
                                          <GrFormNextLink mainlink="0" />
                                          <div mainlink="0">{e.blockchain_name}</div>
                                        </Link>
                                      </li>
                                    })}
                                  </ul>
                                  <ul mainlink="0">
                                    {e.array_of_blockchain_category_list.slice(16, 24).map((e, key) => {
                                      return <li key={key} mainlink="0">
                                        <Link to={e.blockchain_url} className='desk_dropdown_link' mainlink="0">
                                          <GrFormNextLink mainlink="0" />
                                          <div mainlink="0">{e.blockchain_name}</div>
                                        </Link>
                                      </li>
                                    })}
                                  </ul>
                                </div>
                              </Tab.Pane>
                            })
                        }
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Container>

            </div>
            <div className='desk_dropdown' mainlink="1" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>
              <Container mainlink="1">
                <Row className='justify-content-around' mainlink="1">
                  <Col lg={3} mainlink="1">
                    <div mainlink="1" className='dropdown_bg_image'>
                      <img src={NFT_bg} alt="" mainlink="1" />
                    </div>
                  </Col>
                  <Col lg={3} mainlink="1">
                    <div className='desk_dropdown_col' mainlink="1">
                      <ul mainlink="1">

                        {ErrorNft ?
                          <div className='warning' mainlink="1">
                            <b mainlink="1"><IoIosWarning style={{ color: 'red' }} mainlink="1" /> Something went wrong</b>
                          </div>
                          : nftList.length === 0 ?
                            <div className='spin_loader' mainlink="1"> <Spinner variant='primary' animation='border' mainlink="1" /> </div>
                            : nftList.map((nft, index) => {
                              return <li key={index} mainlink="1">
                                <Link to={nft.nft_url} className='desk_dropdown_link' mainlink="1">
                                  <GrFormNextLink mainlink="1" />
                                  <div mainlink="1">{nft.name}</div>
                                </Link>
                              </li>
                            })}

                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className='desk_dropdown' mainlink="2" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>
              <Container mainlink="2">
                <Row className='justify-content-around' mainlink="2">
                  <Col lg={3} mainlink="2">
                    <div mainlink="2" className='dropdown_bg_image'>
                      <img src={Game_bg} alt="" mainlink="2" />
                    </div>
                  </Col>
                  <Col lg={3} mainlink="2">
                    <div className='desk_dropdown_col' mainlink="2">
                      <ul mainlink="2">
                        {errorGame ?
                          <div className='warning' mainlink="2">
                            <b mainlink="2"><IoIosWarning style={{ color: 'red' }} mainlink="2" /> Something went wrong</b>
                          </div>
                          : gameList.length === 0 ?
                            <div className='spin_loader' mainlink="2"> <Spinner variant='primary' animation='border' mainlink="2" /> </div>
                            : gameList.map((game, index) => {
                              return <li key={index} mainlink="2">
                                <Link to={game.game_slug} className='desk_dropdown_link' mainlink="2">
                                  <GrFormNextLink mainlink="2" />
                                  <div mainlink="2">{game.name}</div>
                                </Link>
                              </li>
                            })}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className='desk_dropdown' mainlink="3" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>
              <Container mainlink="3">
                <Row className='justify-content-around' mainlink="3">
                  <Col lg={3} mainlink="3">
                    <Link to={'/products'} mainlink="3" className='desk_dropdown_link dropdown_bg_image'>
                      <h5>View All Products</h5>
                      <div>
                        <div>
                          <img src={Slice_bg} alt="" mainlink="3" />
                        </div>
                      </div>
                    </Link>
                  </Col>
                  <Col lg={3} mainlink="3">
                    <div className='desk_dropdown_col' mainlink="3">
                      <ul mainlink="3">
                        {ErrorProduct ? 'error'
                          : ProductData.length === 0 ? <div className='spin_loader' mainlink="3"> <Spinner variant='primary' animation='border' mainlink="3" /> </div>
                            : ProductData.map((product, key) => {
                              return <li key={key} mainlink="3">
                                <Link to={product.product_url} className='desk_dropdown_link' mainlink="3">
                                  <GrFormNextLink mainlink="3" />
                                  <div mainlink="3">{product.name}</div>
                                </Link>
                              </li>
                            })}
                      </ul>
                    </div>
                  </Col>

                </Row>
              </Container>
            </div>
          </div>
        </div>
      </section>
      {/*========================= position fix Quote ========================*/}
      <section className='quote_wrap'>
        <Button onClick={handleShow}>
          <p> <AiOutlineMessage /> Get A <span>Free</span> Quote</p>
          <span className='popup-icn'><BiConversation /></span>
        </Button>
      </section>

      <Modal show={show} onHide={handleClose} animation={true} centered backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Get Free Consultation From Top Industry Experts</Modal.Title>
        </Modal.Header>
        <div className='quote-popup-wrap'>
          <figure className='quote-popup-img'>
            <img src={popupGif} alt="popup-gif" />
          </figure>
          <Modal.Body className='quote-popup'>
            <div className="login-box">
              <form>
                <div className="user-box">
                  <label>Full Name</label>
                  <input type="text" name="name" value={input.name} onChange={handleChange} />
                  <small style={{ color: "red", fontSize: "12px" }}>{nameError}</small>
                </div>
                <div className="user-box">
                  <label>Email</label>
                  <input type="email" name="email" value={input.email} onChange={handleChange} />
                  <small style={{ color: "red", fontSize: "12px" }}>{emailError}</small>
                </div>
                <Form.Group className="mb-3">
                  <label className='phone_label_text'>Phone Number (optional)</label>
                  <div className='mobile_div mb-4'>
                    <Form.Select id='mobile'>
                      {Error ?
                        <option>00</option>
                        : countryCodeData.map((e, key) => {

                          return <option key={key} value={e.Dial}>{e.country_with_dialing_code}</option>
                        })}
                    </Form.Select>
                    <Form.Control type="number" min={0} id="userNumber" placeholder="Enter number" className='input_field' name="number" value={input.number} onChange={handleChange} />
                  </div>
                  <small style={{ color: "red", fontSize: "12px" }}>{numberError}</small>
                </Form.Group>
                <div className="user-box">
                  <label>Subject</label>
                  <input type="text" name="subject" value={input.subject} onChange={handleChange} />
                  <small style={{ color: "red", fontSize: "12px" }}>{subjectError}</small>
                </div>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                    className='input_field'
                    name='message'
                    value={input.message} onChange={handleChange} id="messageId"

                  />
                  <small style={{ color: "red", fontSize: "12px" }}>{messageError}</small>
                </Form.Group>
                <a type='button' onClick={handleSubmit}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  {
                    loader ? <div className="item popup_loader" disabled><Loader type="spinner-circle" bgColor={"#fff"} color={'#FFFFFF'} size={40} /></div> : <div>Send</div>
                  }
                </a>
              </form>
            </div>
          </Modal.Body>
        {
          success ?
            <section className='congrats_popup get_popup'>
              <div className="svg-container">
                <svg className="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                  <circle className="success" fill="#5bb543" cx="24" cy="24" r="22" />
                  <path className="tick" fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M14 27l5.917 4.917L34 17" />
                </svg>
                <p>Thanks for contacting us. We will contact you shortly</p>
              </div>
            </section> : ""
        }
        </div>
      </Modal>


      {/*=========================// position fix Quote====================== */}
    </>
    // /* ============================ // header area =============================*/
  )
}
