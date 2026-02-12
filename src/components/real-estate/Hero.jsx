import React, {useState} from 'react'
import Navbar from '../Navbar'
import Phone from '../../icon/Phone'
import Location from '../../icon/Location'
import Play from '../../icon/Play'
import FormPopUp from '../FormPopUp'
import {motion} from 'framer-motion'
import Form from '../../icon/Form'

const Hero = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div id='r-hero-section' className='h-screen w-full overflow-hidden'>
      <div className='size-full flex flex-col justify-between bg-[url(/src/assets/images/r-hero.png)] bg-cover bg-center bg-no-repeat relative'>
      <div className='absolute inset-0 bg-black/30 z-0'></div>

      {/* top */}
        <motion.div
        className=' w-full flex justify-between bg-[#5a 758c] p-3 z-10'
        initial={{opacity: 0, y: -100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        >
            <div className=''>
                <a href="/"><img src="/src/assets/images/logo.png" alt="logo" className='h-18.5 w-18.5'/></a>
            </div>
            <div className='bg-primay w-[80%] z-10'>
                <Navbar />
            </div>
            <div className='hero-mid1-div3 align-items-center justify-content-center pe-4 max-sm:fixed max-sm:-right-13 max-sm:top-80 max-sm:z-50'>
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
        </motion.div>

        {/* mid */}
        <div className='text-white rasa text-[40px] md:text-[60px] xl:text-[80px] font-bold flex justify-center items-center z-1'>
            <div className='flex flex-col'>
                <motion.div
                initial={{opacity: 0, x: '-50%'}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                >
                    Unlocking
                </motion.div>
                <motion.div
                initial={{opacity: 0,}}
                animate={{opacity: 1,}}
                transition={{duration: 0.6, delay: 0.5}}
                >
                    New
                </motion.div>
                <motion.div
                initial={{opacity: 0, x: '50%'}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.6, delay: 0.4}}
                >
                    Beginnings
                </motion.div>
            </div>
        </div>

        {/* bot */}
        <motion.div 
        className=' flex z-1 p-2'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        >
            <div className='p-2 text-white'>
                <a href='tel:+917854213265' className='flex text-white no-underline!'><Phone color={'white'}/> 1203654789</a>
                <a href="https://www.google.com/maps/search/?api=1&query=Bangalore" target="_blank" className='flex text-white no-underline!'><Location color={'white'}/> Bangalore</a>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
