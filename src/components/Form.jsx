import React, { useState, useRef } from 'react'
import '../style/Form.css'
import Arrow from '../icon/Arrow'
import API from '../api/axiosInstance';

const Form = ({tcolor}) => {
    // New states for feedback
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData.entries());

        // --- CUSTOM VALIDATION LOGIC ---
        // 1. Validate Phone Number (Basic example: must be at least 8 digits)
        if (payload.phone_no.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }

        // 2. Validate Email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(payload.email)) {
            alert("Please enter a valid email address.");
            return;
        }
        // -------------------------------

        setLoading(true); // Start loading

        console.log('trying to post', payload);

        try {
            const response = await API.post('/postenquiry/', payload);
            if (response.status === 200 || response.status === 201) {
                console.log("Form Submitted Successfully!", response.data);
                formRef.current.reset(); // Clear all fields
                setSubmitted(true); // Switch to thank you message
            }
        } catch (err) {
            console.error("Submission error:", err);
            alert("Submission failed. Please check your connection.");
        } finally {
            setLoading(false); // Stop loading
        }
    };

  return (
    <div className='tform2 col-sm-12 col-md-6 d-flex justify-content-center h-100 w-100'>
        {submitted ? (
            <div className='d-flex flex-column justify-content-center align-items-center text-center w-100 h-100'>
                <h2 style={{color: tcolor}}>Thank You!</h2>
                <p style={{color: tcolor}}>Your enquiry has been sent successfully.</p>
            </div>
        ) : (
            <form ref={formRef} onSubmit={handleSubmit} method="post" className='row h-100 m-0 w-100'>
                <div className='w-100 h-50 d-flex align-items-end col-sm-12 max-sm:w-full'>
                    <span className='tform-des max-sm:w-full'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой</span>
                </div>
                <div className='tform-elements row w-100 h-50'>
                    <div className='col-sm-12 col-md-12 col-lg-6 p-0 d-flex flex-column justify-content-evenly align-items-center'>
                        <input 
                            type="text" 
                            name='name' 
                            placeholder='Your Name' 
                            inputMode='text' 
                            // Allowing A-Z, a-z, and spaces
                            pattern='[A-Za-z ]*' 
                            onInput={(e) => e.target.value = e.target.value.replace(/[^A-Za-z ]/g, '')} 
                            style={{backgroundColor:tcolor}} 
                            required
                        />
                        
                        <input 
                            type="text" 
                            name='phone_no' 
                            placeholder='Phone Number ' 
                            maxLength={10} 
                            inputMode="numeric"
                            pattern="[0-9]*"
                            onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                            style={{backgroundColor:tcolor}} 
                            required
                        />
                    </div>
                    <div className='col-sm-12 col-md-12 p-0 col-lg-6 d-flex flex-column justify-content-evenly align-items-center'>
                        <input type="email" name='email' placeholder='Email' style={{backgroundColor:tcolor}} required/>
                        <input type="text" name='message' placeholder='Your Enquiry About' style={{backgroundColor:tcolor}} required/>
                    </div>
                </div>
                <div className='tform-btn-div readex flex justify-evenly items-center gap-2 md:gap-0'>
                    <span>We Ae Excited To Connect With You</span>
                    <button className='tform-btn' type='submit' disabled={loading} style={{color: tcolor}}>
                        {loading ? "Sending..." : "Get A Call Back"} 
                        <span className='flex justify-center items-center'>
                            <Arrow />
                        </span>
                    </button>
                </div>
            </form>
        )}
    </div>
  )
}

export default Form