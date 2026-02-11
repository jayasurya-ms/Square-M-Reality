import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FormPopUp from '../FormPopUp';

const AboutUs = () => {
  // Logic: isInView is now toggled by mouse events
  const [isHovered, setIsHovered] = useState(false);
    
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div 
      id='aboutus' 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='xl:h-screen md:h-120 max-sm:h-screen w-full bg-white overflow-hidden cursor-default xl:mt-4 xl:mb-10! max-sm:m-0'
    >
      <div className='size-full flex items-center justify-center'>
        <div className='size-11/12 '>
          <span className='xl:text-[60px] md:text-[40px] max-sm:text-[25px] font-semibold mt-6 block '>
            About Us
          </span>

          <div className='w-full xl:h-9/12 max-sm:h-10/12 md:h-8/12 flex items-center justify-center max-sm:flex-col relative'>
            <div className='absolute bg-[url(src/assets/images/c-about.png)] bg-cover bg-center w-full xl:h-11/12 max-sm:h-12/12 md:h-8/12 bottom-0 z-0 rounded-4xl'></div>
            <div className='xl:h-12/12 xl:w-6/12 max-sm:w-12/12 max-sm:h-5/12 md:h-5/12 md:w-8/12 z-1'>
              <div className='xl:h-100 flex flex-col justify-center items-center gap-3 max-sm:h-50 md:h-60'>
                <span className='xl:text-[18px] md:text-[14px] readex font-medium w-9/12'>
                  Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой
                </span>
                <span className='flex justify-start w-9/12'>
                  <button onClick={() => setIsPopupVisible(true)} className='xl:text-[18px] max-sm:text-[14px] readex bg-black text-white flex justify-center items-center rounded-full! h-12.5 w-39'>Get In Touch</button>
                {/* The Component Call */}
                <FormPopUp 
                  isOpen={isPopupVisible} 
                  onClose={() => setIsPopupVisible(false)} 
                />
                </span>
              </div>
            </div>

            {/* TOP ANIMATION DIV */}
            <div className={`construction-about-ani-top h-full xl:w-6/12 max-sm:w-12/12 md:w-6/12 relative reveal reveal-top-start ${isHovered ? 'active' : ''}`}>
              <div className='absolute md:top-10 xl:-top-9'>
                <img 
                  src="src/assets/images/c-about-building.png" 
                  className='size-full object-contain' 
                  alt="Building"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM ANIMATION DIV  */}
          <div className={`construction-about-ani-bot xl:h-25 relative w-12/12 flex justify-center reveal reveal-bot-start ${isHovered ? 'active' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className='absolute flex h-full w-10/12 xl:-top-15 justify-around max-sm:relative max-sm:-top-15 md:-top-2 max-sm:flex-wrap'>

                <div className='bg-[url(src/assets/images/c-about-div.png)] bg-cover bg-center flex flex-col justify-center items-center xl:w-64 xl:h-39.5 max-sm:w-17 max-sm:h-12 md:w-22 md:h-15'>
                  <span className='btn-text-clr xl:text-[60px] max-sm:text-[14px] font-semibold'>8+</span>
                  <span className='text-white xl:text-[20px] max-sm:text-[8px] readex text-center'>Years Of Construction</span>
                </div>
                <div className='bg-[url(src/assets/images/c-about-div.png)] bg-cover bg-center flex flex-col justify-center items-center xl:w-64 xl:h-39.5 max-sm:w-17 max-sm:h-12 md:w-22 md:h-15'>
                  <span className='btn-text-clr xl:text-[60px] max-sm:text-[14px] font-semibold'>50+</span>
                  <span className='text-white xl:text-[20px] max-sm:text-[8px] readex text-center'>Houses Constructed</span>
                </div>
                <div className='bg-[url(src/assets/images/c-about-div.png)] bg-cover bg-center flex flex-col justify-center items-center xl:w-64 xl:h-39.5 max-sm:w-17 max-sm:h-12 md:w-22 md:h-15'>
                  <span className='btn-text-clr xl:text-[60px] max-sm:text-[14px] font-semibold'>24/7</span>
                  <span className='text-white xl:text-[20px] max-sm:text-[8px] readex text-center'>Response Time</span>
                </div>
                <div className='bg-[url(src/assets/images/c-about-div.png)] bg-cover bg-center flex flex-col justify-center items-center xl:w-64 xl:h-39.5 max-sm:w-17 max-sm:h-12 md:w-22 md:h-15'>
                  <span className='btn-text-clr xl:text-[60px] max-sm:text-[14px] font-semibold'>40+</span>
                  <span className='text-white xl:text-[20px] max-sm:text-[8px] readex text-center'>Response Time</span>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs