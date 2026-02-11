import React, {useState} from 'react'
import FormPopUp from '../FormPopUp'

const ChooseUs = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  
  return (
    <div id='c-choose' className='size-full overflow-hidden bg-[#EAE5DF]'>
      <div className='mt-5 mb-5 flex flex-col justify-center items-center'>
        {/* Header Section */}
        <div className='flex xl:flex-row md:flex-col max-sm:flex-col items-center w-[90%] mb-6'>
          <div className='xl:text-[60px] max-sm:text-[30px] md:text-[35px] solitreo xl:w-[50%] md:w-full max-sm:w-full'>
            designing spaces, <br />defining style
          </div>
          <div className='xl:text-[18px] max-sm:text-[14px] readex xl:w-[50%] md:w-full max-sm:w-full flex flex-col gap-2'>
            <span className='xl:w-[90%] max-sm:w-full md:w-[70%] p-1'>
              Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой
            </span>
                <button onClick={() => setIsPopupVisible(true)} className='hover:ring-2 xl:text-[18px] max-sm:text-[14px] readex bg-black text-white flex justify-center items-center rounded-full! h-12.5 w-39'>Get In Touch</button>
                {/* The Component Call */}
                <FormPopUp 
                  isOpen={isPopupVisible} 
                  onClose={() => setIsPopupVisible(false)} 
                />          
          </div>
        </div>

        {/* Scroll Container */}
        <div className='w-full flex justify-center'>
          <div className='w-[95%] max-h-700px max-sm:h-160 md:max-h-170 xl:max-h-none overflow-y-auto xl:overflow-visible grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-4'>
            
            {/* Card 1 */}
            <div className='flex flex-col gap-2 shrink-0'>
              <div className='w-full aspect-4/5 bg-[url(src/assets/images/i-choose1.png)] bg-cover bg-center rounded-3xl'></div>
              <div className='w-full bg-white rounded-3xl flex flex-col p-5 gap-2'>
                <span className='text-[40px] text-black readex'>150+</span>
                <span className='text-[20px] text-black font-light'>Projects Completed</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col-reverse xl:flex-col gap-2 shrink-0'>
              <div className='w-full bg-white rounded-3xl flex flex-col p-5 gap-2'>
                <span className='text-[40px] text-black readex'>8+</span>
                <span className='text-[20px] text-black font-light'>Year Experience</span>
              </div>
              <div className='w-full aspect-4/5 bg-[url(src/assets/images/i-choose2.png)] bg-cover bg-center rounded-3xl'></div>
            </div>

            {/* Card 3 */}
            <div className='flex flex-col gap-2 shrink-0'>
              <div className='w-full aspect-4/5 bg-[url(src/assets/images/i-choose3.png)] bg-cover bg-center rounded-3xl'></div>
              <div className='w-full bg-white rounded-3xl flex flex-col p-5 gap-2'>
                <span className='text-[40px] text-black readex '>120+</span>
                <span className='text-[20px] text-black font-light'>Happy Customers</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className='flex flex-col-reverse xl:flex-col gap-2 shrink-0'>
              <div className='w-full bg-white rounded-3xl flex flex-col p-5 gap-2'>
                <span className='text-[40px] text-black readex '>50+</span>
                <span className='text-[20px] text-black font-light'>Home Design</span>
              </div>
              <div className='w-full aspect-4/5 bg-[url(src/assets/images/i-choose4.png)] bg-cover bg-center rounded-3xl'></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs