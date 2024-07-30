import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-bar d-f jc-sb">
        <div className='footer-bl'>
          <h3 className="footer-bl-title">Contact Us</h3>
          <div className="footer-contacts d-f">
            <dl>
              <dt>Email</dt>
              <dd>needhelp@Organia.com</dd>
            </dl>
            <dl>
              <dt>Phone</dt>
              <dd>666 888 888</dd>
            </dl>
            <dl>
              <dt>Address</dt>
              <dd>88 road, borklyn street, USA</dd>
            </dl>
          </div>
        </div>
        <div className="footer-bl">
          <div className='footer-logo'><img src="/images/footer-logo.svg" alt="footer-logo" /></div>
          <p className="footer-desc">
            Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum simply dummy text of the printing
          </p>
          <div className="footer-social d-f">
            <div><img src="/images/footer-social1.png" alt="footer-social1" /></div>
            <div><img src="/images/footer-social2.png" alt="footer-social2" /></div>
            <div><img src="/images/footer-social3.png" alt="footer-social3" /></div>
            <div><img src="/images/footer-social4.png" alt="footer-social4" /></div>
          </div>
        </div>
        <div>
          <h3 className="footer-bl-title">Utility Pages</h3>
          <nav>
            <ul className="footer-nav">
              <li><a href="">Style Guide</a></li>
              <li><a href="">404 Not Found</a></li>
              <li><a href="">Password Protected</a></li>
              <li><a href="">Licences</a></li>
              <li><a href="">Changelog</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-rights">Copyright &copy; <span>Organick</span></div>
    </footer>
  )
}

export default Footer