import React, {useState} from 'react'
import Navbar from '../Navbar'
import FormPopUp from '../FormPopUp'
import Form from '../../icon/Form';
import Phone from '../../icon/Phone';
import Location from '../../icon/Location';

const Hero = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    
  return (
    <div id='c-hero' className='lg:h-202 xl:h-256 md:h-139 max-sm:h-75 overflow-x-clip w-full'>
      <div className='flex flex-col justify-between size-full bg-[url(src/assets/images/c-hero.png)] bg-cover bg-center'>
        
        {/* TOP DIV */}
        <div className='ani-top xl:h-25 w-full flex ps-4 pt-1! z-10 max-sm:justify-between md:justify-between xl:justify-evenly max-sm:h-10 items-center'>
            <div className='xl:h-full xl:w-25 flex justify-center items-center'>
                <a href="/"><img src="src/assets/images/logo.png" alt="Logo" className='size-22 max-sm:size-10 md:size-18'/></a>
            </div>
            <div className='xl:h-full xl:w-275 '>
                <Navbar />
            </div>
            <div className='hero-mid1-div3 xl:h-100 align-items-center justify-content-center pe-4 max-sm:fixed max-sm:-right-13 max-sm:top-80 max-sm:z-50'>
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
                <div className='text-white flex flex-col justify-center md:gap-2 max-sm:text-[14px] max-sm:pb-2!'>
                    <a href="tel:+919916446595" className='flex text-white no-underline!'><Phone color={'white'}/> 1203654789</a>
                    <a href="https://www.google.com/maps/search/?api=1&query=Bangalore" target="_blank" className='flex text-white no-underline!'><Location color={'white'}/> Bangalore</a>
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