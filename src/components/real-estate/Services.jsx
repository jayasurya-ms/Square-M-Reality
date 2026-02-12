import React, { useEffect, useState } from 'react'
import API from '../../api/axiosInstance.js';
import '../../style/Services.css'
import Arrow from '../../icon/Arrow.jsx'
import UpArrow from '../../icon/UpArrow.jsx'
import { Link } from 'react-router-dom';


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
    <div id='i-services-section' className='bg-[url(src/assets/images/real-estate.jpg)] bg-cover bg-center overflow-hidden xl:h-screen  max-sm:h-full relative'>
      <div className='absolute inset-0 bg-black/30 '></div>
      <div className='services h-100 w-100 d-flex flex-column align-items-center justify-content-center'>
        <div className='service-top row w-100'>
          <div className='col-sm-12 col-md-6 p-0'>
            <div className='service-top2 d-flex align-items-start w-100'>
              <span className='service-title readex text-white ps-5 mt-10! w-100'>Services We <br />Offer</span>
            </div>
          </div>
          <div className='col-sm-12 col-md-6 p-0 relative'>
            <div className='service-top3 xl:flex xl:mt-20! md:mt-10!'>
              <div className='xl:text-[18px] max-sm:text-[14px] readex xl:w-[80%] md:w-full max-sm:w-full flex flex-col gap-2 max-sm:items-center'>
                <span className='xl:w-[90%] max-sm:w-[80%] md:w-[70%] p-1 text-white'>
                  Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой
                </span>    
              </div>
            </div>
            <div className='h-50 md:flex max-sm:flex align-items-center relative z-10 justify-content-center gap-2 ps-5 xl:hidden max-sm:mt-15! md:mb-1!'>
              <div><Link className='text-white readex'  to="">Services </Link ></div>
              <button className='card-prev border-0 rounded-circle d-flex' onClick={handlePrev}><Arrow size={20} /></button>
              <button className='card-next border-0 rounded-circle d-flex' onClick={handleNext}><Arrow size={20} /></button>
            </div>
          </div>
        </div>
        <div className='service-bottom d-flex' style={{ height: '450px', width: '85%', position: 'relative', overflow: 'visible' }}>
          {servicesData.map((service, index) => {
            const relPos = getCardPosition(index);
            
            // Adjust this percentage (e.g., 25% or 330px) depending on your card width
            const xOffset = relPos * 105; 

            return (
              <div
                key={service.id}
                className={`card position-absolute`}
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
                      <a href={`/${service.slug}`} className='card-button position-absolute text-decoration-none d-flex align-items-center justify-content-center'><UpArrow size={30} /> </a>
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
                      className={`${i % 8 < 4 ? 'bg-[#305297]' : 'bg-[#99bcdb]'}`} 
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