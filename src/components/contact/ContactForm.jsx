import React from 'react'
import Navbar from '../Navbar'

function ContactForm() {
  return (
    <div id='contactform-section' className='h-200 md:h-screen w-full bg-[#F9FEBA] overflow-hidden'>
        <div className='size-full'>
            <div className=' flex w-full justify-between md:justify-start p-4'>
                <div className=' flex justify-center items-center'>
                    <img src="/src/assets/images/logo.png" alt="logo"  className='h-15 w-16 md:h-17.5 md:w-17.5'/>
                </div>
                <div className=' w-[80%]'>
                    <Navbar clr={'black'}/>
                </div>
            </div>
            <div>
                <div className=' w-full flex justify-center items-center'>
                    <span className='rasa text-[30px] md:text-[70px] xl:text-[80px]'>Contact Me</span>
                </div>
                <div className=' w-full flex flex-col xl:flex-row mt-10!'>
                    <div className=' w-full xl:w-[40%] flex flex-col items-center gap-2'>
                        <div className='flex flex-col w-[90%] md:w-[80%]'>
                            <span className='readex text-[16px] md:text-[18px] xl:text-[20px]'>By Form</span>
                            <span className='readex text-[14px] md:text-[16px] xl:text-[18px]'>Mon-Fri, 9am-4pm EST</span>
                        </div>
                        <div className='flex flex-col w-[90%] md:w-[80%]'>
                            <span className='readex text-[16px] md:text-[18px] xl:text-[20px]'>By Form</span>
                            <span className='readex text-[14px] md:text-[16px] xl:text-[18px]'>Mon-Fri, 9am-4pm EST</span>
                        </div>
                    </div>
                    <div className=' w-full xl:w-[60%] flex justify-center mt-10! md:mt-0!'>
                        <form action="" className='flex flex-col w-[90%] items-center md:items-start p-5! rasa text-[16px] md:text-[18px]'>
                        <div className=' mt-10 mb-10 md:w-[90%] flex flex-col md:flex-row justify-center'>
                            <div className=' w-full md:w-[45%] flex flex-col justify-evenly md:h-60 '>
                                <div className='flex flex-col '>
                                    <span><label htmlFor="name">Full Name *</label></span>
                                    <span><input type="text" name="name" id="" className='border-b-2 w-60 h-8 outline-none'/></span>
                                </div>
                                <div className='flex flex-col '>
                                    <span><label htmlFor="Email">Email *</label></span>
                                    <span><input type="email" name="email" id="" className='border-b-2 w-60 h-8 outline-none'/></span>
                                </div>
                                <div className='flex flex-col '>
                                    <span><label htmlFor="requirement">Type of Requirement</label></span>
                                    <span>
                                        <select name="requirement" id="" className='border-b-2 w-60 h-8 outline-none'>
                                            <option value="">select</option>
                                            <option value="option 1">Option 1</option>
                                            <option value="option 2">Option 2</option>
                                            <option value="option 3">Option 3</option>
                                        </select>
                                    </span>
                                </div>
                            </div>
                            <div className=' w-full md:w-[45%] flex flex-col justify-evenly md:h-60 '>
                                <div className='flex flex-col '>
                                    <span><label htmlFor="mobile numbet">Mobile Number *</label></span>
                                    <span><input type="number" name="mobile-number" id="" className='border-b-2 w-60 h-8 outline-none'/></span>
                                </div>
                                <div className='flex flex-col '>
                                    <span><label htmlFor="location" v>Location *</label></span>
                                    <span><input type="text" name="location" id="" className='border-b-2 w-60 h-8 outline-none'/></span>
                                </div>
                                <div className='flex flex-col'>
                                    <span><label htmlFor="message">Message (Optional)</label></span>
                                    <span><textarea name="message" id="" className='border-b-2 w-60 h-7 outline-none bg-transparent'></textarea></span>
                                </div>
                            </div>
                        </div>
                        <div className='w-[80%] md:w-[80%] flex flex-col md:flex-row justify-center md:justify-around md:p-3 gap-2 md:gap-5'>
                            <button className='border-black border-2 p-1 ps-4 pe-4 rounded-full! bg-black text-white '>Book Free Consultation</button>
                            <button className='border-2 p-1 ps-4 pe-4 rounded-full! text-black'>Request A Call Back</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
