import React from 'react'
import Thumb from './../../icon/Thumb';

function ChooseUs() {
  return (
    <div id='c-choose' className='size-full overflow-hidden bg-white'>
      <div className=' mt-5 mb-5'>
        <div className='w-full flex flex-col items-center'>
            <div className=' xl:text-[60px] max-sm:text-[30px] md:text-[35px] font-semibold rasa w-[90%]'>Why Choose Us</div>
            <div className=' xl:text-[20px] max-sm:text-[14px] readex w-[90%] flex'>
                <span className='xl:w-[40%] max-sm:w-full md:w-[70%] p-1'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой</span>
            </div>
        </div>
        <div className='xl:h-screen md:h-screen max-sm:h-screen w-screen flex justify-center items-center'>
            {/* Added 'flex-nowrap' to force them into a single line */}
            <div className='xl:size-11/12 max-sm:overflow-x-auto md:overflow-x-auto flex flex-nowrap p-4 max-sm:h-12/12 max-sm:gap-10 md:gap-8 xl:gap-0'>
                
                {/* Card 1: Added flex-shrink-0 and max-sm:w-[80%] */}
                <div className='xl:w-3/12 h-full flex flex-col justify-around items-center shrink-0 max-sm:w-full gap-2 md:w-[50%]'>
                    <div className='w-76.5 h-110 bg-[url(src/assets/images/c-choose1.png)] flex rounded-3xl'></div>
                    <div className='w-76.5 h-49 bg-black flex rounded-3xl flex-col p-2 gap-1'>
                        <div className='h-50 w-full flex'>
                            <div className='h-full w-[70%] flex items-end'>
                                <span className='xl:text-[20px] max-sm:text-[16px] text-white font-medium readex'>corporate <br />resposibility</span>
                            </div>
                            <div className='h-full w-[30%] flex justify-end'>
                                <span className='btn-bg-clr size-17.5 rounded-full flex justify-center items-center'>
                                    <Thumb size={42}/>
                                </span>
                            </div>
                        </div>
                        <div className='h-50 w-full'>
                            <span className='xl:text-[18px] max-sm:text-[15px] text-white'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд </span>
                        </div>
                    </div>
                </div>

                {/* Card 2: Added flex-shrink-0 and max-sm:w-[80%] */}
                <div className='xl:w-3/12 h-full flex flex-col justify-around items-center shrink-0 max-sm:w-full gap-2 md:w-[50%]'>
                    <div className='w-76.5 h-49 bg-black flex rounded-3xl flex-col p-2 gap-1'>
                        <div className='h-50 w-full flex'>
                            <div className='h-full w-[70%] flex items-end'>
                                <span className='text-[20px] text-white font-medium readex'>corporate <br />resposibility</span>
                            </div>
                            <div className='h-full w-[30%] flex justify-end'>
                                <span className='btn-bg-clr size-17.5 rounded-full flex justify-center items-center'>
                                    <Thumb size={42}/>
                                </span>
                            </div>
                        </div>
                        <div className='h-50 w-full'>
                            <span className='text-[18px] text-white'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд </span>
                        </div>
                    </div>
                    <div className='w-76.5 h-110 bg-[url(src/assets/images/c-choose2.png)] flex rounded-3xl'></div>
                </div>

                {/* Card 3: Added flex-shrink-0 and max-sm:w-[80%] */}
                <div className='xl:w-3/12 h-full flex flex-col justify-around items-center shrink-0 max-sm:w-full gap-2 md:w-[50%]'>
                    <div className='w-76.5 h-110 bg-[url(src/assets/images/c-choose3.png)] flex rounded-3xl'></div>
                    <div className='w-76.5 h-49 bg-black flex rounded-3xl flex-col p-2 gap-1'>
                        <div className='h-50 w-full flex'>
                            <div className='h-full w-[70%] flex items-end'>
                                <span className='text-[20px] text-white font-medium readex'>corporate <br />resposibility</span>
                            </div>
                            <div className='h-full w-[30%] flex justify-end'>
                                <span className='btn-bg-clr size-17.5 rounded-full flex justify-center items-center'>
                                    <Thumb size={42}/>
                                </span>
                            </div>
                        </div>
                        <div className='h-50 w-full'>
                            <span className='text-[18px] text-white'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд </span>
                        </div>
                    </div>
                </div>

                {/* Card 4: Added flex-shrink-0 and max-sm:w-[80%] */}
                <div className='xl:w-3/12 h-full flex flex-col justify-around items-center shrink-0 max-sm:w-full gap-2 md:w-[50%]'>
                    <div className='w-76.5 h-49 bg-black flex rounded-3xl flex-col p-2 gap-1'>
                        <div className='h-50 w-full flex'>
                            <div className='h-full w-[70%] flex items-end'>
                                <span className='text-[20px] text-white font-medium readex'>corporate <br />resposibility</span>
                            </div>
                            <div className='h-full w-[30%] flex justify-end'>
                                <span className='btn-bg-clr size-17.5 rounded-full flex justify-center items-center'>
                                    <Thumb size={42}/>
                                </span>
                            </div>
                        </div>
                        <div className='h-50 w-full'>
                            <span className='text-[18px] text-white'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд </span>
                        </div>
                    </div>
                    <div className='w-76.5 h-110 bg-[url(src/assets/images/c-choose4.png)] flex rounded-3xl'></div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs