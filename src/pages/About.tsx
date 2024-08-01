import React from 'react'
import './css/About.css'
import TeamMembersList from '../components/TeamMembersList/TeamMembersList'
import TeamMember from '../components/TeamMember/TeamMember'
import Newsletter from '../components/Newsletter/Newsletter'

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
                    <div className="about-creative-points d-f">
                        <div className="creative-points-item">Modern Agriculture <br /> Equipment</div>
                        <div className="creative-points-item">No growth <br /> hormones are used</div>
                    </div>
                    <div className="action-wr d-f jc-sb align-center action-wr__dark">
                        <div className="action-text">Explore More</div>
                        <a><img src="/images/arrow.png" alt="Arrow" /></a>
                    </div>
                </div>
            </section>
            <section className='about-choose'>
                <div className="about-choose-content d-f jc-sb">
                    <div>
                        <div className="about-bl-above">Why Choose us?</div>
                        <h2 className="about-bl-title">We do not buy from the <br /> open market & traders.</h2>
                        <p className="about-choose-desc">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been
                            the industry's standard  the 1500s, when an unknown
                        </p>
                        <div className="about-choose-points d-f">
                            <dl>
                                <dt>100% Natural Product</dt>
                                <dd>Simply dummy text of the printing and typesetting industry Lorem Ipsum</dd>
                            </dl>
                            <dl>
                                <dt>Increases resistance</dt>
                                <dd>
                                    Filling, and temptingly healthy, our Biona Organic
                                    Granola with Wild Berries is just the thing
                                </dd>
                            </dl>
                        </div>
                    </div>
                    <div><img src="/images/about-choose.png" alt="about-choose" /></div>
                </div>
                <div className="about-choose-advantages d-f jc-sb">
                    <div className="choose-advantages-item">
                        <div><img src="/images/advantage-icon1.png" alt="advantage-icon1" /></div>
                        <h4 className="advantages-item-title">Return Policy</h4>
                        <p className="advantages-item-desc">
                            Simply dummy text of the printing and typesetting industry
                        </p>
                    </div>
                    <div className="choose-advantages-item">
                        <div><img src="/images/advantage-icon2.png" alt="advantage-icon2" /></div>
                        <h4 className="advantages-item-title">100% Fresh</h4>
                        <p className="advantages-item-desc">
                            Simply dummy text of the printing and typesetting industry
                        </p>
                    </div>
                    <div className="choose-advantages-item">
                        <div><img src="/images/advantage-icon3.png" alt="advantage-icon3" /></div>
                        <h4 className="advantages-item-title">Support 24/7</h4>
                        <p className="advantages-item-desc">
                            Simply dummy text of the printing and typesetting industry
                        </p>
                    </div>
                    <div className="choose-advantages-item">
                        <div><img src="/images/advantage-icon4.png" alt="advantage-icon4" /></div>
                        <h4 className="advantages-item-title">Secured Payment</h4>
                        <p className="advantages-item-desc">
                            Simply dummy text of the printing and typesetting industry
                        </p>
                    </div>
                </div>
            </section>
            <section className='about-team'>
                <div className="about-bl-above" style={{ textAlign: 'center' }}>Team</div>
                <h2 className="about-bl-title" style={{ textAlign: 'center' }}>Our Organic Experts</h2>
                <p className="about-team-desc">
                    Simply dummy text of the printing and typesetting industry. Lorem had ceased
                    to been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley.
                </p>
                <div className="about-team-box d-f jc-sb">
                    {
                        TeamMembersList.filter((elem) => elem.id < 3).map((member) => {
                            return (
                                <TeamMember
                                    id={member.id}
                                    image={member.image}
                                    memberName={member.memberName}
                                    memberPos={member.memberPos}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className='about-offer'>
                <div className="about-bl-above" style={{ textAlign: 'center' }}>About Us</div>
                <h2 className="about-bl-title" style={{ textAlign: 'center', color: '#fff' }}>What We Offer for You</h2>
                <div className="about-offer-box d-f jc-sb">
                    <div>
                        <div><img src="/images/about-offer1.png" alt="about-offer1" /></div>
                        <h4 className="about-offer-title">Spicy</h4>
                    </div>
                    <div>
                        <div><img src="/images/about-offer2.png" alt="about-offer2" /></div>
                        <h4 className="about-offer-title">Nuts & Feesd</h4>
                    </div>
                    <div>
                        <div><img src="/images/about-offer3.png" alt="about-offer3" /></div>
                        <h4 className="about-offer-title">Fruits</h4>
                    </div>
                    <div>
                        <div><img src="/images/about-offer4.png" alt="about-offer4" /></div>
                        <h4 className="about-offer-title">Vegetable</h4>
                    </div>
                </div>
            </section>
            <Newsletter/>
            <div style={{ marginBottom: "202px" }}></div>
        </>
    )
}

export default About