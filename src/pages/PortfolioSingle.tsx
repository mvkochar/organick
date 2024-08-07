import React from 'react'
import './css/PortfolioSingle.css'
import Newsletter from '../components/Newsletter/Newsletter'

const PortfolioSingle = () => {
    return (
        <>
            <main className="portofolio-single-main">
                <div><img src="/images/portfolio-single-main.png" alt="portfolio-single-main" /></div>
            </main>
            <div className="portfolio-single-info d-f">
                <div className='portfolio-single-text'>
                    <h1 className="portfolio-single-title">Black Raspberry</h1>
                    <p className="portfolio-single-desc">
                        Established fact that a reader will be distracted by the readable
                        content of a page when looking a layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal distribution of letters, as opposed
                    </p>
                </div>
                <div className="portfolio-single-details">
                    <table>
                        <tr>
                            <td>Date <span>:</span></td>
                            <td>December 4, 2022</td>
                        </tr>
                        <tr>
                            <td>Client <span>:</span></td>
                            <td>Kevin Martin</td>
                        </tr>
                        <tr>
                            <td>Category <span>:</span></td>
                            <td>Agriculture , Eco</td>
                        </tr>
                        <tr>
                            <td>Service <span>:</span></td>
                            <td>Organic Products</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="portfolio-single-content">
                <h4 className="content-bl-title">About The Farm:</h4>
                <p className="content-bl-desc">
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking a layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English.
                </p>
                <p className="content-bl-desc" style={{ marginTop: "30px" }}>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text, and auncover many web sites still in their infancy.
                    Various versions have evolved over the years
                </p>
                <div className="portfolio-single-img">
                    <img src="/images/farm.png" alt="farm" />
                    <div className="img-label">The Organic Products</div>
                </div>
                <h4 className="content-bl-title">How To Farm:</h4>
                <p className="content-bl-desc">
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking a layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English.
                </p>
                <p className="content-bl-desc" style={{ marginTop: "30px", marginBottom: "30px" }}>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text, and auncover many web sites still in their infancy.
                    Various versions have evolved over the years
                </p>
                <h4 className="content-bl-title">Conclusion:</h4>
                <p className="content-bl-desc">
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking a layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English.
                </p>
                <p className="content-bl-desc" style={{ marginTop: "30px" }}>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text, and auncover many web sites still in their infancy.
                    Various versions have evolved over the years
                </p>
            </div>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default PortfolioSingle