import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

type HeaderProps = {
  productsCount: number
}

const Header = ({productsCount}:HeaderProps) => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div className='d-f align-center'>
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
          <ul className="header-nav d-f">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/blog">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className='header-actions d-f align-center'>
        <form action="" className='header-search-fm d-f jc-sb align-center'>
          <input type="text" name='searchQuery' />
          <button type="button" className='btn-clear d-b'><img src="/images/search.png" alt="Search" /></button>
        </form>
        <div className="header-cart d-f jc-sb align-center">
           <div><img src="/images/cart.png" alt="Cart icon" /></div>
           <a href="" className="header-cart-link">Cart ({productsCount})</a>
        </div>
      </div>
    </header>
  )
}

export default Header