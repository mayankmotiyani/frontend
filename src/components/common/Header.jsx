import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import FaceBook from '../../assets/media/icons/facebook-app.svg'
import Instagram from '../../assets/media/icons/ig-instagram.svg'
import Linkedin from '../../assets/media/icons/linkedin-app.svg'
import Twitter from '../../assets/media/icons/twitter-app.svg'
import Skype from '../../assets/media/icons/skype.svg'
import { IoMdArrowDropdown } from 'react-icons/io'
import Mail_icon from '../../assets/media/gif/message.gif'
import InfograinsIcon from '../../assets/media/logo-infograins.png'
import { GrFormNextLink } from 'react-icons/gr'
import DeskDrop_img from '../../assets/images/blockchainService1.png'
import { AiOutlineMessage } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import popupGif from "../../assets/media/CUNSTULTANT.png";
import { BiConversation } from "react-icons/bi";
// import env from "react-dotenv";
import axios from 'axios'
import { Link } from "react-router-dom";
import { IoIosWarning } from 'react-icons/io'

export default function Header() {
  // ====================================== popup validations ===================================
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: ""

  })
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubject] = useState("");
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault(e);
    console.log("input", input);
    // ================ name =============================
    if (!input.name) {
      setNameError("Name is required");
    } else {
      setNameError("");
    }

    // ===================== email =========================
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!input.email) {
      setEmailError("Email is required")
    } else if (!input.email.match(mailformat)) {
      setEmailError("Please enter your valid email")
    } else {
      setEmailError("")
    }

    // ================ subject =============================
    if (!input.subject) {
      setSubject("Subject is required");
    } else {
      setSubject("");
    }
  }
  // ====================================== popup validations ===================================

  // ======================================== chandrakant Dropdown start ========================================
  function toggleDropdown_enter(e) {
    // console.log(e.target);
    const currentDropdown = e.target.attributes.mainlink.nodeValue;
    document.getElementsByClassName('desk_dropdown')[currentDropdown].style.transform = 'translateY(0px)'
  }

  // function toggleDemo2_enter() {
  //   document.getElementsByClassName('desk_dropdown')[1].style.transform = 'translateY(0px)'
  // }

  // function toggleDemo2_leave() {
  //   document.getElementsByClassName('desk_dropdown')[1].style.transform = 'translateY(-500px)'
  // }

  function toggleDropdown_leave(e) {
    // console.log(e.target);
    const currentDropdown = e.target.attributes.mainlink.nodeValue;
    document.getElementsByClassName('desk_dropdown')[currentDropdown].style.transform = 'translateY(-500px)'
  }

  // function dropdown_div_enter() {
  //   document.getElementsByClassName('desk_dropdown')[0].style.transform = 'translateY(0px)'
  // }

  // function dropdown_demo2div_enter() {
  //   document.getElementsByClassName('desk_dropdown')[1].style.transform = 'translateY(0px)'
  // }

  // function dropdown_div_leave() {
  //   document.getElementsByClassName('desk_dropdown')[0].style.transform = 'translateY(-500px)'
  // }

  // function dropdown_demo2div_leave() {
  //   document.getElementsByClassName('desk_dropdown')[1].style.transform = 'translateY(-500px)'
  // }
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
        // e.target.classList.remove('open_mob_link')
        console.log('iffff', e.target.classList);
      }
    }

    // console.log(dropMenuLink[0].classList.value.includes('open_mob_link'));

    const arrow = document.getElementsByClassName('downArrow');
    for (let i = 0; i < arrow.length; i++) {
      if (arrow[i].style.transform == 'rotate(180deg)') {
        arrow[i].style.transform = 'rotate(0deg)';
        // e.target.classList.remove('open_mob_link')
      }
    }
    if (e.target.classList.value.includes('open_mob_link')) {
      e.target.classList.remove('open_mob_link')
      // for (let i = 0; i < dropMenuLink.length; i++) {      
      //   if(dropMenuLink[i].classList.value.includes('open_mob_link')){
      //     console.log('if true', dropMenuLink[i].classList);
      //   }else{
      //     dropMenuLink[i].classList.remove('open_mob_link')
      //   }
      // }
      document.getElementsByClassName('mobile_drop_menu_list')[currentClick].style.height = "0px"
      document.getElementsByClassName('mobile_drop_menu_list')[currentClick].style.padding = "0px"
      document.getElementsByClassName('downArrow')[currentClick].style.transform = "rotate(0deg)"

    } else {
      const index = e.target.attributes.menulink.nodeValue;
      e.target.classList.add('open_mob_link')
      for (let i = 0; i < dropMenuLink.length; i++) {
        if (dropMenuLink[i].classList.value.includes('open_mob_link')) {
          console.log('if true', dropMenuLink[i].classList);
          dropMenuLink[i].classList.remove('open_mob_link')
          dropMenuLink[index].classList.add('open_mob_link')
        } else {
        }
      }
      // document.getElementsByClassName('mobile_drop_menu_list')[currentClick].style.setProperty('padding', '10px', 'important');
      document.getElementsByClassName('mobile_drop_menu_list')[currentClick].style.cssText = "height : 210px !important;padding : 10px !important"
      document.getElementsByClassName('downArrow')[currentClick].style.transform = "rotate(180deg)"
    }
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // ========================================= chandrakant toggle mobile menu list end ================================

  // ===================================== Header API start ============================================ 
  // console.log("header", process.env.REACT_APP_BASE_URL);
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
      // console.log('api', api.data.response.NFT);
      setNftList(api.data.response)
      // console.log("try");

    } catch (error) {
      // console.log("catch", error);
      // console.log(error.message);
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
      // console.log('try', api.data.response.length);
    } catch (error) {
      console.log('catch', error);
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
      // console.log(api.data.response[0].array_of_product_list);
      setProductData(api.data.response[0].array_of_product_list)
    } catch (error) {
      setErrorProduct(true)
    }
  }

  useEffect(() => {
    ourProduct()
  }, [])


  // console.log('headd');

  function closeMobileNav(e) {
    // console.log('skldfjhsd');
    // console.log(e.target);
    document.getElementsByClassName('menu_toggle_btn')[0].click()
  }

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
                      <li><div className='country_name'>India</div>  <a href="tel:+919770477239">+91 9770477239</a>, <a href="tel:+919713406272">+91 9713406272</a></li>
                      <li><div className='country_name'>UK</div>  <a href="tel:+447401232155"> +447401232155</a></li>
                      <li><div className='country_name'>USA</div>  <a href="tel:+12025196167">  +12025196167</a></li>
                      <li><div className='country_name'>UAE</div>  <a href="tel:+971585596272">  +971585596272</a></li>
                      <li><div className='country_name'>Australia</div>  <a href="tel:+61480043472">   +61480043472</a></li>
                    </ul>
                  </div>
                  <div className='social_link_div'>
                    <a href="https://www.facebook.com/infograins/" target={'_blank'}><img src={FaceBook} alt="facebook_icon" /></a>
                    <a href="https://www.instagram.com/infograins/" target={'_blank'}><img src={Instagram} alt="instagram_icon" /></a>
                    <a href="https://www.linkedin.com/company/infograin-software-solutions/" target={'_blank'}><img src={Linkedin} alt="linkedin_icon" /></a>
                    <a href="https://twitter.com/infograinssoft?s=20" target={'_blank'}><img src={Twitter} alt="twitter_icon" /></a>
                    <a href="https://join.skype.com/invite/NqBQ11qKBCxI" target={'_blank'}><img src={Skype} alt="skype_icon" /></a>
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
                        {/* <div className='site_logo_name'>Infograins</div> */}
                      </div>
                      <div className='main_nav_list'>
                        <ul>
                          <li className='main_nav_link' mainlink="0" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>Blockchain <IoMdArrowDropdown /> </li>
                          <li className='main_nav_link' mainlink="1" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>NFT <IoMdArrowDropdown /> </li>
                          <li className='main_nav_link' mainlink="2" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>Game <IoMdArrowDropdown /> </li>
                          <li className='main_nav_link' mainlink="3" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>Our Products <IoMdArrowDropdown /> </li>
                          <li className='main_nav_link'><Link to="/aboutUs">About Us</Link></li>
                          <li className='main_nav_link'><Link to='/blog'>Blogs</Link></li>
                          <li className='main_nav_link'><Link to="/contactUs">Contact Us</Link></li>
                          {/* <li className='main_nav_link'>demo2</li> */}
                          {/* <li className='main_nav_link'><Link to='/blog'>Blogs</Link></li>
                        <li className='main_nav_link' mainlink="1" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>NFT <IoMdArrowDropdown /> </li>
                        <li className='main_nav_link'><Link to="/aboutUs">About Us</Link></li>
                        <li className='main_nav_link'><Link to="/contactUs">Contact Us</Link></li>
                        <li className='main_nav_link' mainlink="2" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>Game <IoMdArrowDropdown /> </li> */}
                          {/* <li className='main_nav_link'>Game</li> */}
                          {/* <li className='main_nav_link'><Link to="/products">Our Products</Link></li> */}
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
                  <li className='mobile_drop_link' menulink="0" onClick={toggleDropdown_mobile}>Blockchain <IoMdArrowDropdown className='downArrow' /> </li>

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

                  <li className='mobile_drop_link' menulink="1" onClick={toggleDropdown_mobile}>NFT <IoMdArrowDropdown className='downArrow' /> </li>

                  <li className='mobile_drop_menu_list'>
                    <div className='mobile_drop_menu'>
                      {/* <div className='subheading_text'>Sub Heading</div> */}
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
                  <li className='mobile_drop_link' menulink="2" onClick={toggleDropdown_mobile}>Games <IoMdArrowDropdown className='downArrow' /> </li>

                  <li className='mobile_drop_menu_list'>
                    <div className='mobile_drop_menu'>
                      {/* <div className='subheading_text'>Sub Heading</div> */}
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

                  <li className='mobile_drop_link' menulink="3" onClick={toggleDropdown_mobile}>Our Products <IoMdArrowDropdown className='downArrow' /> </li>

                  <li className='mobile_drop_menu_list'>
                    <div className='mobile_drop_menu'>
                      {/* <div className='subheading_text'>Sub Heading</div> */}
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
                <Row className='justify-content-around' mainlink="0">
                  {ErrorBlockchain ?
                    <div className='warning' mainlink="0">
                      <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                    </div>
                    : CategoriesList.length === 0 ?
                      <div className='warning' mainlink="0">
                        <b><IoIosWarning /> Something went wrong</b>
                      </div>
                      : CategoriesList.map((e, key) => {
                        return <Col lg={3} key={key} mainlink="0">
                          <div className='desk_dropdown_col' mainlink="0">
                            <div className='desk_dropdown_subhead' mainlink="0">{e.blockchain_category}</div>
                            <ul mainlink="0">
                              {e.array_of_blockchain_category_list.map((e, key) => {
                                return <li key={key} mainlink="0">
                                  <Link to={e.blockchain_url} className='desk_dropdown_link' mainlink="0">
                                    <GrFormNextLink />
                                    <div>{e.blockchain_name}</div>
                                  </Link>
                                </li>
                              })}
                            </ul>
                          </div>
                        </Col>
                      })}
                </Row>
              </Container>
            </div>
            <div className='desk_dropdown' mainlink="1" onMouseEnter={toggleDropdown_enter} onMouseLeave={toggleDropdown_leave}>
              <Container mainlink="1">
                <Row className='justify-content-around' mainlink="1">
                  <Col lg={3} mainlink="1">
                    <div className='desk_dropdown_col' mainlink="1">
                      {/* <div className='desk_dropdown_subhead'>Sub Heading</div> */}
                      <ul mainlink="1">

                        {ErrorNft ?
                          <div className='warning' mainlink="1">
                            <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                          </div>
                          : nftList.length === 0 ?
                            <div className='warning' mainlink="1">
                              <b><IoIosWarning /> Something went wrong</b>
                            </div>
                            : nftList.map((nft, index) => {
                              return <li key={index} mainlink="1">
                                <Link to={nft.nft_url} className='desk_dropdown_link' mainlink="1">
                                  <GrFormNextLink />
                                  <div>{nft.name}</div>
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
                    <div className='desk_dropdown_col' mainlink="2">
                      <ul mainlink="2">
                        {errorGame ?
                          <div className='warning' mainlink="2">
                            <b><IoIosWarning style={{ color: 'red' }} /> Something went wrong</b>
                          </div>
                          : gameList.length === 0 ?
                            <div className='warning' mainlink="2">
                              <b><IoIosWarning /> Something went wrong</b>
                            </div>
                            : gameList.map((game, index) => {
                              return <li key={index} mainlink="2">
                                <Link to={game.game_slug} className='desk_dropdown_link' mainlink="2">
                                  <GrFormNextLink />
                                  <div>{game.name}</div>
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
                    <div className='technology' mainlink="3">
                      <h2 className='h2_title'>SliceLedger</h2>
                    </div>
                  </Col>
                  <Col lg={3} mainlink="3">
                    <div className='desk_dropdown_col' mainlink="3">
                      <ul mainlink="3">
                        {ErrorProduct ? 'error'
                          : ProductData.length === 0 ? 'loading'
                            : ProductData.map((product, key) => {
                              return <li key={key} mainlink="3">
                                <Link to={product.product_url} className='desk_dropdown_link' mainlink="3">
                                  <GrFormNextLink />
                                  <div>{product.name}</div>
                                </Link>
                              </li>
                            })}
                      </ul>
                    </div>
                  </Col>
                  {/* <Col lg={3}>
                  <div className='desk_dropdown_col'>
                    <ul>
                      <li>
                        <a href="#" className='desk_dropdown_link'>
                          <GrFormNextLink />
                          <div>link List</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className='desk_dropdown_link'>
                          <GrFormNextLink />
                          <div>link List</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className='desk_dropdown_link'>
                          <GrFormNextLink />
                          <div>link List</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className='desk_dropdown_link'>
                          <GrFormNextLink />
                          <div>link List</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className='desk_dropdown_col'>
                    <ul>
                      <li>
                        <a href="#" className='desk_dropdown_link'>
                          <GrFormNextLink />
                          <div>link List</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className='desk_dropdown_link'>
                          <GrFormNextLink />
                          <div>link List</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className='desk_dropdown_link'>
                          <GrFormNextLink />
                          <div>link List</div>
                        </a>
                      </li>
                      <li>
                        <a href="#" className='desk_dropdown_link'>
                          <GrFormNextLink />
                          <div>link List</div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col> */}
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
                <div className="user-box">
                  <label>Subject</label>
                  <input type="text" name="subject" value={input.subject} onChange={handleChange} />
                  <small style={{ color: "red", fontSize: "12px" }}>{subjectError}</small>
                </div>
                <div className="user-box">
                  <label className='popup-message'>Message</label>
                  <textarea type="text" rows="4" cols="50" />
                </div>
                <a type='button' onClick={handleSubmit}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </a>
              </form>
            </div>
          </Modal.Body>
        </div>
      </Modal>

      {/*=========================// position fix Quote====================== */}
    </>
    // /* ============================ // header area =============================*/
  )
}
