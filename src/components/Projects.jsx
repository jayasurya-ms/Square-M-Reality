import React, { useState, useEffect } from 'react';
import '../style/Projects.css';
import Arrow from '../icon/Arrow';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';
import API from '../api/axiosInstance';

// 1. Import AOS and its CSS
import AOS from 'aos';
import 'aos/dist/aos.css';

    const clr = {
        s_color : '#F4FF49',
        b_color : '#F4FF49',
        a_color : '#000000',
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
        <div id='projects-section' className='bg-black'>
            <div className='projects'>
                <div className='projects-top d-flex flex-column gap-3 align-items-center'>
                    <span className='projects-title rounded-pill border-3 readex p-1 ps-3 pe-3 text-light'>Our Projects</span>
                    <span className='projects-des readex fw-bold text-light'>Discover Some Of Our Projects</span>
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
                    <a href='/projects' className='readex p-1 ps-3 pe-3 border-0 rounded-pill d-flex align-items-center gap-1 outline-6 outline-white/40 bg-[#F4FF49] text-black!'>
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