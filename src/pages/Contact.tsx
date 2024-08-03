import React from 'react'
import './css/Contact.css'
import Newsletter from '../components/Newsletter/Newsletter'

const Contact = () => {
    return (
        <>
            <main className='contact-main'>
                <h1 className="contact-title">Contact Us</h1>
            </main>
            <section className='contact-connect d-f jc-sb'>
                <div><img src="/images/contact-connect.png" alt="contact-connect" /></div>
                <div>
                    <h2 className="contact-bl-title">We'd love to talk about how we <br /> can work together.</h2>
                    <p className="contact-bl-desc contact-connect-desc">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                    </p>
                    <div className="contact-connect-points d-f">
                        <div className="connect-points-item d-f align-center">
                            <div><img src="/images/connect-email.png" alt="connect-email" /></div>
                            <dl>
                                <dt>Massege</dt>
                                <dd>support@organic.com</dd>
                            </dl>
                        </div>
                        <div className="connect-points-item d-f align-center">
                            <div><img src="/images/connect-phone.png" alt="connect-phone" /></div>
                            <dl>
                                <dt>Contact Us</dt>
                                <dd>+01 123 456 789</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="contact-connect-follow d-f">
                        <div><img src="/images/follow1.png" alt="follow1" /></div>
                        <div><img src="/images/follow2.png" alt="follow2" /></div>
                        <div><img src="/images/follow3.png" alt="follow3" /></div>
                        <div><img src="/images/follow4.png" alt="follow4" /></div>
                    </div>
                </div>
            </section>
            <section className='contact-location'>
                <div className="contact-location-content">
                    <div className="contact-location-above">Location</div>
                    <h2 className="contact-bl-title">Our Farms</h2>
                    <p className="contact-bl-desc contact-location-desc">
                        Established fact that a reader will be distracted by the readable content
                        of a page when looking a layout. The point of using.
                    </p>
                    <div className="contact-address d-f">
                        <div className="contact-address-item d-f">
                            <div><img src="/images/location.png" alt="location" /></div>
                            <dl>
                                <dt>New York, USA:</dt>
                                <dd>
                                    299 Park Avenue New York, <br />
                                    New York 10171
                                </dd>
                            </dl>
                        </div>
                        <div className="contact-address-item d-f">
                            <div><img src="/images/location.png" alt="location" /></div>
                            <dl>
                                <dt>London, UK:</dt>
                                <dd>
                                    30 Stamford Street, <br />
                                    London SE1 9LQ
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <form action="" className='contact-message-fm'>
                <div className="input-box d-f">
                    <div className="input-bl d-f">
                        <div>
                            <label htmlFor="msgAuthor">Full Name*</label>
                            <input type="text" name='msgAuthor' id='msgAuthor' placeholder='Your Full Name' />
                        </div>
                        <div>
                            <label htmlFor="msgEmail">Your Email*</label>
                            <input type="email" name="msgEmail" id="msgEmail" placeholder='example@yourmail.com' />
                        </div>
                    </div>
                    <div className="input-bl d-f">
                        <div>
                            <label htmlFor="msgCompany">Company*</label>
                            <input type="text" name='msgCompany' id='msgCompany' placeholder='yourcompany name here' />
                        </div>
                        <div>
                            <label htmlFor="msgSubject">Subject*</label>
                            <input type="text" name='msgSubject' id='msgSubject' placeholder='how can we help' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="msgText">Message*</label>
                        <textarea name="msgText" id="msgText" placeholder='Hello there, I would like to talk about how to...'>
                        </textarea>
                    </div>
                </div>
                <button type="button">Send Message</button>
            </form>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default Contact