import React, {useState} from 'react'
import Navbar from '../Navbar'
import Projects from './Projects'
import FormPopUp from '../FormPopUp';
import Form from '../../icon/Form';


const Hero = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);


  return (
    <div id='p-hero-section' className='min-h-screen w-full flex overflow-hidden'>
      <div className='p-hero relative size-full flex flex-col'>
        <div className='absolute bg-[url(/src/assets/images/p-hero.png)] bg-cover bg-no-repeat bg-center -z-1 inset-0 w-screen'></div>
        <div className='h-22  w-full flex justify-between items-center p-4! mt-2 '>
          <div className=''>
            <a href="/"><img src="/src/assets/images/logo.png" alt="logo" className='h-17.5 w-17.5'/></a>
          </div>
          <div className='h-full xl:w-290'>
            <Navbar />
          </div>
          <div className='hero-mid1-div3 xl:h-100 align-items-center justify-content-center pe-4 max-sm:fixed max-sm:-right-13 max-sm:top-1/2 max-sm:z-50'>
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

        <div className=' w-full flex justify-center items-center overflow-hidden pt-10! pb-10!'>
          <div className=' size-[80%] flex'>
            <Projects />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
