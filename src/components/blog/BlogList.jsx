import React, { useState, useEffect } from "react";
import API from "../../api/axiosInstance";
import { Link } from "react-router-dom";

const BlogList = () => {
  const [blogData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get("/blogs/");
        setData(response.data);
      } catch (err) {
        setError("Fetch Error");
        console.log(" Fetch error ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(blogData);

  if (loading)
    return (
      <div className="text-light p-5 text-center">Loading Projects...</div>
    );
  if (error) return <div className="text-danger p-5 text-center">{error}</div>;

  return (
    <div id="bloglist-section" className="">
      <div className="size-full flex justify-center items-center p-4">
        <div className="size-full grid grid-flow-row grid-cols-12 overflow-hidden ">
          {blogData.map((data) => {
            return (
              <div
                key={data.id}
                className="h-120 xl:col-span-4 md:col-span-6 col-span-full flex justify-center items-center"
              >
                <div className="size-[85%] rounded-3xl md:p-4! flex flex-col justify-center items-center gap-2 bg-white/20 backdrop-blur-lg border border-white/30 p-4! shadow-2xl">
                  <div className="w-full h-[60%]">
                    <div
                      className="size-full rounded-3xl bg-cover bg-no-repeat flex items-end"
                      style={{ backgroundImage: `url(${data.image})` }}
                    >
                      <span className=" p-2 w-full readex font-semibold text-white text-[15px] md:text-[18px] text-center">
                        {data.title}
                      </span>
                    </div>
                  </div>
                  <div className=" w-full h-[22%]">
                    <div className=" flex justify-center items-center w-full">
                      <span className="w-full p-2 readex line-clamp-3 text-black text-[14px] md:text-[16px] text-center">
                        {data.meta_descritption}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-[10%]">
                    <Link
                      to={`/blog/${data.slug}`}
                      className="size-full flex justify-center items-center text-white no-underline! readex rounded-full bg-black"
                    >
                      View Blog
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogList;
