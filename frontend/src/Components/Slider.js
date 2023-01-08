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
    <div className="slider-text pb-2 relative top-20 font-serif md:text-6xl text-5xl text-[#5e36ef] " data-aos="fade-right">
    <h1>Experience the new India</h1>
    </div>
 <div className="">
      <div className="max-[700px]:h-[65vh] max-[500px]:w-[screen] max-[500px]:h-[50vh] relative mt-24 h-[90vh] pl-6 pr-6" data-aos="zoom-in" >
        <Carousel className="overflow-y-hidden">
          <div>
            <img
              className="w-screen h-fit  "
              src={require("../assets/images/mumbai2.jpg")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-screen h-fit  "
              src={require("../assets/images/tajhotel.webp")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-screen h-fit "
              src={require("../assets/images/mumbai.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-screen h-fit "
              src={require("../assets/images/5G2.jpg")}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-screen h-fit  "
              src={require("../assets/images/unity.avif")}
              alt="..."
            />
          </div>
          <div>
            <img
              className="w-screen h-fit "
              src={require("../assets/images/isro.jpg")}
              alt=""
            />
          </div>
        </Carousel>
      </div>
    <Category/>
      
    </div>
   
    </>

);
}
