import React from 'react'
import './banner.css'

function Banner() {
  return (
    <div className='banner-container'>
        <div className="banner">
            <div className="banner-start">
                <h1>18+</h1>
                <h2>YEARS IN OPERATION</h2>
            </div>
            <div className="banner-middle">
                <div className="middle-start">
                    <h1>1M</h1>
                    <h2>HAPPY CUSTOMERS</h2>
                </div>
                <div className="middle-end">
                    <h2>VIEW</h2>
                    <div class="progress"></div>
                </div>
            </div>
            <div className="banner-end">
                <h1>95M</h1>
                <h2>INTERNATIONAL STORE</h2>
            </div>
        </div>
    </div>
  )
}

export default Banner