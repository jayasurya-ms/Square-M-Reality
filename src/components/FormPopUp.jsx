import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import API from '../api/axiosInstance' 

const FormPopUp = ({isOpen, onClose}) => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());

        console.log('trying to post',payload);

        try {
            const response = await API.post('/postenquiry/', payload);
            if (response.status === 200 || response.status === 201) {
                console.log("Form Submitted Successfully!", response.data);
                onClose(); 
            }
        } catch (err) {
            console.error("Submission error:", err);
        }
    };

  return (
    <AnimatePresence>
    {isOpen && (
    /* 1. Added onClick={onClose} to the overlay div */
    <motion.div
    onClick={onClose}
    className='flex justify-center items-center fixed inset-0 z-10 backdrop-blur-sm bg-black/40'
    initial={{scale: 0, opacity: 0}}
    animate={{scale: 1, opacity: 1}}
    exit={{scale: 0, opacity: 0}}
    transition={{duration:0.5}}
    >
        {/* 2. Added onClick={(e) => e.stopPropagation()} so clicks inside the form don't close it */}
        <form 
          action="" 
          onSubmit={handleSubmit} 
          onClick={(e) => e.stopPropagation()} 
          className='flex flex-col w-[90%] items-center md:items-center p-5! rasa text-[16px] md:text-[18px] max-sm:w-100 md:w-full xl:w-200 bg-white rounded-3xl'
        >
            <span className='rasa text-[30px] md:text-[40px]'>Contact Me</span>
        <div className=' mt-10 mb-10 md:w-[90%] flex flex-col md:flex-row justify-end  items-center'>
            <div className=' w-full md:w-[45%] flex flex-col justify-evenly md:h-60 '>
                <div className='flex flex-col '>
                    <span><label htmlFor="name">Full Name *</label></span>
                    <span><input type="text" name="name" required className='border-b-2 w-60 h-8 outline-none'/></span>
                </div>
                <div className='flex flex-col '>
                    <span><label htmlFor="Email">Email *</label></span>
                    <span><input type="email" name="email" required className='border-b-2 w-60 h-8 outline-none'/></span>
                </div>
                <div className='flex flex-col '>
                    <span><label htmlFor="requirement">Type of Requirement</label></span>
                    <span>
                        <select name="requirement" className='border-b-2 w-60 h-8 outline-none'>
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
                    <span><input type="number" name="phone_no" required className='border-b-2 w-60 h-8 outline-none'/></span>
                </div>
                <div className='flex flex-col '>
                    <span><label htmlFor="location">Location *</label></span>
                    <span><input type="text" name="location" required className='border-b-2 w-60 h-8 outline-none'/></span>
                </div>
                <div className='flex flex-col'>
                    <span><label htmlFor="message">Message (Optional)</label></span>
                    <span><textarea name="message" id="" className='border-b-2 w-60 h-7 outline-none bg-transparent'></textarea></span>
                </div>
            </div>
        </div>
        <div className='w-[80%] md:w-[80%] flex flex-col md:flex-row justify-center md:justify-around md:p-3 gap-2 md:gap-5'>
            <button className='border-2 rounded-full! text-black md:w-51 h-10' type="submit">Request A Call Back</button>
            <button type="button" onClick={onClose} className='p-1 ps-3 pe-3 border-2 rounded-full! text-center md:w-51 h-10' >Cancel</button>
        </div>
        </form>
    </motion.div>
    )}
    </AnimatePresence>
  )
}

export default FormPopUp