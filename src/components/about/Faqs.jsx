import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import '../../style/Faqs.css'
import Phone from './../../icon/Phone';

const faqsData = [
  {
    id: 1,
    qns: 'What types of construction projects do you handle?',
    ans: 'We specialize in residential and commercial construction, interior works, and turnkey projects. From individual homes to office spaces, we manage everything from planning to final handover.',
  },
  {
    id: 2,
    qns: 'Do you offer design services or just construction?',
    ans: 'Yes, we offer complete design and planning services, including architectural layouts, structural design, and interior concepts, along with execution.',
  },
  {
    id: 3,
    qns: 'How do you ensure quality in your construction work?',
    ans: 'We use high-grade materials, skilled labor, and regular site supervision to maintain strict quality control at every stage. Our team also ensures compliance with all safety and building standards.',
  },
  {
    id: 4,
    qns: 'Can I make changes to the design after the project starts?',
    ans: 'Yes, we allow scope for modifications during construction, depending on feasibility. Our team will evaluate the changes and inform you of any cost or timeline impacts.',
  },
]

function Faqs() {
  return (
    <div className=' xl:h-screen md:h-300 w-full'>
        <div className=' size-full flex justify-center items-end'>
            <div className=' xl:w-[80%] w-[90%] h-[90%] flex flex-col xl:flex-row'>
              
              {/* left */}
              <div className=' xl:w-[50%] w-full h-80 md:h-full xl:p-5 p-4'>
                <div className=' size-full'>
                  <div className='relative bg-white w-full h-[80%] flex justify-center bg-[url(/src/assets/images/real-estate.jpg)] bg-cover bg-center rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]'>
                    <div className='absolute w-[80%] bg-black h-[30%] -bottom-[15%] rounded-2xl flex flex-col justify-center items-center gap-2 rasa '>
                      <span className='w-[80%] text-white text-center hidden md:block md:w-[70%] md:text-[18px]'>Contact Us If You Need Help or Have Some Question About Our Service</span>
                      <a href="tel:+917854568932" className='flex text-white no-underline! gap-1 md:text-[18px]'>
                        <span><Phone color={'white'}/></span>
                        <span className=''>8745326598</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* right */}
              <div className=' w-full xl:w-[50%] h-full md:p-4! flex flex-col justify-center xl:justify-start items-center md:items-start gap-2'>
                <div className='rasa text-[28px] md:text-[35px] xl:text-[40px]'>
                  <span>Frequently Asked Questions</span>
                </div>
                <div className='rasa text-[20px] md:text-[25px] xl:text-[20px] max-sm:w-[90%] max-sm:text-center'>
                  <span>At Square M Reality, we believe in keeping our clients fully informed every step of the way. </span>
                </div>
                <div className='rasa'>
                  <Accordion defaultActiveKey="0" flush>
                    {faqsData.map((data,index) => {
                      const a_key = index.toString();
                      return(
                        <Accordion.Item eventKey={a_key} key={data.id} className='shadow-[0_0_15px_rgba(0,0,0,0.3)] m-2'>
                          <Accordion.Header>{data.qns}</Accordion.Header>
                          <Accordion.Body>{data.ans}</Accordion.Body>
                        </Accordion.Item>
                      )
                    })}
                  </Accordion>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Faqs
