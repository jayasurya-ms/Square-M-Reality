import React ,{useEffect}from 'react'
import '../style/Projects.css'
import Arrow from '../icon/Arrow'
import ProjectCard from './ProjectCard'

// 1. Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const projectdata = [
    {
        id: 1,
        status: 'Completed',
        title: 'Greenview Apartments',
        des: 'борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        location: 'Bangalore',
        img: 'src/assets/images/project1.png',
        button: 'link',
        right : '7%',
    },
    {
        id: 2,
        status: 'Completed',
        title: 'Greenview Apartments',
        des: 'борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        location: 'Bangalore',
        img: 'src/assets/images/project2.png',
        button: 'link',
        left : '7%',
    },
    {
        id: 3,
        status: 'Completed',
        title: 'Greenview Apartments',
        des: 'борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        location: 'Bangalore',
        img: 'src/assets/images/project3.png',
        button: 'link',
        right : '7%'
    },
]

function Projects() {

    // 2. Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // how long the animation takes
            once: false,     // whether animation should happen only once - set to false for exit/re-entry
            mirror: true,    // whether elements should animate out while scrolling past them
            easing: 'ease-out-back' // This creates the "Spring/Bounce" effect
        });
    }, []);
    
  return (
    <div id='projects-section'>
      <div className='projects'>
        <div className='projects-top d-flex flex-column gap-3 align-items-center'>
            <span className='projects-title rounded-pill border-3 readex p-1 ps-3 pe-3 text-light'>Our Projects</span>
            <span className='projects-des readex fw-bold text-light'>Discover Some Of Our Projects</span>
        </div>
        <div className='projects-mid d-flex flex-column gap-5 justify-content-evenly pt-3 pb-3'>
            <div className='d-flex w-100 h-100 justify-content-start' data-aos="fade-right">
                <div className='projects-mid1'><ProjectCard data={projectdata[0]}/></div>
            </div>
            <div className='d-flex w-100 h-100 justify-content-end' data-aos="fade-left">
                <div className='projects-mid2'><ProjectCard data={projectdata[1]}/></div>
            </div>
            <div className='d-flex w-100 h-100 justify-content-start' data-aos="fade-right">
                <div className='projects-mid3'><ProjectCard data={projectdata[2]}/></div>
            </div>
        </div>
        <div className='projects-bot d-flex align-item-center justify-content-center p-3'>
            <a href='' className='readex p-1 ps-3 pe-3 border-0 rounded-pill d-flex align-items-center gap-1 outline-6 outline-white/40'>View All Works <span className='projects-bot-arrow d-flex align-items-center justify-content-center'><Arrow/></span></a>
        </div>
      </div>
    </div>
  )
}

export default Projects