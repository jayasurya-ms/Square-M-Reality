import React from 'react'
import Hero from '../components/construction/Hero'
import AboutUs from '../components/construction/AboutUs'
import Services from '../components/Services'
import ChooseUs from '../components/construction/ChooseUs'
import Projects from '../components/Projects'
import Contact from '../components/construction/Contact'
import TestimonialsReview from '../components/TestimonialsReview'
import ConstructionFooter from '../components/construction/ConstructionFooter'
import Footer from '../components/Footer'

function Construction() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <ChooseUs />
      <Projects />
      <Contact />
      <TestimonialsReview />
      <ConstructionFooter />
      <Footer />
    </div>
  )
}

export default Construction
