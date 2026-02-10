import React from 'react'
import UpArrow from '../../icon/UpArrow'
import Location from '../../icon/Location'
import { Link, useNavigate } from 'react-router-dom';


const projectData = [
    {
        id: 1,
        status: 'Completed',
        pname: 'Greenview Apartments',
        des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        loc: 'Bangalore',
        img: 'src/assets/images/p-project1.png',
        slug: 'greenview-appartments'
    },
    {
        id: 2,
        status: 'Completed',
        pname: 'Greenview Apartments',
        des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        loc: 'Bangalore',
        img: 'src/assets/images/p-project2.png',
        slug: 'greenview-appartments'
    },
    {
        id: 3,
        status: 'Completed',
        pname: 'Greenview Apartments',
        des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        loc: 'Bangalore',
        img: 'src/assets/images/p-project3.png',
        slug: 'greenview-appartments'
    },
    {
        id: 4,
        status: 'Completed',
        pname: 'Greenview Apartments',
        des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        loc: 'Bangalore',
        img: 'src/assets/images/p-project4.png',
        slug: 'greenview-appartments'
    },
    {
        id: 5,
        status: 'Completed',
        pname: 'Greenview Apartments',
        des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        loc: 'Bangalore',
        img: 'src/assets/images/p-project5.png',
        slug: 'greenview-appartments'
    },
    {
        id: 6,
        status: 'Completed',
        pname: 'Greenview Apartments',
        des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд ',
        loc: 'Bangalore',
        img: 'src/assets/images/p-project6.png',
        slug: 'greenview-appartments'
    },
]


function Projects() {
    const navigate = useNavigate();
  return (
    <div className='grid grid-cols-12 grid-rows-12 w-full h-full xl:gap-15 max-sm:gap-3 md:gap-5'>
        {projectData.map((data, index) => {
            return(
                <div 
                    key={index}
                    className=' xl:col-span-6 row-span-4 col-span-12 md:col-span-6 rounded-3xl bg-cover bg-center bg-no-repeat flex justify-center items-center group '
                    style={{backgroundImage: `url(${data.img})`}}
                >
                    <div className='xl:h-60 h-40 w-[50%] relative xl:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                        <div className=' bg-[url(src/assets/images/project-card.png)] bg-contain bg-no-repeat bg-center h-[95%] w-full absolute flex justify-center items-center'>
                            <div className=' size-[80%] flex flex-col gap-1 pt-1'>
                                <span className='bg-[#F4FF49] size-fit p-1 ps-3 pe-3 rounded-full text-[10px] xl:text-[14px]'>{data.status}</span>
                                <span className='readex xl:text-[20px] text-[14px] font-semibold'>{data.pname}</span>
                                <span className='text-[16px] xl:block hidden'>{data.des}</span>
                                <span className='flex items-center text-[10px] xl:text-[14px]'><Location size={16} />{data.loc}</span>
                            </div>
                        </div>
                        <div className='absolute xl:bottom-0 xl:left-49 bottom-4 left-25'>
                            <Link to={`/projects/${data.slug}`}  className='bg-[#F4FF49] xl:size-12 size-7 flex rounded-full justify-center items-center'><UpArrow size={32}/> </Link>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Projects
