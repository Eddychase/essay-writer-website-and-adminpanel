import React from 'react'
import './subscribe.css'
import { BsArrowRightCircle} from "react-icons/bs";

function Subscribe() {
  return (
    <div className='subscribe'>
        <div className="subscribe-heading">
            <h1>Subscribe to 
            <br/>
             our Newsletter
            </h1>
        </div>
        <div className="name-insert">
            <input type="text" className="subcribe-input" placeholder='Enter your email' />
                
                    <BsArrowRightCircle className="subscribe-icon"/>
                
        </div>
    </div>
  )
}

export default Subscribe