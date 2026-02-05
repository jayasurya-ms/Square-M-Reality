import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import ChooseUs from '../components/ChooseUs';
import Projects from '../components/Projects';
import TestimonialsForm from '../components/TestimonialsForm';
import TestimonialsReview from '../components/TestimonialsReview';
import HomeFooter from '../components/HomeFooter';
import Footer from '../components/Footer';


function Home() {
  return (
    <div>
        <Hero />
        <AboutUs/>
        <Services />
        <ChooseUs/>
        <Projects/>
        <TestimonialsForm />
        <TestimonialsReview />
        <HomeFooter />
        <Footer/>
    </div>
  )
}

export default Home
