import React from 'react'

function VisionMission() {
  return (
    <div className=' md:h-screen w-full'>
        <div className=' w-full h-101 md:h-[65%] bg-[url(src/assets/images/about-bg.jpg)] bg-cover bg-top bg-no-repeat relative flex justify-center items-center flex-col z-1'>
        <div className='absolute bg-black/60 size-full z-2'></div>
          <div className='z-3 text-white text-[30px] md:text-[40px] xl:text-[50px] rasa w-[80%] text-center'>Excellence in Every Brick and Brushstroke</div>
          <div className='z-3 text-white text-[14px] md:text-[16px] xl:text-[18px] readex w-[90%] md:w-[70%] text-center'>Here are the projects that set us apart meticulously built and beautifully designed. They showcase our ability to deliver function, form, and finesse in perfect harmony.</div>
        </div>
        <div className=' w-full h-101 md:h-[35%] relative flex justify-center'>
            <div className='absolute bg-black h-full w-[85%] -top-18 z-4 flex flex-wrap readex shadow-2xl'>
              <div className='bg-white h-[50%] md:h-full md:w-4/7 w-1/1 md:[clip-path:polygon(0%_0%,80%_0%,100%_100%,0%_100%)] p-3 md:p-5! md:ps-10!'>
                <div className=' flex flex-col h-full w-full md:w-[80%] gap-2 justify-center'>
                  <span className='text-[20px] xl:text-[30px]'>Our Vision</span>
                  <span className='text-[14px] xl:text-[16px]'>To be a trusted leader in construction and interior design, creating spaces that inspire, endure, and elevate everyday living. We aim to redefine excellence by delivering quality, innovation, and lasting value in every project we undertake.</span>
                </div>
              </div>
              <div className='bg-p ink-800 md:w-3/7 w-1/1 p-3 md:p-5! md:ps-2!'>
                <div className=' text-white flex flex-col h-full w-full md:w-[90%] gap-2 justify-center'>
                  <span className='text-[20px] xl:text-[30px]'>Our Mission</span>
                  <span className='text-[14px] xl:text-[16px]'>To bring our clients’ dreams to life through thoughtful design, expert craftsmanship, and seamless execution. We are committed to delivering timely, sustainable, and customized solutions with honesty.</span>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default VisionMission
