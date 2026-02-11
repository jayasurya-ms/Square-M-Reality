import React, {useState} from 'react'
import Navbar from '../Navbar'
import Location from './../../icon/Location';
import Phone from './../../icon/Phone';
import Globe from './../../icon/Globe';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import FormPopUp from '../FormPopUp'



const Hero = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  

  return (
    <div id='i-hero-section' className='bg-[#ECBA89] xl:h-256 w-full max-sm:h-150'>
      <div className='size-full bg-[url(src/assets/images/i-hero.png)] xl:bg-cover xl:bg-center md:bg-cover max-sm:bg-left max-sm:bg-no-repeat flex flex-col justify-between'>
        <div className=' flex flex-col items-center justify-center '>
            <div className='w-full xl:w-[98%] flex justify-between items-center max-sm:bg-[#ECBA89] p-2'>
                <div>
                    <a href="/"><img src="src/assets/images/logo.png" alt="logo" className='h-17.5 w-17.5'/></a>
                </div>
                <div className='h-full xl:w-290'>
                    <Navbar />
                </div>
                <div className='h-full w-56 flex justify-center items-center max-sm:hidden md:hidden xl:flex'>
                    <button onClick={() => setIsPopupVisible(true)} className='rounded-pill border-0 p-2 pe-4 ps-4 readex btn-bg-clr'> Get In Touch  </button>
                    {/* The Component Call */}
                    <FormPopUp 
                      isOpen={isPopupVisible} 
                      onClose={() => setIsPopupVisible(false)} 
                    />                
                </div>
            </div> 
            <div className=' h-120 xl:w-[90%] md:w-[90%] max-sm:w-full'>
              <div className=' xl:w-[55%] md:w-[70%] h-[90%] flex flex-col inter xl:text-[90px] max-sm:text-[40px] md:text-[60px] max-sm:mt-6! max-sm:ms-10! font-bold p-1 xl:blur-[3px] max-sm:blur-[1px] md:blur-[2px] text-black!'>
                <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className=''>
                  We Design
                </motion.div> {/* 1 */}
                <span className='flex justify-between w-[90%]'> {/* 2 */}
                  <motion.div 
                  initial={{ opacity: 0, x: -200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  >
                    The
                  </motion.div>
                  <motion.div 
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  >
                    Feeling
                  </motion.div>
                </span>
                <motion.div 
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className='flex justify-end'> {/* 3 */}
                  <span className=''>Of You</span>
                </motion.div>
              </div>
            </div>
        </div>
        <div className=' h-30 flex justify-end w-[95%]'>
          <div className=' h-[70%] flex flex-col xl:text-[20px] readex gap-2 max-sm:hidden text-black'>
            <div className=' flex items-center justify-between gap-2'>
              <span className='flex justify-center items-center gap-1'><Location />Bangalore</span>
              <span className='flex justify-center items-center gap-1'><Phone />1203654789</span>
            </div>
            <div className=''>
              <span className='flex justify-center items-center gap-1'><Globe />www.squaremreality.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
