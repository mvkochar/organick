import React from 'react'
import classes from './Newsletter.module.css'


const Newsletter = () => {
  return (
    <div className={classes.newsletter}>
        <h2 className={classes.newsletter_title}>Subscribe to <br /> our Newsletter</h2>
        <form action="" className={classes.newsletter_fm}>
            <input type="email" name='subscribeEmail' placeholder='Your Email Address' />
            <button type="button">Subscribe</button>
        </form>
    </div>
  )
}

export default Newsletter