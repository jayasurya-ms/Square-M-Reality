import React ,{useEffect}from 'react'
import '../../style/Projects.css'
import Arrow from '../../icon/Arrow'
import ProjectCard from '../ProjectCard'
import { Link } from 'react-router-dom';



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
        button: 'Link ',
        right : '7%',
        s_color : '#5A3523',
        b_color : '#000000',
        a_color : '#ffffff',
    },
    {
        id: 2,
        status: 'Completed',
        title: 'Greenview Apartments',
        des: 'борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        location: 'Bangalore',
        img: 'src/assets/images/project2.png',
        button: 'Link ',
        left : '7%',
        s_color : '#5A3523',
        b_color : '#000000',
        a_color : '#ffffff',
    },
    {
        id: 3,
        status: 'Completed',
        title: 'Greenview Apartments',
        des: 'борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        location: 'Bangalore',
        img: 'src/assets/images/project3.png',
        button: 'Link ',
        right : '7%',
        s_color : '#5A3523',
        b_color : '#000000',
        a_color : '#ffffff',
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
    <div id='projects-section' className='bg-[#EAE5DF]'>
      <div className='projects'>
        <div className='projects-top d-flex max-sm:flex-col md:flex-row xl:flex-row gap-3 align-items-center'>
            <div className='xl:w-[50%] md:w-[50%] max-sm:w-full'>
                <span className='text-black rasa xl:text-[80px] md:text-[50px] max-sm:text-[40px]'>Our Projects</span>
            </div>
            <div className='xl:w-[50%] md:w-[50%] max-sm:w-full flex xl:justify-center'>
                <div className='xl:w-[60%] '>
                    <span className='text-black readex xl:text-[18px] md:text-[15px] max-sm:text-[14px]'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой</span>
                </div>
            </div>
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
            <Link to='' className='readex p-1 ps-3 pe-3 border-0 rounded-pill d-flex align-items-center gap-1 outline-6 outline-white/40 bg-black text-white'>View All Works <span className='projects-bot-arrow d-flex align-items-center justify-content-center'><Arrow/></span> </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects