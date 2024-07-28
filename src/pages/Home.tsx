import React from 'react'
import './css/Home.css'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductsItem from '../components/ProductsItem/ProductsItem'

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
      <section className="home-about d-f align-center">
        <div><img src="/images/home-about.png" alt="home-about" /></div>
        <div>
          <div className="home-bl-above">About Us</div>
          <h2 className="home-bl-title">We Believe in Working <br /> Accredited Farmers</h2>
          <p className="home-about-desc">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to
            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
          </p>
          <div className="home-about-points d-f">
            <div className="about-points-item d-f">
              <div><img src="/images/points1.png" alt="points1" /></div>
              <div>
                <h4 className="points-item-title">Organic Foods Only</h4>
                <p className="points-item-desc">
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="about-points-item d-f">
              <div><img src="/images/points2.png" alt="points2" /></div>
              <div>
                <h4 className="points-item-title">Quality Standards</h4>
                <p className="points-item-desc">
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <div className="action-wr d-f jc-sb align-center action-wr__dark">
            <div className="action-text">Shop Now</div>
            <a><img src="/images/arrow.png" alt="Arrow" /></a>
          </div>
        </div>
      </section>
      <section className='home-products'>
        <div className="home-bl-above">Categories</div>
        <h2 className="home-bl-title">Our Products</h2>
        <div className="home-products-box d-f jc-sb">
          {
            ProductsList.map((product) => {
              return (
                <ProductsItem
                  id={product.id}
                  category={product.category}
                  image={product.image}
                  title={product.title}
                  isSale={product.isSale}
                  salePrice={product.salePrice}
                  price={product.price}
                  rating={product.rating}
                />
              )
            })
          }
        </div>
        <div className="action-wr d-f jc-sb align-center action-wr__dark">
          <div className="action-text">Load More</div>
          <button className='btn-clear d-b'><img src="/images/arrow.png" alt="Arrow" /></button>
        </div>
      </section>
      <section className='home-testimonial'>
        <div className="home-bl-above">Testimonial</div>
        <h2 className="home-testimonial-title">What Our Customer Saying?</h2>
        <div className='home-testimonial-img'><img src="/images/testimonial-author.png" alt="testimonial-author" /></div>
        <div className="home-testimonial-rating d-f">
          <div><img src="/images/star.png" alt="star" /></div>
          <div><img src="/images/star.png" alt="star" /></div>
          <div><img src="/images/star.png" alt="star" /></div>
          <div><img src="/images/star.png" alt="star" /></div>
          <div><img src="/images/star.png" alt="star" /></div>
        </div>
        <p className="home-testmonial-desc">
          Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy 
          text of the printing and typesetting industry. Lorem Ipsum has been.
        </p>
        <h5 className="testimonial-author-name">Sara Taylor</h5>
        <div className="testimonial-author-pos">Consumer</div>
        <div className="testimonial-navigation d-f">
          <button className='testimonial-navigation-btn'></button>
          <button className='testimonial-navigation-btn navigation-btn__active'></button>
          <button className='testimonial-navigation-btn'></button>
        </div>
      </section>
    </>
  )
}

export default Home