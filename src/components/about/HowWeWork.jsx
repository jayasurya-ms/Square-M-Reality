import React from 'react'

const data = [
    {
        id: 1,
        title: 'Design & Approval',
        description: 'We present design concepts, 3D views, and material options. Once approved, we finalize everything before moving to execution.',
        icon: '/src/assets/images/layer.png'
    },
    {
        id: 2,
        title: 'Get a Driver',
        description: 'We present design concepts, 3D views, and material options. Once approved, we finalize everything before moving to execution.',
        icon: '/src/assets/images/thumb.png'
    },
    {
        id: 3,
        title: 'Execution & Monitoring',
        description: 'Our skilled team handles construction and interiors with precision. Regular updates and supervision ensure quality and timely delivery.',
        icon: '/src/assets/images/star.png'
    },
    {
        id: 4,
        title: 'Handover & Support',
        description: 'We complete the project with a final inspection and client walkthrough. After handover, our support continues for any adjustments or queries.',
        icon: '/src/assets/images/home.png'
    },
    
]

function HowWeWork() {
  return (
    <div className=' xl:h-screen w-full'>
        <div className='relative size-full bg-[url(/src/assets/images/map-dotted.jpg)] bg-cover bg-center bg-no-repeat -z-2 '>
        <div className='absolute size-full bg-black/90 -z-1'></div>
            <div className=' h-[40%] w-full flex flex-col justify-end items-center readex text-white max-sm:mb-5!'>
                <div className='text-[20px] md:text-[16px] xl:text-[18px] font-semibold p-3'>
                    <span>HOW WE WORK</span>
                </div>
                <div className='text-[16px] md:text-[20px] xl:text-[30px] font-bold'>
                    <span>Turning Vision into Reality</span>
                </div>
                <div className='w-[90%] md:w-[80%] text-center p-3'>
                    <span>At every stage, we combine expertise with transparency to turn your vision into reality. From the first consultation to the final handover, our streamlined 4-step process ensures smooth execution, timely delivery, and lasting satisfaction.</span>
                </div>
            </div>
            <div className='h-[60%] w-full flex items-start justify-center text-white'>
                <div className=' size-[90%] flex flex-wrap ma:gap-y-10'>
                {data.map((card, index) => {
                    return(
                        <div key={index} className='flex flex-col w-full md:w-[50%] xl:w-[25%] h-full items-center justify-end max-sm:m-4!  md:mt-3!'>
                            <div className=' w-[90%] h-[40%] flex justify-center items-center'>
                                <span className='btn-bg-clr size-22 rounded-2xl flex justify-center items-center'>
                                    <img src={card.icon} alt="icon" className='size-10'/>
                                </span>
                            </div>
                            <div className='w-[85%] h-[55%] flex flex-col text-center gap-2'>
                                <span className='font-bold text-[20px] md:text-[22px] '>{card.title}</span>
                                <span className='text-[16px] md:text-[17px] xl:text-[18px]'>{card.description}</span>
                            </div>
                        </div>
                    )
                })}
                </div>
            </div>
        </div> 
    </div>
  )
}

export default HowWeWork
