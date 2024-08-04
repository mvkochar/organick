import React from 'react'
import './css/Protect.css'
import Newsletter from '../components/Newsletter/Newsletter'

const Protect = () => {
    return (
        <>
            <main className='protect-main'>
                <h1 className="protect-title">Protected Page</h1>
            </main>
            <div className="protect-password d-f jc-sb align-center">
                <div><img src="/images/protect.png" alt="Protect" /></div>
                <form action="" className="protect-password-fm">
                    <label htmlFor="userPwd">Password</label>
                    <input type="password" name="userPwd" id="userPwd" placeholder='Enter Your Password' />
                    <div className="action-wr d-f jc-sb align-center action-wr__dark">
                        <div className="action-text">Send Now</div>
                        <button className='btn-clear d-b'> 
                            <img src="/images/arrow.png" alt="Arrow" />
                        </button>
                    </div>
                </form>
            </div>
            <Newsletter />
            <div style={{ marginBottom: "120px" }}></div>
        </>
    )
}

export default Protect