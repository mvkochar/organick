import React from 'react'
import './css/Services.css'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <>
            <main className='services-main'>
                <h1 className="services-title">Services</h1>
            </main>
            <section className='services-better'>
                <div className="services-bl-above" style={{ textAlign: 'center' }}>What we Grow</div>
                <h2 className="services-bl-title" style={{ textAlign: 'center' }}>Better Agriculture for <br /> Better Future</h2>
                <div className="services-better-content d-f jc-sb align-center">
                    <div className="services-better-points d-f">
                        <dl>
                            <Link to={`/nf`}><img src="/images/better-icon1.svg" alt="better-icon1" /> </Link>
                            <dt>Dairy Products</dt>
                            <dd>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                                accusantium doloremqlaudantium. Sed ut perspiciatis
                            </dd>
                        </dl>
                        <dl>
                            <Link to={`/service/1`}><img src="/images/better-icon2.svg" alt="better-icon2" /></Link>
                            <dt>Store Services</dt>
                            <dd>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                                accusantium doloremqlaudantium. Sed ut perspiciatis
                            </dd>
                        </dl>
                        <dl>
                            <Link to={`/nf`}><img src="/images/better-icon3.svg" alt="better-icon3" /></Link>
                            <dt>Delivery Services</dt>
                            <dd>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                                accusantium doloremqlaudantium. Sed ut perspiciatis
                            </dd>
                        </dl>
                    </div>
                    <div><img src="/images/services-better.png" alt="services-better" /></div>
                    <div className="services-better-points d-f">
                        <dl>
                            <Link to={`/nf`}><img src="/images/better-icon4.svg" alt="better-icon1" /></Link>
                            <dt>Agricultural Services</dt>
                            <dd>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                                accusantium doloremqlaudantium. Sed ut perspiciatis
                            </dd>
                        </dl>
                        <dl>
                            <Link to={`/nf`}><img src="/images/better-icon5.svg" alt="better-icon2" /></Link>
                            <dt>Organic Products</dt>
                            <dd>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                                accusantium doloremqlaudantium. Sed ut perspiciatis
                            </dd>
                        </dl>
                        <dl>
                            <Link to={`/nf`}><img src="/images/better-icon6.svg" alt="better-icon3" /> </Link>
                            <dt>Fresh Vegetables</dt>
                            <dd>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                                accusantium doloremqlaudantium. Sed ut perspiciatis
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="action-wr d-f jc-sb align-center action-wr__transparent">
                    <div className="action-text">Explore More</div>
                    <a><img src="/images/arrow.png" alt="Arrow" /></a>
                </div>
            </section>
            <section className='services-videos'>
                <div className="services-bl-above" style={{ textAlign: 'center' }}>Organic Only</div>
                <h2 className="services-bl-title" style={{ textAlign: 'center' }}>Everyday Fresh & Clean</h2>
                <p className="services-videos-desc">
                    Simply dummy text of the printing and typesetting industry. Lorem had
                    ceased to been the industry's standard dummy text ever since the
                </p>
                <div style={{ width: "fit-content", margin: "0 auto" }}>
                    <img src="/images/video-icon.png" alt="video-icon" />
                </div>
            </section>
            <div style={{ marginBottom: "140px" }}></div>

        </>
    )
}

export default Services