import React from 'react'
import './css/Portfolio.css'
import Newsletter from '../components/Newsletter/Newsletter'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <>
            <main className='portfolio-main'>
                <h1 className="portfolio-title">Portfolio Standart</h1>
            </main>
            <div className="portfolio-content d-f jc-sb">
                <div className="portfolio-item">
                    <div><img src="/images/portfolio/1.png" alt="portfolio1" /></div>
                    <h4 className="portfolio-item-title">Green & Tasty Lemon</h4>
                    <div className="portfolio-item-category">Fruits</div>
                    <div className="portfolio-item-hover">
                        <Link to={`/nf`}><img src="/images/arrow-left.png" alt="arrow-left" /></Link>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div><img src="/images/portfolio/2.png" alt="portfolio1" /></div>
                    <h4 className="portfolio-item-title">Organic Carrot</h4>
                    <div className="portfolio-item-category">Fruits</div>
                    <div className="portfolio-item-hover">
                        <Link to={`/nf`}><img src="/images/arrow-left.png" alt="arrow-left" /></Link>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div><img src="/images/portfolio/3.png" alt="portfolio3" /></div>
                    <h4 className="portfolio-item-title">Organic Betel Leaf</h4>
                    <div className="portfolio-item-category">Fruits</div>
                    <div className="portfolio-item-hover">
                        <Link to={`/nf`}><img src="/images/arrow-left.png" alt="arrow-left" /></Link>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div><img src="/images/portfolio/4.png" alt="portfolio4" /></div>
                    <h4 className="portfolio-item-title">Natural Tommato</h4>
                    <div className="portfolio-item-category">Fruits</div>
                    <div className="portfolio-item-hover">
                        <Link to={`/nf`}><img src="/images/arrow-left.png" alt="arrow-left" /></Link>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div><img src="/images/portfolio/5.png" alt="portfolio5" /></div>
                    <h4 className="portfolio-item-title">Black Raspberry</h4>
                    <div className="portfolio-item-category">Fruits</div>
                    <div className="portfolio-item-hover">
                        <Link to={`/portfolio-single/4`}><img src="/images/arrow-left.png" alt="arrow-left" /></Link>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div><img src="/images/portfolio/6.png" alt="portfolio6" /></div>
                    <h4 className="portfolio-item-title">Honey Orange</h4>
                    <div className="portfolio-item-category">Fruits</div>
                    <div className="portfolio-item-hover">
                        <Link to={`/nf`}><img src="/images/arrow-left.png" alt="arrow-left" /></Link>
                    </div>
                </div>
            </div>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default Portfolio