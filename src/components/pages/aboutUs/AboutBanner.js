import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

const AboutBanner = () => {
  // ==================================== API ==============================================
  const [apiData, setapiData] = useState([])
  const [Error, setError] = useState(false)
  async function api() {
    try {
      const api = await axios.get(`${process.env.REACT_APP_BASE_URL}about_us/`);
      setapiData(api.data.response);
      const title_tag = document.getElementsByTagName('title')
      const meta_description = document.getElementsByTagName('meta');
      meta_description.description.content = api.data.response.metacontent.content
      title_tag[0].innerText = api.data.response.metacontent.title
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    api()
  }, [])

  return (
    <>
      <section className='aboutUs-wrap'>
        <Container>
          {Error ? 'Error'
            : apiData.length === 0 ? 'loading...'
              : <div className='aboutUs-title'>
                <h2 className='h2_title'>{apiData.heading}</h2>
                <p>{apiData.description}</p>
              </div>
          }
        </Container>
      </section>
    </>
  )
}

export default AboutBanner