import React from 'react'
import Hero from '../components/real-estate/Hero'
import ChooseUs from '../components/real-estate/ChooseUs'
import Services from '../components/real-estate/Services'
import Projects from '../components/real-estate/Projects'
import ContactUs from '../components/real-estate/ContactUs'
import ConstructionFooter from '../components/construction/ConstructionFooter'
import Footer from '../components/Footer'
import Testimonials from '../components/real-estate/Testimonials'

function RealEstate() {
  return (
    <div>
      <Hero />
      <ChooseUs />
      <Services />
      <Projects />
      <ContactUs />
      <Testimonials />
      <ConstructionFooter />
      <Footer />
    </div>
  )
}

export default RealEstate
