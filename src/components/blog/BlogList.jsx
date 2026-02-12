import React, { useState, useEffect } from 'react'
import API from '../../api/axiosInstance'
import { div } from 'framer-motion/client'

const BlogList = () => {

  const [blogData, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get('/blogs/');
        setData(response.data);
      } catch (err) {
        setError("Fetch Error");
        console.log(" Fetch error ",err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  },[])

  console.log(blogData)

  if (loading) return <div className="text-light p-5 text-center">Loading Projects...</div>;
  if (error) return <div className="text-danger p-5 text-center">{error}</div>;

  return (
    <div id='bloglist-section' className='bg-lime-600'>
      <div className='size-full bg-purple-600 flex justify-center items-center p-4'>
        <div className='size-full bg-amber-500 grid grid-flow-row grid-cols-12 overflow-hidden'>
          {blogData.map((data) => {
            return(
              <div
              key={data.id}
              className='bg-emerald-600 h-120 xl:col-span-4 md:col-span-6 col-span-full flex justify-center items-center'
              >
                <div className='bg-purple-500 size-[85%] rounded-3xl p-4 flex flex-col justify-center items-center gap-2'>
                  <div className='bg-lime-950 w-full h-[55%]'>img</div>
                  <div className='bg-lime-950 w-full h-[30%]'>des</div>
                  <div className='bg-lime-950 w-full h-[10%]'>
                    <a href="" className='size-full flex justify-center items-center text-white no-underline! readex rounded-full bg-black'>View Blog</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default BlogList
