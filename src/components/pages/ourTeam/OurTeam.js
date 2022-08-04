import React, { useEffect, useState } from 'react';
import { Container, Image, Col, Row } from "react-bootstrap";
import team from "../../../assets/images/team/team.jpg";
import axios from "axios";
const OurTeam = (props) => {
    const [teamData, setTeamData] = useState([])
    const ourTeams = async () => {
        try {
            const teamData = await axios.get(`${process.env.REACT_APP_BASE_URL}team/`)
            console.log("teamData", teamData.data.response);
            setTeamData(teamData.data.response)
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        ourTeams();
        props.demo('top')
    }, [])


    return (
        <section className='team-wrap'>
            <Container>
                <h2 className='h2_title'>Meet the Team</h2>
                <Row>
                    {
                        teamData.map((element, index) => {
                            return (
                                <Col sm={12} md={6} lg={6} xl={3} key={index}>
                                    <div className='team-details'>
                                        <figure className='team-img'>
                                            <Image src={team} alt="Team" fluid />
                                        </figure>
                                        <div className="overlay">
                                            {/* <h3 className="h3_title">{element.member_name}</h3> */}
                                            {/* <h6 className="h6_title">{element.member_profile}</h6> */}
                                            <p>{element.member_bio}</p>
                                        </div>
                                        <div className='team-about'>
                                            <h3 className="h3_title">{element.member_name}</h3>
                                            <h6 className="h6_title">{element.member_profile}</h6>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </section >
    )
}

export default OurTeam