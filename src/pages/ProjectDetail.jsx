import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Play from "../icon/Play";
import Phone from "../icon/Phone";
import { motion } from "framer-motion";
import FormPopUp from "../components/FormPopUp";
import API from "../api/axiosInstance";
import Form from "../icon/Form";
import Footer from "../components/Footer";
import CForm from "../components/Form";
const ProjectDetail = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/projects/${slug}/`);
        setData(response.data);
      } catch (err) {
        setError("Error in fetching data");
        console.log("fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  if (loading)
    return <div className="text-2xl p-5 text-center">Loading...</div>;
  if (error)
    return <div className="text-2xl text-red-600 p-5 text-center">{error}</div>;

  return (
    <div className="h-auto w-full">
      <div
        id="projectdetail-section"
        className="xl:h-120 h-110 w-full bg-amber-400"
      >
        <div className=" size-full flex flex-col  border border-black/10 shadow-xl">
          {/* LEFT */}
          <motion.div
            className="bg-purple-100 w-full h-full flex flex-col justify-between relative overflow-hidden"
            initial={{ x: "-50%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Bg img */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url(${data.image})` }}
            ></div>

            {/* Content */}
            {/* top */}
            <motion.div
              className="relative w-full flex justify-between p-3"
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.8 }}
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
              <div className="w-[93%]">
                <Navbar />
              </div>
              <div className="hero-mid1-div3 align-items-center justify-content-center max-sm:fixed max-sm:-right-13 max-sm:top-1/2 max-sm:z-50">
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

            {/* mid */}
            <motion.div
              className="relative w-full flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <a
                href=""
                className="bg-[url(/src/assets/images/hero-bg.png)] bg-cover bg-center h-14 w-30 md:h-14 md:w-30 outline-1 flex flex-col rounded-full justify-center items-center text-white no-underline!"
              >
                <span>
                  <Play />
                </span>
                <span>Watch Now</span>
              </a>
            </motion.div>

            {/* bot */}
            <div className="relative w-full">
              <div className="flex m-4 text-white">
                <span>
                  <Phone color={"white"} />
                </span>
                <span>1203654789</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="p-2 md:p-10! flex w-full">
        <div className="flex flex-col w-full gap-8">
          <div className=" w-full h-auto md:h-150 xl:h-90 gap-8 flex-col md:flex-row xl:p-2 flex">
            <div className="h-auto xl:h-full w-full md:w-1/2 flex flex-col justify-between items-center pt-2">
              <div className="w-full p-2 flex flex-col gap-3 items-center xl:items-start">
                <span className="btn-bg-clr p-1 ps-3 pe-3 rounded-full w-min">
                  {data.status}
                </span>
                <span className="text-[16px] md:text-[20px] xl:text-[24px] readex font-bold">
                  {data.title}
                </span>
                <span className="text-[14px] md:text-[16px] xl:text-[18px] md:max-h-90 overflow-hidden w-full">
                  {data.description}
                </span>
                <a
                  href=""
                  className="p-2 ps-3 pe-3 rounded-full bg-black w-[70%] md:w-[50%] xl:w-[30%] text-white no-underline! text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
            <div className="md:w-1/2 w-full h-auto p-1 md:h-full xl:h-full gap-7 flex flex-col items-center rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.3)]">
              <span className="text-[20px] readex mt-2">Contact Us</span>
              <div className="xl:h-60 md:h-120 h-130 p-3 xl:p-0!">
                <CForm tcolor={"black"} />
              </div>
            </div>
          </div>
          <div className="md:h-60 xl:h-90 p-3">
            <iframe
              src={data.link}
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen="false"
              loading="lazy"
              className="rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetail;
