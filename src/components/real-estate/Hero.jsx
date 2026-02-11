import React, {useState} from 'react'
import Navbar from '../Navbar'
import Phone from '../../icon/Phone'
import Location from '../../icon/Location'
import Play from '../../icon/Play'
import FormPopUp from '../FormPopUp'
import {motion} from 'framer-motion'

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
            <div className='xl:flex justify-center items-center p-3 hidden'>
                <button onClick={() => setIsPopupVisible(true)} className='rounded-pill border-0 p-2 pe-4 ps-4 readex btn-bg-clr'> Get In Touch  </button>
                {/* The Component Call */}
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
        className=' flex justify-between z-1 p-2'
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        >
            <div className='p-2 text-white'>
                <span className='flex'><Phone color={'white'}/> 1203654789</span>
                <span className='flex'><Location color={'white'}/> Bangalore</span>
            </div>
            <div className='flex justify-center items-center'>
                <div className='bg-[url(/src/assets/images/hero-bg.png)] bg-cover bg-center bg-no-repeat rounded-full flex flex-col justify-center items-center ps-3 pe-3'>
                    <span><Play /></span>
                    <span className='text-white'>Watch Now</span>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
