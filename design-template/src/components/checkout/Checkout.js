import React, { useState } from 'react'
import './checkout.css'
import IntaSend from "https://cdn.skypack.dev/intasend-inlinejs-sdk@3.0.2";

function Checkout() {

  // Replace with your public key
  const PUBLIC_KEY = "ISPubKey_test_91ffc81a-8ac4-419e-8008-7091caa8d73f";

    let instance = new IntaSend({
      publicAPIKey: PUBLIC_KEY,
      live: false // Set to true when going live
    });

    const handleClick = () => {
      instance
        .run({ amount: 10, currency: "KES", api_ref: "ORDER-NUMBER-OR-USER-ID" })
        .on("COMPLETE", (response)=>{console.log("COMPLETE:", response)})
        .on("FAILED", (response)=>{console.log("FAILED:", response)})
    }
  return (
    
    <div className="App">
      <header className="App-header">
      <button onClick={handleClick} className="btn intasend-btn">
        Pay now KES 10
      </button>
      </header>
    </div>
 );
}


export default Checkout