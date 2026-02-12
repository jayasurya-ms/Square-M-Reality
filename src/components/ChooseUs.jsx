import React from 'react'
import '../style/ChooseUs.css'
import Thumb from '../icon/Thumb'


function ChooseUs() {
  return (
    <div id='chooseus-section' className='d-flex'>
      <div className='chooseus row m-0'>
        <div className='chooseus-left col-sm-12 col-md-6 col-lg-6 d-flex align-items-center'>
            <div className='chooseus-left1 d-flex'>
                <span className='position-absolute readex border-2 p-2 ps-3 pe-3 rounded-pill border-dark'>Why Choose Us</span>
                <img src="src/assets/images/chooseus.png" alt="" className='w-100 h-100 m-0' />
            </div>
        </div>
        <div className='chooseus-right col-sm-12 col-md-6 col-lg-6 d-flex align-items-center'>
            <div className="chooseus-right1 d-flex gap-3 flex-column p-2 w-100">
                <div className='chooseus-right-top readex'>
                    <span>What Makes Us<br />Different</span>
                </div>
                <div className='chooseus-right-mid readex'>
                    <span>Та hello Welcome үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой нд хувь төлөхгүй бөгөөд программ ашиглалтын</span>
                </div>
                <div className='chooseus-right-bot d-flex p-0 m-0'>
                    <div className='chooseus-right-bot1 d-flex flex-column'>
                        <div className='d-flex flex-coloumn gap-2'>
                            <span className='d-flex justify-content-center align-items-center rounded-circle'><Thumb/></span>
                            <p className='readex'>Corporate<br />resposibility</p>
                        </div>
                        <div className='d-flex flex-coloumn gap-2'>
                            <span className='d-flex justify-content-center align-items-center rounded-circle'><Thumb/></span>
                            <p className='readex'>Corporate<br />resposibility</p>
                        </div>
                        <div className='d-flex flex-coloumn gap-2'>
                            <span className='d-flex justify-content-center align-items-center rounded-circle'><Thumb/></span>
                            <p className='readex'>Corporate<br />resposibility</p>
                        </div>
                        <div className='d-flex flex-coloumn gap-2'>
                            <span className='d-flex justify-content-center align-items-center rounded-circle'><Thumb/></span>
                            <p className='readex'>Corporate<br />resposibility</p>
                        </div>
                    </div>
                    <div className='chooseus-right-bot2 d-flex'></div>
                    <div className='chooseus-right-bot3 readex d-flex flex-column gap-2 p-1 m-0'>
                        <p>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд </p>
                        <p>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд </p>
                        <p>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд </p>
                        <p>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
