import React from 'react'
import '../style/AboutUs.css'
import UpArrow from '../icon/UpArrow'
import { Link } from 'react-router-dom';


function AboutUs() {
  return (
    <div id='aboutus' className='border-4 border-light'>
        <div className='about row d-flex align-items-center justify-content-center mt-5'>
            <div className='about-left col-xl-6 col-sm-12 col-md-12 d-flex gap-3 flex-column align-items-center justify-content-center'>
                <div className='about-left1 p-3 readex pt-1 pb-1 rounded-pill border-2 border-dark shadow '>
                    <span> About Us </span>
                </div>
                <div className='about-left2 w-75 readex'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non laudantium, impedit natus ullam, porro deserunt vitae, rem eius voluptate autem eos voluptatum. Quo repellat odio esse quasi consectetur fugit mollitia!</p>
                </div>
            </div>
            <div className='about-right col-xl-6 col-sm-12 col-md-12 d-flex gap-3 flex-column align-items-center justify-content-center'>
                <div className='about-right1 w-75 readex'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo voluptas aliquid animi odio soluta modi quos eligendi voluptates illo aliquam repellendus ipsum </p>
                </div>
                <div className='about-right2 w-75 readex'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sint architecto eligendi praesentium dolores facilis dolorum incidunt ex ut. At labore laudantium, enim maxime itaque </p>
                </div>
                <div className='about-right3'>
                    <Link to='' className='d-flex readex rounded-pill border-dark border-2 shadow p-2 pe-4 ps-4 align-items-center justify-content-center gap-2'>
                        <div>Meet The Plan</div>
                        <div className='about-right3-arrow rounded-circle d-flex p-1 justify-content-center'>
                        <UpArrow size={23}/>
                        </div>
                     </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
