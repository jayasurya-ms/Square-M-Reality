import React from 'react'
import '../style/Form.css'

function Form() {
  return (
    <div className='tform2 col-sm-12 col-md-6 d-flex justify-content-center h-100 w-100'>
        <form action="" method="post" className='row h-100 m-0 w-100'>
            <div className='w-100 h-50 d-flex align-items-end col-sm-12 max-sm:w-full'>
                <span className='tform-des max-sm:w-full'>Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой</span>
            </div>
            <div className='tform-elements row w-100 h-50'>
                <div className='col-sm-12 col-md-12 col-lg-6 p-0 d-flex flex-column justify-content-evenly align-items-center'>
                    <input type="text" placeholder='Your Name'/>
                    <input type="text" placeholder='Phone Number'/>
                </div>
                <div className='col-sm-12 col-md-12 p-0 col-lg-6 d-flex flex-column justify-content-evenly align-items-center'>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='Your Enquiry About'/>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Form
