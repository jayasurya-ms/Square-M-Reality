import React from 'react'
import '../style/HomeFooter.css'
import Footer from './Footer'

function HomeFooter() {
  return (
    <div id='homefooter-section' className='d-flex align-items-end border'>
      <div className='hfooter w-100 position-relative bg-white d-flex flex-column'>
        <div className='hfooter-title position-absolute'>SquareM</div>
        <div className='d-flex flex-column align-items-center'>
            <div className='hfooter-head readex d-flex flex-column align-items-center justify-content-center'>
                <span>Your Dream</span>
                <span>Awaits</span>
            </div><br />
            <div className='hfooter-body'>
                <span>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter
