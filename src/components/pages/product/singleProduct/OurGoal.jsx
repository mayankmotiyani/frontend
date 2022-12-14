import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


export default function OurGoal() {
    // =====================================  API start ============================================ 
    const param = useParams();
    const [GoalData, setGoalData] = useState({})
    const [Error, setError] = useState(false)
    async function goalApi() {
        try {
            const api = await axios.get(`${process.env.REACT_APP_BASE_URL}product/our-goal/${param.product_slug}/`);
            setGoalData(api.data.response)
        } catch (error) {
            setError(true)
        }
    }

    useEffect(() => {
        goalApi()
    }, [param])

    // =====================================  API end ============================================ 

    return (
        <>
            {
                    <section className='ourGoal_section'>
                        <h2 className='h2_title'>Our Goals</h2>
                        <h4 className='h4_title'>{GoalData.title}</h4>
                        <p>{GoalData.content}</p>
                    </section>
            }
        </>
    )
}
