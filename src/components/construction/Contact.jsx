import React from 'react'
import Arrow from '../../icon/Arrow'
import Form from '../../components/Form'
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <div id='contact' className='bg-white xl:h-screen max-sm:h-full w-full flex justify-center items-end max-sm:mt-15! max-sm:mb-15! md:mt-10! md:mb-10!'>
      <div className='xl:w-[94%] xl:h-[90%] xl:flex xl:flex-row max-sm:size-full max-sm:flex max-sm:flex-col max-sm:h-full md:w-full md:flex md:flex-col md:h-full'>
        <div className='relative xl:w-[60%] xl:h-full max-sm:w-full max-sm:h-100 max-sm:p-2! md:w-full md:h-150'>
            <div>
                <span className='rasa font-semibold xl:text-[50px] max-sm:text-[30px] md:text-[40px]'>We'd Love To Hear <br />From You</span>
            </div>
            <div className='absolute xl:-right-5 xl:top-25 md:top-15 md:right-0'>
                <img src="src/assets/images/c-choose.png" alt="" />
            </div>
        </div>
        <div className=' xl:w-[50%] h-full max-sm:w-full'>
            <div className=' w-full flex h-50'>
                <Form tcolor={'black'}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
