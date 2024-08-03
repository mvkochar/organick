import React from 'react'
import './css/NotFound.css'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <main className='nf-main'>
                <div className='nf-main-content'>
                    <div><img src="/images/404.png" alt="Not Found" /></div>
                    <h1 className="nf-title">Page not found</h1>
                    <h4 className="nf-subtitle">The page you are looking for doesn't exist or has been moved</h4>
                    <div className="action-wr d-f jc-sb align-center action-wr__dark">
                        <div className="action-text">Go to Homepage</div>
                        <Link to="/"><img src="/images/arrow.png" alt="Arrow" /></Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NotFound