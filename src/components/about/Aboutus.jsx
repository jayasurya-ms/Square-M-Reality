import React from 'react'

function Aboutus() {
  return (
    <div className='xl:h-screen w-full'>
      <div className='size-full p-4 md:p-5 flex justify-center items-center flex-col xl:flex-row'>
        <div className=' w-full xl:w-[50%] xl:h-full flex xl:justify-end md:justify-center items-center'>
            <div className=' xl:w-[80%] xl:h-[90%] md:h-100 md:w-[65%] h-80 w-82 relative'>
                <div className='btn-bg-clr h-[80%] w-[58%] p-2 rounded-2xl'>
                    <img src="/src/assets/images/c-choose2.png" alt="" className='size-full rounded-2xl'/>
                </div>
                <div className='absolute btn-bg-clr h-[80%] w-[58%] right-0 bottom-0 p-2 rounded-2xl'>
                    <img src="/src/assets/images/r-choose4.jpg" alt="" className='size-full rounded-2xl'/>
                </div>
            </div>
        </div>
        <div className=' w-full xl:w-[50%] h-full flex justify-center items-center p-4 md:p-5'>
            <div>
                <div className=' readex flex flex-col gap-2 md:p-2!'>
                    <div>
                        <span className='text-[18px] xl:text-[20px]'>About Us</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-[20px] xl:text-[24px] font-semibold'>Where Innovation Meets</span>
                        <span className='text-[20px] xl:text-[24px] font-semibold'>Construction</span>
                    </div>
                    <div>
                        <span className='text-[15px] xl:text-[18px]'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum voluptatibus a, cupiditate facere magni neque quod earum vero laboriosam molestias totam enim quasi esse dignissimos nisi. Hic, cumque porro.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quas debitis consequuntur vitae recusandae ipsam alias exercitationem nam doloremque molestias veritatis nulla mollitia adipisci eum unde, obcaecati laborum atque. Similique?
                        </span>
                    </div>
                </div>
                <div className='flex p-2 items-center gap-2'>
                    <span><img src="/src/assets/images/review.png" alt="" className='size-20'/></span>
                    <span className='flex flex-col'>
                        <span className='text-[20px] xl:text-[22px] readex'>For Enquiry :</span>
                        <span className='text-[18px] xl:text-[20px]'>+91 7854653298</span>
                    </span>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
