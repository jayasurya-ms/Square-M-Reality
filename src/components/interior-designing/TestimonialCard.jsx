import React from 'react'
import Star from '../../icon/Star'; 
function TestimonialCard({data}) { 
  
const loc = data.avatar_loc;
 
return ( 
<div id='testimonialcard' className={`size-full flex ${loc == 'top' ? 'justify-end flex-col' : loc == 'left' ? 'flex-row justify-end items-center' : 'flex-row '}`}>
  <div className={`bg-white shadow-2xl relative flex rounded-3xl ${loc == 'top' ? 'flex-row w-full h-[75%] justify-center items-center' : loc == 'left' ? 'flex-col w-[75%] h-full justify-center items-end' : 'flex-col w-[75%] h-full justify-center '}`}> 
    <div className={`bg-[#D2B28F] size-30 rounded-full absolute flex justify-center items-center ${loc == 'top' ? '-top-[25%]' : loc == 'left' ? '-left-[25%]' : '-right-[25%]'}`}> 
      <img src={data.avatar} alt="Avatar" className='size-[84%]'/> 
    </div> 
    <div className={`size-[90%] flex flex-col gap-1 justify-center ${loc == 'top' ? 'pt-[15%]!' : loc == 'left' ? 'ps-[6%]!' : 'pe-[6%]!'}`}> 
      <div className={`flex w-full items-center ${loc == 'top' ? 'flex-col' : 'flex-row justify-evenly'}`}> 
        <span className='readex text-[20px]'>{data.cname}</span> 
        <span className='flex'>
          {Array.from({ length:data.star},(_, i) => ( 
            <Star key={i}/>
          ))}
        </span> 
      </div> 
      <div className=' flex ms-2'> 
        <span className='m-2 readex text-[16px]'>{data.des}</span> 
      </div> 
    </div>
  </div>
</div> 
) } 

export default TestimonialCard