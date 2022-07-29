import React from 'react'
import { Container } from "react-bootstrap"
const Map = () => {
    return (
        <>
            <section className='map-wrap'>
                <Container>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.55154228002!2d75.79380990529154!3d22.724115837816914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1658746487371!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Container>
            </section>
        </>
    )
}

export default Map