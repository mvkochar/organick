import React from 'react'
import './css/About.css'

const About = () => {
    return (
        <>
            <main className='about-main'>
                <h1 className="about-title">About Us</h1>
            </main>
            <section className='about-creative d-f align-center'>
                <div><img src="/images/about-creative.png" alt="about-creative" /></div>
                <div>
                    <div className="about-bl-above">About Us</div>
                    <h2 className="about-bl-title">We do Creative <br /> Things for Success</h2>
                    <p className="about-creative-desc">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased 
                        to been the industry's standard dummy text ever since the 1500s, when an 
                        unknown printer took a galley.
                    </p>
                    <p className="about-creative-desc last-par">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased 
                        to been the industry's standard dummy text ever since the 1500s, when an 
                        unknown printer took a galley.
                    </p>
                </div>
            </section>
            <div style={{ marginBottom: "202px" }}></div>
        </>
    )
}

export default About