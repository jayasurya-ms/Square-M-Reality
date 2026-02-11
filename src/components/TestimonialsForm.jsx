import React from 'react'
import '../style/TestimonialsForm.css'
import Arrow from '../icon/Arrow'
import Form from './Form'

function TestimonialsForm() {
  return (
    <div id='testimonialsform-section' className='mb-10! mt-10!'>
        <div className='tform row d-flex h-100 w-100 p-0 m-0 flex justify-center items-center'>
            <div className='tform1 col-sm-12 col-md-6 d-flex flex-column align-items-center'>
                <div className='w-75 h-50 d-flex align-items-end'>
                    <span className='tform-text d-flex justify-content-center align-items-center readex border-2 rounded-pill border-dark m-1'>Testimonials</span>
                </div>
                <div className='w-75 h-50'>
                    <span className='tform-title readex'>We'd Love To Hear <br />From You</span>
                </div>
            </div>
            <div className='xl:h-60 w-50 max-sm:w-full! max-sm:h-full '>
                <Form tcolor={'black'}/>
            </div>
            <div className='tform3 col-sm-12 col-md-12 d-flex justify-content-center align-items-center position-relative flex-column'>
                <img src="src/assets/images/tform.png" alt="Background image"/>
                <div className='tform-btn-div position-absolute readex'>
                    <span>We Ae Excited To Connect With You</span>
                    <button className='tform-btn'>Get A Call Back <span className='flex justify-center items-center'><Arrow /></span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestimonialsForm
