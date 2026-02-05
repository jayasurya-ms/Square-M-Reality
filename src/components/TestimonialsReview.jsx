import React from 'react'
import '../style/TestimonialsReview.css'
import UpArrow from '../icon/UpArrow'
import { div } from 'framer-motion/client'

const reviews = [
  {
    id: 1,
    name: 'Liza Arora',
    photo: 'src/assets/images/review.png',
    date: 'March 18,2025',
    content: 'Та борлуулсан бүтээгдэхүүн орло гоосү йлчилгээнийхээ орлогоос ',
  },
  {
    id: 2,
    name: 'Liza Arora',
    photo: 'src/assets/images/review.png',
    date: 'March 18,2025',
    content: 'Та борлуулсан бүтээгдэхүүн орло гоосүйлчилгээнийхээ орлогоос ',
  },
  {
    id: 3,
    name: 'Liza Arora',
    photo: 'src/assets/images/review.png',
    date: 'March 18,2025',
    content: 'Та борлуулсан бүтээгдэхүүн орл огоос үйлчилгээнийхээ орлогоос ',
  },
  {
    id: 4,
    name: 'Liza Arora',
    photo: 'src/assets/images/review.png',
    date: 'March 18,2025',
    content: 'Та борлуулсан бүтээгдэхүүн орл огоос үйлчилгээнийхээ орлогоос ',
  },
]

function TestimonialsReview() {

  return (
    <div id='testimonialsreview-section' className='d-flex align-items-center justify-content-center'>
      <div className='treview d-flex flex-column gap-3'>
        <div className='treview-top d-flex align-items-center justify-content-center border border-2 rounded-pill'>
          <span className='text-light readex'>Testimonials</span>
        </div>
        <div className='treview-mid row p-0 m-0'>
          <div className='treview-mid-text col-sm-12 col-md-6 col-lg-6 p-0 m-0'>
            <span>Discover What <br />Our Customer Say</span>
          </div>
          <div className='treview-mid-text2 col-sm-12 col-md-6 col-lg-6 m-0 d-flex justify-content-end align-items-end'>
            <div className='treview-mid-link d-flex align-items-center justify-content-center'>
              <a href="" className='text-decoration-none readex text-dark d-flex align-items-center justify-content-center gap-2'>View All 
                <span className='d-flex justify-content-center align-items-center '><UpArrow /></span>
              </a>
            </div>
          </div>
        </div>
        <div className='treview-bot w-100 row m-0 d-flex align-items-center justify-content-evenly mt-3'>
          {reviews.map((review) => {
              return(
                  <div  key={review.id} className='col-sm-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center'>
                    <div className='treview-card d-flex flex-column gap-2 '>
                      <div className='treview-card-top'>
                        <img src="src\assets\images\review-bg.png" alt="" />
                      </div>
                      <div className='treview-card-mid d-flex align-items-center justify-content-center gap-1'>
                        <div className='treview-card-mid1 d-flex gap-1 rounded-pill align-items-center justify-content-center'>
                          <img src={`${review.photo}`} alt="" />
                          <span>{review.name}</span>
                          
                        </div>
                        <div className='treview-card-mid2 bg-light'></div>
                        <span className='treview-card-mid3 readex text-light'>{review.date}</span>
                      </div>
                      <div className='treview-card-bot p-3 w-100'>
                        <span className='w-100 readex text-light'>{review.content}</span>
                      </div>
                    </div>
                  </div>
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default TestimonialsReview
