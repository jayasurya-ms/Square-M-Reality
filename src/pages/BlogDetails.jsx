import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Phone from '../icon/Phone';
import {motion} from 'framer-motion';
import FormPopUp from '../components/FormPopUp';
import API from '../api/axiosInstance';
import Form from '../icon/Form';
import Footer from '../components/Footer';

const BlogDetails = () => {

  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/blog/${slug}/`)
        setData(response.data)
      } catch (err) {
        setError("Error in fetching data")
        console.log("fetch error:",err)
      }finally{
        setLoading(false)
      }
    };
    fetchData();
  },[]);

  console.log(data);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  if (loading) return <div className='text-light p-5 text-center'>Loading...</div>
  if (error) return <div className='text-light p-5 text-center'>{error}</div>

  return (
    <div className="h-auto w-full">
      <div
        id="blogdetail-section"
        className="h-auto w-full flex flex-col overflow-hidden"
      >
        <div className="h-full w-full flex flex-col md:flex-row">
          {/* main */}
          <motion.div
            className=" h-screen w-full flex flex-col justify-between items-center relative overflow-hidden"
            initial={{ opacity: 0, x: "-50%" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Bg img */}
            <div
              className="absolute w-full h-full bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url(${data.image})` }}
            ></div>

            {/* top */}
            <motion.div
              className="relative w-full flex justify-between p-3"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <div>
                <a href="/">
                  <img
                    src="/src/assets/images/logo.png"
                    alt="Logo"
                    className="md:h-17.5 md:w-17.5 h-15 w-16"
                  />
                </a>
              </div>
              <div className="w-[90%]">
                <Navbar />
              </div>
              <div className="hero-mid1-div3 align-items-center justify-content-center pe-4 max-sm:fixed max-sm:-right-13 max-sm:top-1/2 max-sm:z-50 ">
                <button
                  onClick={() => setIsPopupVisible(true)}
                  className="group relative flex items-center justify-center p-2 ps-4 pe-4 rounded-full! border-0 bg-[#f59e0b] text-black transition-all duration-300 ease-in-out 
                             max-sm:w-20 max-sm:hover:w-44 max-sm:h-12 max-sm:ps-4
                             md:p-2 md:pe-4 md:ps-4 readex btn-bg-clr"
                >
                  {/* Text logic: Hidden partly on mobile, fully visible on hover/desktop */}
                  <span className="whitespace-nowrap transition-all duration-300 max-sm:opacity-0 max-sm:group-hover:opacity-100">
                    Get In Touch
                  </span>

                  {/* Optional: Add an icon or just leave the text to peek out */}
                  <div className="absolute left-3 max-sm:block hidden group-hover:hidden">
                    {/* You can put an icon here that shows when the button is closed */}
                    <Form />
                  </div>
                </button>

                <FormPopUp
                  isOpen={isPopupVisible}
                  onClose={() => setIsPopupVisible(false)}
                />
              </div>
            </motion.div>

            <motion.div
              className="relative w-full max-sm:w-[70%] flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <span className="readex text-white bg-black/10 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-6! md:text-[20px] xl:text-[22px]">
                {data.title}
              </span>
            </motion.div>

            {/* bot */}
            <div className="relative w-full">
              <a
                href="tel:+918798654532"
                className="flex m-4 text-white no-underline!"
              >
                <span>
                  <Phone color={"white"} />
                </span>
                <span>1203654789</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* contents from database */}
        <div className=" h-auto w-full flex p-3! md:p-10!">
          <div className="size-full  flex flex-col justify-center p-2 gap-7">
            {data.contents.map((content, index) => {
              return (
                <div key={index} className=" readex">
                  <div className="font-semibold text-[18px] md:text-[30px]">
                    <span>{index + 1}. </span>
                    <span>{content.content_heading}</span>
                  </div>
                  <span className="ms-1! text-[16px] md:text-[18px]">
                    {content.content_body}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogDetails;
