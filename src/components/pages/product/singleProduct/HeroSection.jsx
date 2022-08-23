import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Image, Spinner } from "react-bootstrap"
import Background from '../../../../assets/images/background/web3/banner3.jpg'
import Loader from "react-js-loader";
import BannerForm from '../../../common/BannerForm';
export default function HeroSection() {
    // =====================================  API start ============================================ 
    const navigate = useNavigate()
    const location = useLocation();
    const filterApi_PathName = location.pathname.slice(1);
    const [BlockchainCate, setBlockchainCate] = useState([])
    const [ErrorBlockchain, setErrorBlockchain] = useState(false)
    const [loader, setLoader] = useState(false);
    const [messageError, setMessage] = useState("");

    async function API() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}${filterApi_PathName}`);
            setBlockchainCate(api.data.response)
        } catch (error) {
            setErrorBlockchain(true)
            navigate('/')
        }
    }

    useEffect(() => {
        API()
    }, [filterApi_PathName])

    // =====================================  API end ============================================ 

    // ========================= form validation =========================
    const [input, setInput] = useState({
        name: "",
        email: "",
        subject: ""
    })
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [numberError, setNumberError] = useState("");
    const [Error, setError] = useState(false);
    const [countryCodeData, setCountryCodeData] = useState([]);
    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true)
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
        } else {
            setSubjectError("");
        }
              // // ================ Message =============================
              let messageId = document.getElementById("messageId").innerHTML;
              if (!messageId) {
                  setMessage("Message is required");
              } else {
                  setMessage("");
              }
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
                setLoader(false)
            }
        }).catch(err => {
            setLoader(false)
            console.log("err", err);
            var numErr = JSON.parse(err.request.response);
            if (numErr.response === "Phone number is not valid!") {
                setNumberError("Phone number is not valid!")
            } else {
                setNumberError("")
            }
        })
    }

    // ========================= form validation ========================= 

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
    return (
        <>
            <section className='web3-hero-wrap'>
                <Image className='background_img' src={Background} fluid />
                <Container>
                    <Row>
                        <Col sm={6} md={6} lg={8} xl={8}>
                            <div className='w3-about-wrap'>
                                <h3 className='h3_title'>{BlockchainCate.name}</h3>
                            </div>
                        </Col>
                        <Col sm={6} md={6} lg={4} xl={4}>
                            <BannerForm />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}
