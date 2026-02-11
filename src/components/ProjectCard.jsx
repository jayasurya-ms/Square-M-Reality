import React from 'react'
import '../style/ProjectCard.css'
import UpArrow from '../icon/UpArrow'
import Location from '../icon/Location'

function ProjectCard({data,clr}) {
    const divstyle = {
        left: data.id % 2 == 0 ? '7%' : '',
        right: data.id % 2 == 0 ? '' : '7%',
    };

  return (
    <div className='project-card w-100 h-100' key={data.id}>
      <div className='project position-relative w-100 h-100' style={{backgroundImage: `url(${data.image})`}}>
        <div className='project-content-div position-absolute d-flex flex-column' style={divstyle}>
          <div className='h-100 d-flex flex-column p-4 gap-1 justify-content-cengter align-items'>
            <span className='card-status readex d-flex rounded-pill justify-content-center align-items-center ' style={{ backgroundColor: clr.s_color || '#F4FF49',  color: clr.s_color == '#5A3523' ? 'white' : 'black'}}>{data.status}</span>
            <span className='card-title readex ps-1'>{data.title}</span>
            <span className='card-line'></span>
            <span className='card-des readex ps-1'>{data.description}</span>
            <span className='card-location readex ps-1 d-flex gap-1 align-items-center'><Location size={14}/>{data.location}</span>
          </div>
          <span className='position-absolute d-flex align-items-center justify-content-center' style={{ backgroundColor: clr.b_color || '#F4FF49' }}><UpArrow size={46} color={clr.a_color}/></span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
