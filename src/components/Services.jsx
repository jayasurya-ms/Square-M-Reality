import React, { useEffect, useState } from 'react'
import '../style/Services.css'
import Arrow from '../icon/Arrow.jsx'
import UpArrow from '../icon/UpArrow.jsx'
import { Link } from 'react-router-dom';
import API from '../api/axiosInstance.js';

const Services = () => {

  const [servicesData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('/services/')
        setData(response.data)
      } catch (err) {
        setError("error in fetching")
        console.log("fetch error :",err)
      }finally{
        setLoading(false)
      }
    };
    fetchData();
  } ,[])

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % servicesData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + servicesData.length) % servicesData.length);
  };

  const getCardPosition = (index) => {
    const total = servicesData.length;
    // relativeIndex tells us if the card is 1st, 2nd, 3rd, or 4th in the current sequence
    return (index - currentIndex + total) % total;
  };

  if (loading) return <div className="text-light p-5 text-center">Loading Projects...</div>;
  if (error) return <div className="text-danger p-5 text-center">{error}</div>;

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
              <div><Link className='text-white readex no-underline!'  to="">Services </Link ></div>
              <button className='card-prev border-0 rounded-circle d-flex' onClick={handlePrev}><Arrow size={20} /></button>
              <button className='card-next border-0 rounded-circle d-flex' onClick={handleNext}><Arrow size={20} /></button>
            </div>
          </div>
        </div>
        <div className='service-bottom flex items-center justify-center!' style={{ height: '600px', width: '90%', position: 'relative', overflow: 'visible' }}>
          {servicesData.map((service, index) => {
            const relPos = getCardPosition(index);
            
            // Adjust this percentage (e.g., 25% or 330px) depending on your card width
            const xOffset = relPos * 105; 

            return (
              <div
                key={service.id}
                className={`card position-absolute bg-amber-800`}
                style={{
                  transition: 'all 0.5s ease-in-out',
                  left: '0',
                  // Map each relative index to a horizontal position
                  transform: `translateX(${xOffset}%)`,
                  zIndex: relPos === 0 ? 2 : 1,
                  opacity: 1 // Keep all 4 visible
                }}>
                <div className='card-div d-flex'>
                  <div className='card-div-left d-flex flex-column'>
                    <div className='card-div-left1 position-relative'>
                      <div className='card-div-img position-absolute'>
                        <img src={service.image} alt={service.title} className='h-100 w-100' />
                      </div>
                      <a  href={`/${service.slug}`} className='card-button position-absolute text-decoration-none d-flex align-items-center justify-content-center'><UpArrow size={30} /> </a >
                    </div>
                    <div className='card-content readex'>
                      <div className='content-title readex'>{service.title}</div>
                      <div className='content-description readex'>{service.description}</div>
                    </div>
                    <a href={`/${service.slug}`} className='card-viewall readex text-decoration-none d-flex align-items-center justify-content-center p-2'><span>View All</span> </a>
                  </div>
                  <div className='card-div-right'>
                    {Array.from({ length: 24 }, (_, i) => (
                      <span 
                        key={i} 
                        className='bg-[#F4FF49]' 
                      />
                    ))}
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