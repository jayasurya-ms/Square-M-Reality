import React, { useState, useEffect } from 'react';
import '../../style/Projects.css';
import Arrow from '../../icon/Arrow';
import ProjectCard from '../ProjectCard';
import { Link } from 'react-router-dom';
import API from '../../api/axiosInstance';

// 1. Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

    const clr = {
        s_color : '#5A3523',
        b_color : '#000000',
        a_color : '#ffffff',
    }


const Projects = () => {
    const [projectdata, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch Data from Django Backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await API.get('/projects/');
                setData(response.data);
                
                // Refresh AOS after data is set so it detects the new DOM elements
                setTimeout(() => {
                    AOS.refresh();
                }, 100);
            } catch (err) {
                setError("Failed to Load Data");
                console.log("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Initialize AOS 
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            easing: 'ease-out-back'
        });
    }, []);

    if (loading) return <div className="text-light p-5 text-center">Loading Projects...</div>;
    if (error) return <div className="text-danger p-5 text-center">{error}</div>;

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
                    {/* Safe mapping: ensures the app doesn't crash if backend returns fewer than 3 projects */}
                    {projectdata.slice(0, 3).map((project, index) => (
                        <div 
                            key={project.id} 
                            className={`d-flex w-100 h-100 ${index % 2 === 0 ? 'justify-content-start' : 'justify-content-end'}`} 
                            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        >
                            <div className={`projects-mid${index + 1}`}>
                                <ProjectCard data={project} clr={clr}/>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='projects-bot d-flex align-item-center justify-content-center p-3'>
                    <a href='/projects' className='readex p-1 ps-3 pe-3 border-0 rounded-pill d-flex align-items-center gap-1 outline-6 outline-white/40 bg-[#5A3523] text-white!'>
                        View All Works 
                        <span className='projects-bot-arrow d-flex align-items-center justify-content-center'>
                            <Arrow />
                        </span> 
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;