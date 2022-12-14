import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "react-js-loader";
import { Form, Button } from "react-bootstrap"
const BannerForm = () => {
    // ========================= form validation =========================
    const [input, setInput] = useState({
        name: "",
        email: "",
        message: "",
        number: "",
        subject: ""
    })
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [messageError, setMessage] = useState("");
    const [success, seSuccess] = useState(false);
    const [ErrorBlockchain, setErrorBlockchain] = useState(false);
    const [countryCodeData, setCountryCodeData] = useState([]);
    const [numberError, setNumberError] = useState("");
    const [loader, setLoader] = useState(false);

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    // ========================= Country Code =============================
    async function countryCode() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}get_country_dialing_code/`);
            const apiData = api.data.response.country_dialing_code;
            setCountryCodeData(apiData)
        } catch (error) {
            setErrorBlockchain(true)
        }
    }

    useEffect(() => {
        countryCode()
    }, []);
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
        let messageId = document.getElementById("messageId").innerHTML;
        if (!messageId) {
            setMessage("Message is required");
            setTimeout(() => {
                setLoader(false)
            }, 100)
            return true;
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
                setLoader(false);
                setNumberError("")
            }
            seSuccess(true);
            document.body.style.overflow = "hidden"
            setTimeout(() => {
                document.body.style.overflow = "auto"

                seSuccess(false)
            }, 3000)
        }).catch(err => {
            setLoader(false)
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
    return (
        <>
            <Form className='banner-from-wrap' onSubmit={handleSubmit}>
                <h3 className='h3_title'>Talk to our experts</h3>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" placeholder="Enter name" className='input_field' name='name' value={input.name} onChange={handleChange} />
                    <small style={{ color: "red", fontSize: "12px" }}>{nameError}</small>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" className='input_field' name='email' value={input.email} onChange={handleChange} />
                    <small style={{ color: "red", fontSize: "12px" }}>{emailError}</small>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicSubjecy">
                    <Form.Control type="text" placeholder="Enter subject" className='input_field' name='subject' value={input.subject} onChange={handleChange} />
                    <small style={{ color: "red", fontSize: "12px" }}>{subjectError}</small>
                </Form.Group>
                <Form.Group className="mb-3">
                    <div className='mobile_div'>
                        <Form.Select id='mobile'>
                            {ErrorBlockchain ?
                                <option>00</option>
                                : countryCodeData.map((e, key) => {

                                    return <option key={key} value={e.Dial}>{e.country_with_dialing_code}</option>
                                })}
                        </Form.Select>
                        <Form.Control type="number" min={0} id="userNumber" placeholder="Enter number (optional)" className='input_field' name="number" value={input.number} onChange={handleChange} />
                    </div>
                    <small style={{ color: "red", fontSize: "12px" }}>{numberError}</small>
                </Form.Group>
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
                {
                    loader ?
                        <Button type="submit" disabled className='item_loader'><div className="item"><Loader type="spinner-circle" bgColor={"#fff"} color={'#FFFFFF'} size={40} /></div></Button>
                        : <Button type="submit">Send</Button>
                }
            </Form>
            {
                success ?
                    <section className='congrats_popup'>
                        <div className="svg-container">
                            <svg className="ft-green-tick" xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 48 48" aria-hidden="true">
                                <circle className="success" fill="#5bb543" cx="24" cy="24" r="22" />
                                <path className="tick" fill="none" stroke="#FFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M14 27l5.917 4.917L34 17" />
                            </svg>
                            <p>Thanks for contacting us. We will contact you shortly</p>
                        </div>
                    </section> : ""
            }
        </>
    )
}

export default BannerForm