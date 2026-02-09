import React from 'react'
import Form from '../../components/Form'
import Arrow from '../../icon/Arrow'

function ContactUs() {
  return (
    <div id='i-contactus-section' className='xl:h-screen md:h-screen max-sm:h-auto w-full bg-lime-500'>
      <div className="size-full bg-[url(src/assets/images/i-form-bg.png)] bg-cover bg-center flex max-sm:flex-col max-sm:pt-10! max-sm:pb-10!">
        <div className=' xl:w-[50%] xl:h-full md:w-[50%] md:h-full max-sm:w-full max-sm:h-auto flex justify-center items-center'>
          <div className=" xl:h-[95%] xl:w-[54%] md:h-[90%] md:w-[80%] max-sm:w-full max-sm:h-131 bg-[url(src/assets/images/i-form-div.png)] bg-contain bg-no-repeat bg-center flex justify-center items-center">
            <div className=" xl:size-[85%] md:size-[85%] max-sm:h-[90%] max-sm:w-[70%] flex flex-col gap-4">
              <div className=' flex justify-center items-center'>
                <span className='readex xl:text-[30px] md:text-[25px] max-sm:text-[20px]'>Contact SquareM</span>
              </div>
              <div className=' flex justify-center flex-col'>
                <span className='readex xl:text-[28px] md:text-[23px] max-sm:text-[18px]'>By Email</span>
                <span className='readex xl:text-[20px] md:text-[16px] max-sm:text-[14px]'>Squarem Reality@Builders.Com</span>
              </div>
              <div className=' flex justify-center flex-col'>
                <span className='readex text-[28px] md:text-[23px] max-sm:text-[18px]'>On Social Media</span>
                <span className='readex text-[20px] md:text-[16px] max-sm:text-[14px]'>Squarem Reality@Builders.Com</span>
              </div>
              <div className=' flex justify-center flex-col'>
                <span className='readex text-[28px] md:text-[23px] max-sm:text-[18px]'>By Form</span>
                <span className='readex text-[20px] md:text-[16px] max-sm:text-[14px]'>Use The Contact Form To Send Me A Message. I'll Get Back To You Within 24 Hours.</span>
              </div>
              <div className=' flex justify-center flex-col'>
                <span className='readex text-[28px] md:text-[23px] max-sm:text-[18px]'>Hours</span>
                <span className='readex text-[20px] md:text-[16px] max-sm:text-[14px]'>Mon-Fri,9am-4pm EST</span>
              </div>
            </div>
          </div>
        </div>
        <div className=' xl:w-[50%] xl:h-full md:w-[50%] md:h-full max-sm:w-full max-sm:h-auto flex items-end'>
          <div className=' xl:h-[70%] md:h-[94%] xl:w-[90%] md:w-[90%] max-sm:w-full'>
            <div className=' xl:h-[90%] md:h-auto w-full'>
              <div className=' h-[90%] w-full text-white'>
                <Form tcolor={'#5A3523'}/>
              </div>
              <span className='flex xl:justify-around items-center md:justify-center md:flex-col md:gap-3 max-sm:flex-col max-sm:gap-2'>we are excited to connect with you<a href="" className='bg-black xl:h-10 w-51 flex rounded-full justify-center items-center no-underline! text-white gap-1'>Get A Call Back <span className='bg-white rounded-full flex justify-center items-center'><Arrow /></span></a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
