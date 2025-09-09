import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'

function page() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
      </div>
      <Footer />
    </>
  )
}

export default page
