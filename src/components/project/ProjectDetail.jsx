import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import Play from './../../icon/Play';
import Phone from './../../icon/Phone';
import {motion} from 'framer-motion';

function ProjectDetail() {
  const { slug } = useParams()

  return (
    <div id="projectdetail-section" className="h-screen w-full">
      <div className=" size-full flex flex-col md:flex-row">

        {/* LEFT */}
        <motion.div
          className="bg-purple-100 w-full h-[50%] md:h-full md:w-[75%] flex flex-col justify-between relative overflow-hidden"
          initial={{ x: '-50%'}}
          animate={{ x: 0}}
          transition={{ duration: 0.5, delay : 0.5}}
          >

          {/* Bg img */}
          <div className="absolute inset-0 bg-[url('/src/assets/images/p-project1.png')] bg-cover bg-center bg-no-repeat z-0" />

          {/* Content */}
          {/* top */}
          <motion.div
            className="relative w-full flex justify-between"
            initial={{opacity: 0 , y: -100}}
            animate={{ opacity: 1 , y: 0}}
            transition={{duration: 0.4, delay: 1}}
            >
            <div>
              <img src="/src/assets/images/logo.png" alt="Logo" className='md:h-17.5 md:w-17.5 h-15 w-16'/>
            </div>
            <div className='w-[93%]'>
              <Navbar />
            </div>
          </motion.div>

          {/* mid */}
          <motion.div
            className="relative w-full flex justify-center items-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.4, delay: 0.8}}
            >
            <a href="" className='bg-[url(/src/assets/images/hero-bg.png)] bg-cover bg-center h-14 w-30 md:h-16 md:w-40 outline-1 flex flex-col rounded-full justify-center items-center text-white no-underline!'><span><Play /></span><span>Watch Now</span></a>
          </motion.div>

          {/* bot */}
          <div className="relative w-full">
            <div className='flex m-4 text-white'><span><Phone color={'white'}/></span><span>1203654789</span></div>
          </div>

        </motion.div>

        {/* RIGHT */}
        <div className=" w-full h-[50%] md:h-full md:w-[25%] flex flex-col">
          <div className='h-[10%] w-full hidden md:flex justify-center items-center'>
            <div className=' btn-bg-clr p-1 ps-3 pe-3 rounded-full text-[18px] readex'>Get In Touch</div>
          </div>
          <div className='h-full md:h-[90%] w-full flex flex-col justify-between items-center'>
            <div className='w-[90%] flex flex-col gap-1 items-center md:items-start mt-3'>
              <span className='btn-bg-clr p-1 ps-3 pe-3 rounded-full w-min'>status</span>
              <span className='text-[16px] md:text-[20px] xl:text-[24px] readex font-bold'>title</span>
              <span className='text-[14px] md:text-[16px] xl:text-[18px]'>des</span>
              <a href="" className='p-2 ps-3 pe-3 rounded-full bg-black w-[70%] text-white no-underline! text-center'>Book Now</a>
            </div>
            <div className='w-[90%] md:mb-4! md-2! flex flex-col gap-2'>
              <div className='flex flex-col'>
                <span className='text-[14px] md:text-[16px] xl:text-[18px] font-semibold'>By Email</span>
                <span className='text-[12px] md:text-[14px] xl:text-[16px] '>Squarem Reality@Builders.Com</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-[14px] md:text-[16px] xl:text-[18px] font-semibold'>On Social Media </span>
                <span className='text-[12px] md:text-[14px] xl:text-[16px] '>Squarem Reality@Builders.Com</span>
              </div>
              <div className='flex flex-col'>
                <span className='text-[14px] md:text-[16px] xl:text-[18px] font-semibold'>Hours</span>
                <span className='text-[12px] md:text-[14px] xl:text-[16px] '>Mon-Fri, 9am - 4pm EST</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
