import React, {useState} from 'react'
import '../style/Hero.css'
import Navbar from './Navbar'

import Globe from '../icon/Globe'
import Location from '../icon/Location'
import Phone from '../icon/Phone'
import Arrow from '../icon/Arrow'
import Play from '../icon/Play'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
import FormPopUp from './FormPopUp'
import Form from '../icon/Form'


const Hero = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div id='hero' className='d-flex align-items-center justify-content-center flex-column h-100 w-100 overflow-hidden'>
      <div className='hero-top z-10 relative'>
        <a href="https://www.google.com/maps/search/?api=1&query=Bangalore" target="_blank" className='hero-top1 p-2 m-2 d-flex mt-3 readex text-black! no-underline!'>
          <Location/>
          <p>Bangalore</p>
        </a>
        <a href='tel:+917897899957' className='hero-top2 p-2 m-2 d-flex mt-3 readex text-black! no-underline!'>
          <Phone/>
          <p>1203654789</p>
        </a>
        <a href='mailto:squareM@gmail.com' className='hero-top3 pt-2 m-2 d-flex mt-3 gap-2 readex text-black! no-underline!'>
          <Globe/>
          <p>www.squaremreality.com</p>
        </a>
      </div>

      <div className='hero-bg d-flex flex-column align-items-center justify-content-center'>
         <div className='hero-mid1 w-100 d-flex m-3 justify-content-between align-items-center'>
          <div className='hero-mid1-div1 h-100 ms-3'>
            <a href="/"><img src="src/assets/images/logo.png" alt="logo" className='md:h-18 md:w-18' /></a>
          </div>

          <motion.div
            className='hero-mid1-div2 h-100 readex overflow-hidden'
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.8, delay: 0.3}}
            >
            <Navbar />
          </motion.div>

          <div className='hero-mid1-div3 xl:h-100 align-items-center justify-content-center pe-4 max-sm:fixed max-sm:-right-13 max-sm:top-1/2 max-sm:z-50 '>
            <button 
              onClick={() => setIsPopupVisible(true)} 
              className='group relative flex items-center justify-center p-2 ps-4 pe-4 rounded-full! border-0 bg-[#f59e0b] text-black transition-all duration-300 ease-in-out 
                         max-sm:w-20 max-sm:hover:w-44 max-sm:h-12 max-sm:ps-4
                         md:p-2 md:pe-4 md:ps-4 readex btn-bg-clr'
            >
              {/* Text logic: Hidden partly on mobile, fully visible on hover/desktop */}
              <span className='whitespace-nowrap transition-all duration-300 max-sm:opacity-0 max-sm:group-hover:opacity-100'>
                Get In Touch
              </span>

              {/* Optional: Add an icon or just leave the text to peek out */}
              <div className='absolute left-3 max-sm:block hidden group-hover:hidden'>
                 {/* You can put an icon here that shows when the button is closed */}
                 <Form />
              </div>
            </button>

            <FormPopUp 
              isOpen={isPopupVisible} 
              onClose={() => setIsPopupVisible(false)} 
            />
          </div>
         </div>

         <div className='hero-mid2 ms-5 ps-4 pointer-events-none'>
          <div className='text-white rasa pointer-events-none'>
            Shaping Future <br /> Through <br /> Excellence
          </div>
         </div>

         <div className='hero-mid3 ps-5 m-3'>
          <p className='text-white readex'>We deliver end-to-end solutions in construction, interior design, and real estate crafted with precision, innovation, and timeless aesthetics.</p>
         </div>

         <div className='hero-mid4 d-flex align-items-center ms-5 ps-3'>
          <a href='#services-section' className='w-56! d-flex rounded-pill border-0 p-2 pe-4 ps-4 align-items-center justify-content-center gap-2 readex '>
            <div>View all Services</div>
            <div className='hero-mid4-arrow rounded-circle d-flex p-1 justify-content-center'>
              <Arrow size={23}/>
            </div>
           </a> 
         </div>

         <div className='hero-mid5 d-flex align-items-center ms-5'>
          <div className='h-50 d-flex justify-content-between align-items-center'>
            <div className='hero-mid5-t h-100 text-white fw-bold d-flex align-items-center justify-content-center gap-4'>
              <div className='fs-45 ms-4 d-flex '>
                <div className='w-100 h-100'>
                  <div className='hero-mid5-circle position-absolute'></div>
                  <div className='hero-mid-40 position-relative readex'>40</div>
                </div>
              </div>
              <div className='hline'></div>
              <div className='fs-5 readex'>Years of <br /> Experience</div>
            </div>
            <div className='hero-mid5-w'>
              <button className='watch-now readex p-1 ps-4 pe-4 border-0 rounded-pill flex flex-col justify-center items-center gap-0 '><Play/> Watch Now</button>
            </div>
          </div>
         </div>
      </div>
      <div className='w-100 bg-transparent p-4'></div>
    </div>
  )
}

export default Hero