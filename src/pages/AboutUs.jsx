import React from 'react'
import Hero from '../components/about/Hero'
import Aboutus from '../components/about/Aboutus'
import ConstructionFooter from './../components/construction/ConstructionFooter';
import Footer from '../components/Footer'
import HowWeWork from '../components/about/HowWeWork';
import VisionMission from '../components/about/VisionMission';
import OurTeam from '../components/about/OurTeam';
import Faqs from '../components/about/Faqs';

function AboutUs() {
  return (
    <div>
      <Hero />
      <Aboutus />
      <HowWeWork />
      <OurTeam />
      <VisionMission />
      <Faqs />
      <ConstructionFooter />
      <Footer />
    </div>
  )
}

export default AboutUs
