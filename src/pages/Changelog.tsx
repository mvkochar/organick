import React from 'react'
import './css/Changelog.css'
import Newsletter from '../components/Newsletter/Newsletter'

const Changelog = () => {
  return (
    <>
      <main className='changelog-main'>
          <h1 className="changelog-title">Changelog</h1>
      </main>
      <div className="changelog-relese d-f jc-sb align-center">
          <div><img src="/images/relese.png" alt="relese" /></div>
          <div className='changelog-relese-caption d-f align-center'>
            <h3 className="changelog-relese-title">V.1</h3>
            <div className="changelog-relese-desc">Initial Organick Webflow Template Release</div>
          </div>
      </div>
      <Newsletter />
      <div style={{ marginBottom: "120px" }}></div>
    </>
  )
}

export default Changelog