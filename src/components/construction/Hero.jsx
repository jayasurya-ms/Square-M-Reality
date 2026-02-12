import React, {useState} from 'react'
import Navbar from '../Navbar'
import Play from '../../icon/Play'
import Arrow from '../../icon/Arrow'
import { Link } from 'react-router-dom';
import FormPopUp from '../FormPopUp'

const Hero = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    
  return (
    <div id='c-hero' className='lg:h-202 xl:h-256 md:h-139 max-sm:h-75 overflow-x-clip w-full'>
      <div className='flex flex-col justify-between size-full bg-[url(src/assets/images/c-hero.png)] bg-cover bg-center'>
        
        {/* TOP DIV */}
        <div className='ani-top xl:h-25 w-full flex ps-4 pt-1! z-10 max-sm:justify-between md:justify-evenly max-sm:h-10 items-center'>
            <div className='xl:h-full xl:w-25 flex justify-center items-center'>
                <a href="/"><img src="src/assets/images/logo.png" alt="Logo" className='size-22 max-sm:size-10 md:size-18'/></a>
            </div>
            <div className='xl:h-full xl:w-275 '>
                <Navbar />
            </div>
            <div className='xl:h-full xl:w-55 xl:flex justify-center items-center md:hidden max-sm:hidden'>
                {/* 1. Only the button stays here */}
                <button onClick={() => setIsPopupVisible(true)} className='rounded-pill border-0 p-2 pe-4 ps-4 readex btn-bg-clr'> Get In Touch </button>
            </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className=' xl:h-165 max-sm:h-50 flex flex-col justify-between items-center'>
            <div className='ani-bot xl:h-122.75 xl:w-139.75 flex flex-col xl:gap-3 max-sm:w-50 max-sm:h-50 md:w-70 md:gap-2'>
                <div className='max-sm:w-full'>
                    <span className='rasa text-white xl:text-[80px] max-sm:text-[20px] md:text-[40px] font-semibold leading-tight'>Shaping Future <br />Through <br />Excellence</span>
                </div>
                <div className='max-sm:w-full ps-2 text-white xl:text-[18px] max-sm:text-[8px] md:text-[15px]'>
                    <span>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой</span>
                </div>
            </div>
            
            <div className='xl:h-25 w-11/12 max-sm:h-10 md:h-15 flex justify-between pb-8'>
                <div className='flex gap-2 items-center justify-center'>
                    <span className='xl:text-[60px] max-sm:text-[30px] md:text-[40px] font-bold readex text-white'>40</span>
                    <span className='w-px xl:h-15 max-sm:h-6 md:h-10 bg-white'></span>
                    <span className='xl:text-[18px] max-sm:text-[10px] md:text-[14px] font-semibold readex text-white'>Years Of <br />Experience</span>
                </div>
                <div>
                    <Link to="#" className='xl:w-42.75 xl:h-16.5 max-sm:w-20 max-sm:h-10 md:h-13 md:w-30 bg-[url(src/assets/images/hero-bg.png)] no-underline! text-white! flex flex-col items-center justify-center bg-center bg-cover rounded-full'>
                        <span className='max-sm:size-6'><Play /></span>
                        <span className='max-sm:text-[9px]'>Watch Now</span>
                     </Link>
                </div>
            </div>
        </div>
      </div>

      {/* 2. FormPopUp moved here: outside all relative/overflow containers */}
      <FormPopUp 
        isOpen={isPopupVisible} 
        onClose={() => setIsPopupVisible(false)} 
      />
    </div>
  )
}

export default Hero