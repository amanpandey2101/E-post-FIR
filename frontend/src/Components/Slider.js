import React from "react";
import { Carousel } from "flowbite-react";
import Category from "./Category";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Slider() {
  useEffect(()=>{
    AOS.init({duration:800});
 },[])
  return (
    <>
   <div className="px-[2rem] bg-white">
    <div className="galleryTitle slider-text pb-2 relative top-20 md:text-6xl " data-aos="fade-right">
    <h1>Experience the new India</h1>
    </div>
 <div className="">
      <div className="max-[700px]:h-[65vh]  max-[500px]:h-[50vh] relative mt-24 h-[90vh] pl-6 pr-6" data-aos="zoom-in" >
        <Carousel className="overflow-y-hidden">
          <div>
            <img
              className="w-fit h-fit  "
              src={require("../assets/images/mumbai2.jpg")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-fit h-fit  "
              src={require("../assets/images/tajhotel.webp")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-fit h-fit "
              src={require("../assets/images/mumbai.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-fit h-fit "
              src={require("../assets/images/5G2.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-fit h-fit  "
              src={require("../assets/images/unity.avif")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-fit h-fit "
              src={require("../assets/images/isro.jpg")}
              alt=""
            />
          </div>
        </Carousel>
      </div>
    <Category/>
      
    </div>
    </div>
    </>

);
}
