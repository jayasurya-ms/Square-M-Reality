import React, { useState } from 'react'
import '../style/Services.css'
import Arrow from '../icon/Arrow.jsx'
import UpArrow from '../icon/UpArrow.jsx'


const servicesData = [
  {
    id: 1,
    title: 'Construction ',
    description: 'ашиглалтын суурь хураамжа төлөөд явах боломжтой',
    img: 'src/assets/images/construction-img.png',
    button: 'A'
  },
  {
    id: 2,
    title: 'Interior Designing',
    description: 'ашиглалтын суурь хураамжа төлөөд явах боломжтой',
    img: 'src/assets/images/interior-img.png',
    button: 'B'
  },
  {
    id: 3,
    title: 'Contracting',
    description: 'ашиглалтын суурь хураамжа төлөөд явах боломжтой',
    img: 'src/assets/images/contracting-img.png',
    button: 'C'
  },
  {
    id: 4,
    title: 'Real Estate',
    description: 'ашиглалтын суурь хураамжа төлөөд явах боломжтой',
    img: 'src/assets/images/real-estate-img.png',
    button: 'D'
  }
]
 
function Services() {
  // Start with the second card (index 1) as active
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState('transform 0.3s ease-in-out');

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length);
  };

  const getCardPosition = (index) => {
    const total = servicesData.length;
    const relativeIndex = (index - currentIndex + total) % total;
    
    // For tablet view (2 cards)
    if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
      if (index === currentIndex) return 'active';
      if (index === (currentIndex + 1) % total) return 'next';
      return 'hidden';
    }
    
    // For desktop (3 cards)
    if (index === currentIndex) return 'active';
    if (index === (currentIndex + 1) % total) return 'next';
    if (index === (currentIndex - 1 + total) % total) return 'prev';
    
    return 'hidden';
  };
  return (
    <div id='services-section'>
      <div className='service position-absolute w-100 h-100'></div>
        <div className='services h-100 w-100 d-flex flex-column align-items-center justify-content-center'>
            <div className='service-top row w-100'>
                <div className='col-sm-12 col-md-6 p-0'>
                    <div className='service-top1 d-flex justify-content-start p-3'>
                      <span className='service-what readex border-2 border-light text-light rounded-pill p-1 ps-3 pe-3 me-5'>What We Offer</span>
                    </div>
                    <div className='service-top2 d-flex align-items-start'>
                      <span className='service-title rasa text-white ps-5'>Services We Offer</span>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6 p-0'>
                    <div className='service-top3'></div>
                    <div className='h-50 d-flex align-items-center justify-content-center gap-2 ps-5'>
                        <div><a className='text-white readex' href="">view all services</a></div>
                        <button className='card-prev border-0 rounded-circle d-flex' onClick={handlePrev}><Arrow size={20}/></button>
                        <button className='card-next border-0 rounded-circle d-flex' onClick={handleNext}><Arrow size={20}/></button>
                    </div>
                </div>
            </div>
            <div className='service-bottom d-flex' style={{ height: '600px', overflow: 'visible' }}>
                {servicesData.map((service, index) => {
                  const position = getCardPosition(index);
                  return (
                    <div 
                      key={service.id} 
                      className={`card position-absolute ${position}`}
                      style={{
                        transition: 'all 0.5s ease-in-out',
                        zIndex: position === 'active' ? 2 : position === 'next' ? 1 : 0,
                        opacity: position === 'hidden' ? 0 : 1,
                        transform: position === 'active' ? 'translateX(0) scale(1)' : 
                                  position === 'next' ? 'translateX(120%) scale(1)' : 
                                  position === 'prev' ? 'translateX(-120%) scale(1)' : 'translateX(0) scale(1)'
                      }}>
                      <div className='card-div d-flex'>
                        <div className='card-div-left d-flex flex-column'>
                          <div className='card-div-left1 position-relative'>
                            <div className='card-div-img position-absolute'>
                              <img src={service.img} alt={service.title} className='h-100 w-100'/>
                            </div>
                            <a href={service.button} className='card-button position-absolute text-decoration-none d-flex align-items-center justify-content-center'><UpArrow size={30}/></a>
                          </div>
                          <div className='card-content readex'>
                            <div className='content-title readex'>{service.title}</div>
                            <div className='content-description readex'>{service.description}</div>
                          </div>
                          <a href='' className='card-viewall readex text-decoration-none d-flex align-items-center justify-content-center p-2'><span>View All</span></a>
                        </div>
                        <div className='card-div-right'>
                          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
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

export default Services
