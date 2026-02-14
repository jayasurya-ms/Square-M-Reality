import React from 'react'

function OurTeam() {
  return (
    <div className=' xl:h-screen'>
        <div className='size-full p-6! md:p-10! xl:p-20! flex flex-wrap'>
            <div className=' w-1/1 md:w-1/1 xl:w-1/3  readex flex flex-col gap-2 md:gap-3 items-center xl:items-start xl:p-3! justify-center'>
                <div className='font-semibold text-[18px] md:text-[20px] xl:text-[22px]'>
                  <span>Our Team</span>
                </div>
                <div className='font-semibold text-[22px] md:text-[22px] xl:text-[24px]'>
                  <span>Meet Our Expert</span>
                  <span>Team</span>
                </div>
                <div className='text-[16px] md:text-[18px] xl:text-[18px] w-[90%] xl:w-[80%] text-center xl:text-start!'>
                  <span>Our success is built on the strength of our team an inspired group of architects, engineers, designers, and project managers dedicated to excellence. Each member brings unique skills and deep experience to ensure every project is completed with precision, passion, and professionalism.</span>
                </div>
                <div>
                  <a href="/contact" className='btn-bg-clr text-black! no-underline! p-2 ps-3 pe-3 w-max rounded-full flex justify-center items-center'><span>Connect with us</span></a>
                </div>
            </div>
            <div className=' w-1/1 md:w-1/2 xl:w-1/3 p-4'>
                <div className=' relative h-[89%] flex justify-center rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                  <img src="/src/assets/images/c-choose1.png" alt="" className='size-full rounded-2xl'/>
                  <div className='absolute bg-dark h-[30%] w-[80%] -bottom-[15%] rounded-2xl border-dashed border-4 border-white flex flex-col justify-center items-center'>
                    <a href="/construction" className='text-white no-underline! text-[20px] xl:text-[30px] rasa hover:underline! '>Construction Team</a>
                    <p className='text-white text-[14px] readex font-extralight hidden xl:block'>Building Strength, Brick by Brick</p>
                  </div>
                </div>
            </div>
            <div className=' w-1/1 md:w-1/2 xl:w-1/3 p-4'>
              <div className=' relative h-[89%] flex justify-center rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                  <img src="/src/assets/images/i-choose1.png" alt="" className='size-full  rounded-2xl'/>
                  <div className='absolute bg-dark h-[30%] w-[80%] -bottom-[15%] rounded-2xl border-dashed border-4 border-white flex flex-col justify-center items-center'>
                    <a href="/interior-designing" className='text-white no-underline! text-[20px] xl:text-[30px] rasa hover:underline! '>Interior Design Team</a>
                    <p className='text-white text-[14px] readex font-extralight hidden xl:block'>Designing Spaces that Reflect You</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeam
