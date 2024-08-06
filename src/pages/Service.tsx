import React from 'react'
import './css/Service.css'
import Newsletter from '../components/Newsletter/Newsletter'


const Service = () => {
    return (
        <>
            <main className='service-main'>
                <h1 className="service-title">Quality Standard</h1>
            </main>
            <div className='service-img'><img src="/images/store.png" alt="store" /></div>
            <div className="service-content d-f">
                <div>
                    <h2 className="service-content-title">Organic Store Services</h2>
                    <p className="service-content-desc" style={{ marginTop: "28px" }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look
                        like readable English.
                    </p>
                    <p className="service-content-desc" style={{ marginTop: "30px" }}>
                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                        default model text, and auncover many web sites still in their infancy. Various
                        versions have evolved over the years
                    </p>
                </div>
                <div className="service-about d-f">
                    <div><img src="/images/service-about1.png" alt="service-about1" /></div>
                    <div className="service-about-text">
                        <h4 className="service-about-title">Why Organic</h4>
                        <p className="service-content-desc" style={{ marginTop: "7px" }}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors
                            now use Lorem Ipsum as their default model text, and auncover.
                        </p>
                    </div>
                </div>
                <div className="service-about d-f">
                    <div className="service-about-text">
                        <h4 className="service-about-title">Speciality Produce</h4>
                        <p className="service-content-desc" style={{ marginTop: "7px" }}>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors
                            now use Lorem Ipsum as their default model text, and auncover.
                        </p>
                    </div>
                    <div><img src="/images/service-about2.png" alt="service-about2" /></div>
                </div>
                <div>
                    <h4 className="service-farm-title">We farm your land</h4>
                    <p className="service-content-desc" style={{ marginTop: "11px" }}>
                        It is a long established fact that a reader will be distracted by the readable content 
                        of a page when looking a layout. The point of using Lorem Ipsum is that it 
                        has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
                        content here', making it look like readable English.
                    </p>
                </div>
                <div className="service-points d-f">
                    <div className="service-points-item d-f align-center">
                        <div className="points-item-num">01</div>
                        <div className="points-item-title">Best quality support</div>
                    </div>
                    <div className="service-points-item d-f align-center">
                        <div className="points-item-num">02</div>
                        <div className="points-item-title">Money back guarantee</div>
                    </div>
                </div>
            </div>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default Service