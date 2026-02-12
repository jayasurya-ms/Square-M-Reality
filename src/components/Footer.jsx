import React from 'react'
import '../style/Footer.css'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div id='footer-section' className='w-100 h-100'>
        <div className='footer row d-flex align-items-center m-0'>
            <div className='footer1 col-md-4 col-sm-12 d-flex justify-content-between align-items-center'>
                <div className='d-flex flex-column gap-1'>
                    <span className='footer1-title readex text-light'>Builders</span>
                    <span className='footer1-des readex text-light'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ </span>
                </div>
                <span className='bg-light h-75'></span>
            </div>
            <div className='footer2 col-md-4 col-sm-12 d-flex justify-content-center gap-1'>
                <div className='d-flex justify-content-center align-items-center'>
                    <nav className='footer-nav1 h-75'>
                        <ul className='d-flex w-100 h-100 justify-content-between readex list-unstyled flex-column'>
                            <li><a href="/">Home </a></li>
                            <li><a href="">About Us </a></li>
                            <li><a href="/blogs">Blogs</a></li>
                            <li><a href="/construction">Construction </a></li>
                            <li><a href="/real-estate">Real Estate </a></li>
                            <li><a href="/interior-designing">Interior Designing </a></li>
                        </ul>
                    </nav>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <nav className='footer-nav2 h-75'>
                        <ul className='d-flex w-100 h-100 justify-content-between readex list-unstyled flex-column'>
                            <li><a href="">Support </a></li>
                            <li><a href="">Term & Conditions </a></li>
                            <li><a href="">Privacy Policy </a></li>
                            <li><a href="">New 7 Updates </a></li>
                            <li><a href="/contact">Contact </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='footer3 col-md-4 col-sm-12 d-flex justify-content-between align-items-center'>
                <span className='bg-light h-75'></span>
                <div className='p-1 d-flex flex-column justify-content-between'>
                    <div className='footer3-top text-light d-flex flex-column gap-2 readex'>
                        <a href='tel:+918754213265' className='footer3-phone text-white no-underline!'>+91-125463987</a>
                        <a href='mailto:squareM@gmail.com' className='footer3-email text-white no-underline!'>Squarem reality@builders.com</a>
                    </div>
                    <div className='footer3-bot w-50 d-flex gap-3 readex'>
                        <div className='footer3-social-media d-flex flex-column gap-3'>
                            <Link to="">Facebook </Link>
                            <Link to="">Twitter </Link>
                        </div>
                        <div className='footer3-social-media d-flex flex-column gap-3'>
                            <Link to="">Instagram </Link>
                            <Link to="">Youtube </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
