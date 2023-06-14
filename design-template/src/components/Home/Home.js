import React from 'react'
import About from '../About/About'
import Banner from '../banner/Banner'
import Features from '../Features/Features'
import Hero from '../Hero/Hero'
import Subscribe from '../subscribe/Subscribe'
import Footer from '../Footer/Footer'


function Home() {
  return (
    <div>
    <Hero/>
    <Banner/>
    <About/>
    <Features/>
    <Subscribe/>
    <Footer/>
    </div>
  )
}

export default Home