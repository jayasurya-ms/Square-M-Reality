import React, {useState} from 'react'
import FormPopUp from '../FormPopUp';

function WhyChooseUs() {

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  return (
    <div id='i-whychooseus' className='xl:h-273 md:h-203 max-sm:h-screen w-full bg-[#6B493A]/10'>
      <div className='size-full relative overflow-hidden'>
        <div className='absolute text-[#6B493A]/6 flex font-extrabold xl:text-[300px] md:text-[200px] max-sm:text-[150px] inter xl:-top-20 pointer-events-none'>
          Why Square Minterior
        </div>
      <div className='size-full'>
        <div className='xl:h-80 md:h-60 max-sm:h-81 flex max-sm:flex-col'>
          <div className=' xl:w-[50%] md:w-[50%] max-sm:w-full h-full  max-sm:h-[60%] flex items-center justify-center'>
            <div className=' w-[80%] xl:h-[60%] md:h-[40%] max-sm:h-[50%]'>
              <span className='solitreo xl:text-[60px] md:text-[45px] max-sm:text-[40px]'>Why Choose Us</span>
            </div>
          </div>
          <div className=' xl:w-[50%] md:w-[50%] h-full flex items-center justify-center flex-col'>
            <div className=' xl:w-[60%] md:w-[80%] max-sm:w-[90%] xl:h-[40%] max-sm:h-[60%]'>
              <span className='readex xl:text-[18px] max-sm:text-[15px]'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой</span>
            </div>
            <div className=' xl:w-[60%] mad-sm:w-[60%] md:w-[80%] h-[30%] flex xl:justify-start max-sm:justify-center'>
               <button onClick={() => setIsPopupVisible(true)} className='xl:text-[18px] max-sm:text-[14px] readex bg-black text-white flex justify-center items-center rounded-full! h-12.5 w-39'>Get In Touch</button>
                {/* The Component Call */}
                <FormPopUp 
                  isOpen={isPopupVisible} 
                  onClose={() => setIsPopupVisible(false)} 
                /> 
            </div>
          </div>
        </div>
        <div className=' xl:h-200 max-sm:h-85 md:h-150 w-full flex justify-center'>
          <div className=' xl:h-[90%] md:h-[86%] max-sm:h-[80%] w-[90%] flex items-end justify-center bg-[url(src/assets/images/i-whychooseus.png)] bg-contain bg-no-repeat bg-center xl:mt-10! max-sm:mt-10! md:mt-15!'>
            {/* <div className='bg-blue-600 xl:w-165 max-sm:w-55 md:w-105 border-[#714938] xl:h-80 max-sm:h-25 md:h-50 rounded-t-full border-5 relative xl:-translate-x-15 xl:translate-y-5 max-sm:-translate-x-10 max-sm:translate-y-3 md:-translate-x-14 md:translate-y-5 flex'>
             <div className='bg-blue-600 xl:w-165 max-sm:w-55 md:w-105 border-[#714938] xl:h-80 max-sm:h-25 md:h-50 rounded-t-full border-5 absolute xl:bottom-5 xl:left-15 max-sm:bottom-3 max-sm:left-8 md:bottom-4 md:left-13 bg-[url(src/assets/images/i-whychooseus.png)] bg-cover bg-center'></div>
             <div className='absolute xl:h-77.5 xl:w-72.5 max-sm:h-27 max-sm:w-22 md:h-47 md:w-42 bg-[url(src/assets/images/i-whychooseus-div2.png)] bg-contain bg-no-repeat rotate-y-180 bg-center xl:bottom-10 xl:-left-45 max-sm:bottom-5 max-sm:-left-8 md:bottom-10 md:-left-20 flex justify-center overflow-hidden'>
              <div className='rotate-y-180 bg-lime-400 h-[50%] xl:mt-8! max-sm:mt-3.5! md:mt-6! w-[80%] '>
                <span className='max-sm:text-[8px] md:text-[12px] xl:text-[18px] readex'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлө</span>
              </div>
             </div>
             <div className='absolute xl:w-84 xl:h-49 max-sm:w-25 max-sm:h-24 md:w-50 md:h-40 bg-[url(src/assets/images/i-whychooseus-div1.png)] bg-contain bg-no-repeat bg-center rotate-y-180 xl:bottom-80 xl:left-0 max-sm:bottom-23 max-sm:left-5 md:bottom-45 flex justify-center overflow-hidden'>
              <div className='rotate-y-180 bg-lime-400 h-[50%] xl:mt-6! max-sm:mt-3.5! md:mt-6.5! w-[80%]'>
                <span className='max-sm:text-[8px] md:text-[12px] xl:text-[18px] readex'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ </span>
              </div>
             </div>
             <div className='absolute xl:h-77.5 xl:w-72.5 max-sm:h-27 max-sm:w-22 md:h-47 md:w-42 bg-[url(src/assets/images/i-whychooseus-div2.png)] bg-contain bg-no-repeat bg-center xl:bottom-70 xl:left-110 max-sm:bottom-22 max-sm:-right-10 md:bottom-45 md:-right-10 flex justify-center overflow-hidden'>
              <div className=' bg-lime-400 h-[50%] xl:mt-8! max-sm:mt-3.5! md:mt-6! w-[80%]'>
                <span className='max-sm:text-[8px] md:text-[12px] xl:text-[18px] readex'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа</span>
              </div>
             </div>
             <div className='absolute xl:w-84 xl:h-49 max-sm:w-25 max-sm:h-24 md:w-50 md:h-40 bg-[url(src/assets/images/i-whychooseus-div1.png)] bg-contain bg-no-repeat bg-center xl:bottom-30 xl:-right-90 max-sm:bottom-8 max-sm:-right-30 md:bottom-15 md:-right-55 flex justify-center overflow-hidden'>
              <div className=' bg-lime-400 h-[50%] xl:mt-6! max-sm:mt-3.5! md:mt-6.5! w-[80%]'>
                <span className='max-sm:text-[8px] md:text-[12px] xl:text-[18px] readex'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ </span>
              </div>
             </div>
            </div> */}
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
