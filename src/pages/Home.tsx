import React from 'react'
import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <div className="home-bl-above">100% Natural Food</div>
        <h1 className="home-bl-title">Choose the best <br /> healthier way <br /> of life</h1>
        <div className="action-wr d-f jc-sb align-center action-wr__light">
          <div className="action-text">Explore Now</div>
          <a><img src="/images/arrow.png" alt="Arrow" /></a>
        </div>
      </main>
      <div className="home-banner d-f">
        <div className="home-natural">
          <div className="home-bl-above">Natural!!</div>
          <h2 className="home-natural-title">Get Garden <br /> Fresh Fruits</h2>
        </div>
        <div className="home-offer">
          <div className="home-bl-above">Offer!!</div>
          <h2 className="home-offer-title">Get 10% off <br /> on Vegetabless</h2>
        </div>
      </div>
    </>
  )
}

export default Home