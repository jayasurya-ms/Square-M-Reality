import React from 'react'
import '../style/Hero.css'
import Navbar from './Navbar'

import Globe from '../icon/Globe'
import Location from '../icon/location'
import Phone from '../icon/Phone'
import Arrow from '../icon/Arrow'
import Play from '../icon/Play'

function Hero() {
  return (
    <div id='hero' className='d-flex align-items-center justify-content-center flex-column h-100 w-100'>
      <div className='hero-top'>
        <div className='hero-top1 p-2 m-2 d-flex mt-3 readex'>
          <Location/>
          <p>Bangalore</p>
        </div>
        <div className='hero-top2 p-2 m-2 d-flex mt-3 readex'>
          <Phone/>
          <p>1203654789</p>
        </div>
        <div className='hero-top3 p-2 m-2 d-flex mt-3 gap-2 readex'>
          <Globe/>
          <p>www.squaremreality.com</p>
        </div>
      </div>

      <div className='hero-bg d-flex flex-column align-items-center justify-content-center'>
         <div className='hero-mid1 w-100 d-flex m-3 justify-content-between align-items-center'>
          <div className='hero-mid1-div1 h-100 '>
            <img src="src/assets/images/logo.png" alt="logo" className='h-100 w-100' />
          </div>

          <div className='hero-mid1-div2 h-100 readex'>
            <Navbar />
          </div>

          <div className='hero-mid1-div3 h-100 align-items-center justify-content-center pe-4'>
            <a href='' className='rounded-pill border-0 p-2 pe-4 ps-4 readex'> Get In Touch </a>
          </div>
         </div>

         <div className='hero-mid2 ms-5 ps-4'>
          <div className='text-white rasa'>
            Shaping Future <br /> Through <br /> Excellence
          </div>
         </div>

         <div className='hero-mid3 ps-5 m-3'>
          <p className='text-white readex'>We deliver end-to-end solutions in construction, interior design, and real estate crafted with precision, innovation, and timeless aesthetics.</p>
         </div>

         <div className='hero-mid4 d-flex align-items-center ms-5 ps-3'>
          <a href='' className='d-flex rounded-pill border-0 p-2 pe-4 ps-4 align-items-center justify-content-center gap-2 readex'>
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
              <button className='watch-now readex p-1 ps-4 pe-4 border-0 rounded-pill flex flex-col justify-center items-center gap-0 '><Play/> <br /> Watch Now</button>
            </div>
          </div>
         </div>
      </div>
      <div className='w-100 bg-transparent p-4'></div>
    </div>
  )
}

export default Hero