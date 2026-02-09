import React from 'react'
import Hero from '../components/interior-designing/Hero'
import ChooseUs from '../components/interior-designing/ChooseUs'
import Services from '../components/interior-designing/Services'
import WhyChooseUs from '../components/interior-designing/WhyChooseUs'
import Projects from '../components/interior-designing/Projects'
import ContactUs from '../components/interior-designing/ContactUs'
import ConstructionFooter from '../components/construction/ConstructionFooter'
import Footer from '../components/Footer'
import Testimonials from '../components/interior-designing/Testimonials'

function InteriorDesigning() {
  return (
    <div>
      <Hero />
      <ChooseUs />
      <Services />
      <WhyChooseUs />
      <Projects />
      <ContactUs />
      <Testimonials />
      <ConstructionFooter />
      <Footer />
    </div>
  )
}

export default InteriorDesigning
