import React from 'react'
import './css/PortfolioSingle.css'
import Newsletter from '../components/Newsletter/Newsletter'

const PortfolioSingle = () => {
    return (
        <>
            <main className="portofolio-single-main">
                <div><img src="/images/portfolio-single-main.png" alt="portfolio-single-main" /></div>
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
                <Newsletter />
                <div style={{ marginBottom: "120px" }}></div>
            </main>
        </>
    )
}

export default PortfolioSingle