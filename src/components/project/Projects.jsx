import React, { useState, useEffect } from 'react'
import UpArrow from '../../icon/UpArrow'
import Location from '../../icon/Location'
import { Link } from 'react-router-dom';
import API from '../../api/axiosInstance';


const Projects = () => {

    const [projectData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get('/projects/');
                setData(response.data);
            } catch (err) {
                setError(" Failed to load ");
                console.log("Fetch error :", err)
            }finally {
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    if(loading) return <div className='text-light p-5 text-center'>Loading....</div>
    if(error) return <div className='text-light p-5 text-center'>{error}</div>

  return (
    <div className='grid grid-cols-12 grid-flow-row w-full h-full xl:gap-15 max-sm:gap-3 md:gap-5'>
        {projectData.map((data) => {
            return(
                <div 
                    key={data.id}
                    className=' xl:col-span-6 row-span-4 col-span-12 md:col-span-6 rounded-3xl bg-cover bg-center bg-no-repeat flex justify-center items-center group xl:h-90 md:h-51'
                    style={{backgroundImage: `url(${data.image})`}}
                >
                    <div className=' xl:h-60 h-40 w-[50%] relative xl:opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                        <div className=' bg-[url(/src/assets/images/project-card.png)] bg-contain bg-no-repeat bg-center h-[95%] w-full absolute flex justify-center items-center'>
                            <div className=' size-[80%] flex flex-col gap-1 pt-1'>
                                <span className='bg-[#F4FF49] size-fit p-1 ps-3 pe-3 rounded-full text-[10px] xl:text-[14px]'>{data.status}</span>
                                <span className='readex xl:text-[18px] text-[14px] font-semibold'>{data.title}</span>
                                <span className='text-[16px] xl:block hidden h-19 overflow-y-hidden'>{data.description}</span>
                                <span className='flex items-center text-[10px] xl:text-[14px]'><Location size={16} />{data.location}</span>
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
