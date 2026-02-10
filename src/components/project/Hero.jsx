import React from 'react'
import Navbar from '../Navbar'
import Projects from './Projects'
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <div id='p-hero-section' className='min-h-screen w-full flex'>
      <div className='p-hero relative size-full flex flex-col'>
        <div className='absolute bg-[url(/src/assets/images/p-hero.png)] size-full bg-cover bg-no-repeat bg-center flex -z-1'></div>
        <div className='h-22  w-full flex justify-between items-center p-4! mt-2'>
          <div className=''>
            <img src="/src/assets/images/logo.png" alt="logo" className='h-17.5 w-17.5'/>
          </div>
          <div className='h-full xl:w-290'>
            <Navbar />
          </div>
          <div className='h-full w-56 xl:flex justify-center items-center hidden'>
            <Link to="" className='flex justify-center items-center btn-bg-clr w-39 h-12.5 gap-1 rounded-full no-underline! readex text-black! '>Get In Touch </Link>
          </div>
        </div>
    
        <div className='size-full flex justify-center items-center xl:mt-20! xl:mb-20!'>
          <div className='flex flex-col xl:w-[50%] w-[90%] justify-center items-center'>
            <div className=' text-center'>
              <span className='text-white xl:text-[80px] text-[40px] rasa'>Shaping Future <br />Through Excellence</span>
            </div>
            <div className=' text-center xl:w-[60%] w-full md:w-[70%]'>
              <span className='text-white'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой</span>
            </div>
          </div>
        </div>

        <div className='xl:h-400 w-full flex justify-center items-center overflow-hidden md:h-160 max-sm:pt-10! max-sm:pb-10!'>
          <div className=' size-[80%] flex'>
            <Projects />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
