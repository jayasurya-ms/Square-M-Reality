import React from 'react'
import Thumb from './../../icon/Thumb';

function ChooseUs() {
  return (
    <div id='chooseus-section' className='h-auto size-full overflow-hidden bg-white'>
      <div className='mt-5 mb-5'>
        {/* Header Section */}
        <div className='w-full flex flex-col items-center mb-6'>
          <div className='xl:text-[60px] max-sm:text-[30px] md:text-[35px] font-semibold rasa w-[90%]'>
            Why Choose Us
          </div>
          <div className='xl:text-[20px] max-sm:text-[14px] readex w-[90%] flex'>
            <span className='xl:w-[40%] max-sm:w-full md:w-[70%] p-1'>
              Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой
            </span>
          </div>
        </div>

        {/* Scroll Container */}
        <div className='w-full flex justify-center'>
          <div className='w-[95%] max-h-700px max-sm:h-160 md:max-h-170 xl:max-h-none overflow-y-auto xl:overflow-visible grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 p-4'>
            
            {/* Card 1 */}
            <div className='flex flex-col gap-2 shrink-0'>
              <div className='w-full aspect-4/5 bg-[url(src/assets/images/c-choose1.png)] bg-cover bg-center rounded-3xl'></div>
              <div className='w-full bg-black rounded-3xl flex flex-col p-5 gap-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-[18px] text-white font-medium readex '>Corporate <br />Responsibility</span>
                  <span className='btn-bg-clr size-10 rounded-full flex justify-center items-center shrink-0'>
                    <Thumb size={24}/>
                  </span>
                </div>
                <span className='text-[14px] text-white/80'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className='flex flex-col-reverse xl:flex-col gap-2 shrink-0'>
              <div className='w-full bg-black rounded-3xl flex flex-col p-5 gap-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-[18px] text-white font-medium readex '>Corporate <br />Responsibility</span>
                  <span className='btn-bg-clr size-10 rounded-full flex justify-center items-center shrink-0'>
                    <Thumb size={24}/>
                  </span>
                </div>
                <span className='text-[14px] text-white/80'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй</span>
              </div>
              <div className='w-full aspect-4/5 bg-[url(src/assets/images/c-choose2.png)] bg-cover bg-center rounded-3xl'></div>
            </div>

            {/* Card 3 */}
            <div className='flex flex-col gap-2 shrink-0'>
              <div className='w-full aspect-4/5 bg-[url(src/assets/images/c-choose3.png)] bg-cover bg-center rounded-3xl'></div>
              <div className='w-full bg-black rounded-3xl flex flex-col p-5 gap-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-[18px] text-white font-medium readex '>Corporate <br />Responsibility</span>
                  <span className='btn-bg-clr size-10 rounded-full flex justify-center items-center shrink-0'>
                    <Thumb size={24}/>
                  </span>
                </div>
                <span className='text-[14px] text-white/80'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className='flex flex-col-reverse xl:flex-col gap-2 shrink-0'>
              <div className='w-full bg-black rounded-3xl flex flex-col p-5 gap-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-[18px] text-white font-medium readex '>Corporate <br />Responsibility</span>
                  <span className='btn-bg-clr size-10 rounded-full flex justify-center items-center shrink-0'>
                    <Thumb size={24}/>
                  </span>
                </div>
                <span className='text-[14px] text-white/80'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй</span>
              </div>
              <div className='w-full aspect-4/5 bg-[url(src/assets/images/c-choose4.png)] bg-cover bg-center rounded-3xl'></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs