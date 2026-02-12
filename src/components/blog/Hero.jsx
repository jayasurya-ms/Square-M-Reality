import React, {useState} from 'react'
import Navbar from '../Navbar'
import Form from '../../icon/Form'
import { motion } from 'framer-motion'
import Phone from '../../icon/Phone'
import Globe from '../../icon/Globe'
import FormPopUp from '../FormPopUp'

const Hero = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    

  return (
    <div id='b-hero-section' className='h-screen w-full bg-pink-600 overflow-hidden'>
      <div className='size-full relative overflow-hidden bg-lime-500 flex flex-col justify-between items-center'>
        <div className='absolute size-full bg-[url(/src/assets/images/blog-hero.jpg)] bg-cover bg-top bg-no-repeat overflow-hidden -z-1'></div>
        <motion.div
        className='bg-amber-600 w-full flex justify-between pt-2'
        initial={{opacity: 0, y: -100}}
        animate={{ opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.1}}
        >
            <div className='bg-white flex xl:w-1/12 justify-center'>
                <img src="/src/assets/images/logo.png" alt="Logo" className='h-17.5 w-17.5'/>
            </div>
            <div className='bg-cyan-400 xl:w-9/12'>
                <Navbar />
            </div>
            <div className='hero-mid1-div3 align-items-center justify-content-center pe-4 max-sm:fixed max-sm:-right-13 max-sm:top-1/2 max-sm:z-50 '>
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
        <div className='bg-cyan-600 w-full flex justify-center'>
            <div className='bg-green-600'>
                <span className='rasa text-[50px] md:text-[80px] xl:text-[100px] text-white font-bold flex'>
                    <motion.div
                    initial={{opacity:0, x: '-100%'}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration:0.6, delay: 0.1}}
                    >
                        B
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y: '-100%'}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration:0.6, delay: 0.1}}
                    >
                        L
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1,scale:1}}
                    transition={{duration:0.6, delay: 0.1}}
                    >
                        O
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, y: '100%'}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration:0.6, delay: 0.1}}
                    >
                        G
                    </motion.div>
                    <motion.div
                    initial={{opacity:0, x: '100%'}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration:0.6, delay: 0.1}}
                    >
                        S
                    </motion.div>
                </span>
            </div>
        </div>
        <motion.div
        className='bg-red-600 w-full p-3 '
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y: 0}}
        transition={{duration: 0.6, delay: 0.1}}
        >
            <div>
                <a href="tel:+917854216589" className='flex gap-1 text-white no-underline!'><Phone color={'white'}/>7854326589</a>
                <a href="mailto:squareM@gmail.com" className='flex gap-1 text-white no-underline!'> <Globe color='white'/>Square@gmail.com</a>
            </div>
        </motion.div>
      </div>
      <FormPopUp 
        isOpen={isPopupVisible} 
        onClose={() => setIsPopupVisible(false)} 
      />
    </div>
  )
}

export default Hero
