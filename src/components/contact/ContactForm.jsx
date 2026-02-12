import React, { useState, useRef } from 'react'
import Navbar from '../Navbar'
import { motion } from 'framer-motion'
import FormPopUp from '../FormPopUp'
import API from '../../api/axiosInstance'

const ContactForm = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    
    // New states for form feedback
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());

        // --- VALIDATIONS ---
        // Phone number length check
        if (payload.phone_no.length < 10) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }
        // Email regex check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(payload.email)) {
            alert("Please enter a valid email address.");
            return;
        }

        setLoading(true);

        try {
            const response = await API.post('/postenquiry/', payload);
            if (response.status === 200 || response.status === 201) {
                console.log("Form Submitted Successfully!", response.data);
                setSubmitted(true);
                if (formRef.current) formRef.current.reset();
            }
        } catch (err) {
            console.error("Submission error:", err);
            alert("Submission failed. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='contactform-section' className='h-220 md:h-screen w-full bg-[#F9FEBA] overflow-hidden'>
            <div className='size-full'>
                <motion.div
                    className=' flex w-full justify-between md:justify-start p-4'
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className=' flex justify-center items-center'>
                        <a href="/"><img src="/src/assets/images/logo.png" alt="logo" className='h-15 w-16 md:h-17.5 md:w-17.5' /></a>
                    </div>
                    <div className='md:w-[90%] xl:w-[80%]'>
                        <Navbar clr={'black'} />
                    </div>
                    <div className='xl:flex justify-center items-center w-[20%] hidden'>
                        <button onClick={() => setIsPopupVisible(true)} className='rounded-pill border-0 p-2 pe-4 ps-4 readex btn-bg-clr'> Get In Touch  </button>
                        <FormPopUp
                            isOpen={isPopupVisible}
                            onClose={() => setIsPopupVisible(false)}
                        />
                    </div>
                </motion.div>
                <div>
                    <div className=' w-full flex justify-center items-center'>
                        <span className='rasa text-[30px] md:text-[70px] xl:text-[80px]'>Contact Me</span>
                    </div>
                    <div className=' w-full flex flex-col xl:flex-row mt-10!'>
                        <div className=' w-full xl:w-[40%] flex flex-col items-center gap-3'>
                            <div className='flex flex-col w-[90%] md:w-[80%] gap-1'>
                                <span className='readex text-[16px] md:text-[18px] xl:text-[20px]'>By Form</span>
                                <span className='readex text-[14px] md:text-[16px] xl:text-[18px]'>Use The Contact Form To Send Me A Message. <br />I'll Get Back To You Within 24 Hours.</span>
                            </div>
                            <div className='flex flex-col w-[90%] md:w-[80%] gap-1'>
                                <span className='readex text-[16px] md:text-[18px] xl:text-[20px]'>Hours</span>
                                <span className='readex text-[14px] md:text-[16px] xl:text-[18px]'>Mon-Fri, 9am-4pm EST</span>
                            </div>
                        </div>
                        <div className=' w-full xl:w-[60%] flex justify-center mt-10! md:mt-0!'>
                            {submitted ? (
                                // --- THANK YOU MESSAGE ---
                                <div className='flex flex-col items-center justify-center p-10 text-center md:items-start md:text-left md:w-[90%]'>
                                    <h2 className='rasa text-[30px] md:text-[40px] text-green-700'>Thank You!</h2>
                                    <p className='readex text-[16px] md:text-[18px] mt-4'>Your enquiry has been submitted successfully. <br /> We will get back to you shortly.</p>
                                    <button 
                                        onClick={() => setSubmitted(false)} 
                                        className='mt-6 border-2 p-1 ps-4 pe-4 rounded-full! text-black'
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                // --- CONTACT FORM ---
                                <form 
                                    ref={formRef}
                                    onSubmit={handleSubmit} 
                                    className='flex flex-col w-[90%] items-center md:items-start p-5! rasa text-[16px] md:text-[18px]'
                                >
                                    <div className=' mt-10 mb-10 md:w-[90%] flex flex-col md:flex-row justify-center'>
                                        <div className=' w-full md:w-[45%] flex flex-col justify-evenly md:h-60 '>
                                            <div className='flex flex-col '>
                                                <span><label htmlFor="name">Full Name *</label></span>
                                                <span>
                                                    <input 
                                                        type="text" 
                                                        name="name" 
                                                        required 
                                                        onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z ]/g, '')}
                                                        className='border-b-2 w-60 h-8 outline-none bg-transparent'
                                                    />
                                                </span>
                                            </div>
                                            <div className='flex flex-col '>
                                                <span><label htmlFor="email">Email *</label></span>
                                                <span><input type="email" name="email" required className='border-b-2 w-60 h-8 outline-none bg-transparent' /></span>
                                            </div>
                                            <div className='flex flex-col '>
                                                <span><label htmlFor="requirement">Type of Requirement</label></span>
                                                <span>
                                                    <select name="requirement" className='border-b-2 w-60 h-8 outline-none bg-transparent'>
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
                                                <span><label htmlFor="phone_no">Mobile Number *</label></span>
                                                <span>
                                                    <input 
                                                        type="text" 
                                                        name="phone_no" 
                                                        maxLength={10}
                                                        inputMode="numeric"
                                                        onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                                                        required 
                                                        className='border-b-2 w-60 h-8 outline-none bg-transparent'
                                                    />
                                                </span>
                                            </div>
                                            <div className='flex flex-col '>
                                                <span><label htmlFor="location">Location *</label></span>
                                                <span><input type="text" name="location" required className='border-b-2 w-60 h-8 outline-none bg-transparent' /></span>
                                            </div>
                                            <div className='flex flex-col'>
                                                <span><label htmlFor="message">Message (Optional)</label></span>
                                                <span><textarea name="message" className='border-b-2 w-60 h-7 outline-none bg-transparent'></textarea></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[80%] md:w-[80%] flex flex-col md:flex-row justify-center md:justify-around md:p-3 gap-2 md:gap-5'>
                                        <button 
                                            type="submit" 
                                            disabled={loading}
                                            className='border-2 p-1 ps-4 pe-4 rounded-full! text-black disabled:opacity-50'
                                        >
                                            {loading ? "Processing..." : "Request A Call Back"}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm