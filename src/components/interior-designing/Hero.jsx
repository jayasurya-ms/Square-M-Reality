import React, {useState} from 'react'
import Navbar from '../Navbar'
import Location from './../../icon/Location';
import Phone from './../../icon/Phone';
import Globe from './../../icon/Globe';
import { motion } from "framer-motion";
import FormPopUp from '../FormPopUp'
import Form from '../../icon/Form';



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
                <div className='hero-mid1-div3 align-items-center justify-content-center pe-4 max-sm:fixed max-sm:-right-13 max-sm:top-1/2 max-sm:z-50'>
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
              <a href="https://www.google.com/maps/search/?api=1&query=Bangalore" target="_blank" className='flex justify-center items-center gap-1 text-black! no-underline!'><Location />Bangalore</a>
              <a href='tel:+917854213265' className='flex justify-center items-center gap-1 text-black! no-underline!'><Phone />1203654789</a>
            </div>
            <div className=''>
              <a href='mailto:squareM@gmail.com' className='flex justify-center items-center gap-1 text-black! no-underline!'><Globe />www.squaremreality.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
