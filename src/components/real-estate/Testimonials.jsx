import React, { useEffect, useState } from 'react'
import TestimonialCard from '../interior-designing/TestimonialCard'
import { motion } from "framer-motion";

const data = [
  { id: 1, cname: 'Raj Mohan', star: 4, des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос', avatar: 'src/assets/images/review.png', avatar_loc: 'left' },
  { id: 2, cname: 'Raj Mohan', star: 4, des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос', avatar: 'src/assets/images/review.png', avatar_loc: 'top' },
  { id: 3, cname: 'Raj Mohan', star: 4, des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос', avatar: 'src/assets/images/review.png', avatar_loc: 'right' },
  { id: 4, cname: 'Raj Mohan', star: 4, des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос', avatar: 'src/assets/images/review.png', avatar_loc: 'right' },
  { id: 5, cname: 'Raj Mohan', star: 4, des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос борлуулсан бүтээгдэхүүн', avatar: 'src/assets/images/review.png', avatar_loc: 'top' },
  { id: 6, cname: 'Raj Mohan', star: 4, des: 'Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос', avatar: 'src/assets/images/review.png', avatar_loc: 'left' },
];

const cardVariantsByIndex = {
  0: {
    rest: { x: -300, opacity: 0 },
    hover: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  },
  1: {
    rest: { scale: 1.2 },
    hover: { scale: 1, transition: { duration: 0.5 } },
  },
  2: {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.6, delay: 0.1 } },
  },
  3: {
    rest: { x: 300, opacity: 0 },
    hover: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  },
  4: {
    rest: { y: 300, opacity: 0 },
    hover: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  },
};

function Testimonials() {
  const [isHoverDevice, setIsHoverDevice] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsHoverDevice(mq.matches);

    const handler = (e) => setIsHoverDevice(e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <motion.div
      id="testimoials-section"
      className="xl:h-screen h-full w-full overflow-hidden"
      initial="rest"
      whileHover={isHoverDevice ? "hover" : undefined}
      whileInView={!isHoverDevice ? "hover" : undefined}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="size-full bg-[#EAE5DF]">
        <div className=" w-full h-[20%] flex max-sm:flex-col">
          <div className=" xl:w-[50%] p-5">
            <span className="solitreo xl:text-[60px] md:text-[40px] max-sm:text-[40px]">
              Testimonials
            </span>
          </div>
          <div className="xl:w-[50%] flex items-center justify-center xl:justify-start md:justify-start">
            <span className="readex font-medium xl:text-[18px] md:text-[16px] max-sm:text-[15px] xl:w-[80%] w-[90%]">
              Та борлуулсан бүтээгдэхүүн үйлчилгээнийхээ орлогоос бидэнд хувь төлөхгүй бөгөөд программ ашиглалтын суурь хураамжаа сар бүр төлөөд явах боломжтой
            </span>
          </div>
        </div>

        <div className=" xl:h-[80%] h-265 md:h-115 w-full flex max-sm:flex-col">
          <div className="grid grid-cols-12 grid-rows-12 md:grid-rows-6 xl:grid-rows-12 xl:gap-10 w-full h-full">

            <div className=" xl:col-span-4 xl:row-span-4 xl:row-start-2 col-span-12 row-span-2 flex justify-end items-center md:col-span-7 md:row-span-2">
              <motion.div className="p-2 size-full xl:size-[90%] md:size-[90%]" variants={cardVariantsByIndex[0]}>
                <TestimonialCard data={data[0]} />
              </motion.div>
            </div>

            <div className=" xl:col-span-4 xl:row-span-9 col-span-12 row-span-4 flex justify-center items-center md:col-span-5 md:row-span-5 ">
              <motion.div className="p-2 xl:h-[90%] xl:w-[80%] md:size-[90%] size-full" variants={cardVariantsByIndex[1]}>
                <TestimonialCard data={data[1]} />
              </motion.div>
            </div>

            <div className=" xl:col-span-4 xl:row-span-4 xl:row-start-2 xl:col-start-9 col-span-12 row-span-2 flex justify-start items-center md:col-span-7 md:row-span-2 ">
              <motion.div className="p-2 xl:size-[90%] md:size-[90%] size-full" variants={cardVariantsByIndex[2]}>
                <TestimonialCard data={data[2]} />
              </motion.div>
            </div>

            <div className=" xl:col-span-4 xl:row-span-4 col-span-12 row-span-2 xl:flex justify-end items-center hidden">
              <motion.div className="p-2 size-[90%]" variants={cardVariantsByIndex[2]}>
                <TestimonialCard data={data[3]} />
              </motion.div>
            </div>

            <div className=" xl:col-span-4 xl:row-span-7 col-span-12 row-span-4 md:hidden xl:block block">
              <motion.div className="p-2 xl:w-[75%] xl:h-full md:size-[90%] size-full" variants={cardVariantsByIndex[3]}>
                <TestimonialCard data={data[4]} />
              </motion.div>
            </div>

            <div className=" xl:col-span-4 xl:col-start-3 xl:row-span-4 hidden xl:flex md:flex justify-center items-center md:col-span-7 md:row-span-2">
              <motion.div className="p-2 xl:size-[90%] md:size-[90%]" variants={cardVariantsByIndex[4]}>
                <TestimonialCard data={data[5]} />
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;
