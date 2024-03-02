import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";


import "./Projects.css";

// import required modules
import { Navigation, Scrollbar, Autoplay } from "swiper/modules";
import jsonData from "../../infos/projects.json";
import animation from "../../images/animate.gif"
import upright from '../../images/up right.png'
import lock from '../../images/lock.png'


export default function Projects() {


  return (
    <>
      <div className="projects container">
        <p className="font-bold text-xl">What I have Been Working On</p>
        <Swiper
          centeredSlides={true}
          grabCursor={true}
          className="mySwiper "
          loop={true}
          modules={[Autoplay, Navigation, Scrollbar]}
          spaceBetween={40}
          slidesPerView={"auto"}
          navigation
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 200000,
            disableOnInteraction: true,
          }}
        >
          {jsonData.map((project) => (
            <a key={project.link} href={project.link} target="_blank">
              <SwiperSlide key={project.description}>
                <img
                  src={project.bgIMG}
                  className="absolute left-0 bottom-0 w-full h-full z-[-1] object-cover"
                ></img>
                <div className="flex flex-col justify-start items-center gap-4">
                  <img src={project.logo} width={69} height={69}></img>
                  <div className="flex flex-col gap-3 justify-center content-center">
                    <p className="text-3xl font-semibold text-white">
                      {project.name}
                    </p>
                    <div className="flex gap-2 justify-center">
                      {project.domain.map((proj,index) => (
                        <div key={index}
                          className={`${
                            proj == "Confidential"
                              ? "bg-[#FB0000] text-[#ffffff]"
                              : "bg-[#ffffff] text-[#0000ff]"
                          }   font-semibold py-[7px] px-3 rounded-[30px] text-[16px]`}
                        >
                          {proj}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="font-regular text-xl text-white px-2">
                    {project.description}
                  </p>
                </div>
                {
                    project.link != "" ?
                    <a href={project.link} target="_blank">
                <div
                  className=" animation flex justify-center items-center w-[70px] h-[70px] bg-[#0000ff] absolute right-7 bottom-6 rounded-[50%] overflow-hidden cursor-pointer"
                >
                    <img src={upright} className="animated cursor-pointer"></img>
                </div>
                </a> :
                    <div
                    className=" animation flex justify-center items-center w-[70px] h-[70px] bg-[#FE113A] absolute right-7 bottom-6 rounded-[50%] overflow-hidden cursor-not-allowed"
                  >
                      <img src={lock} className="cursor-not-allowed" width={25}></img>
                  </div>
                }
                
              </SwiperSlide>
            </a>
          ))}
        </Swiper>
      </div>
    </>
  );
}
