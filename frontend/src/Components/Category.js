import React from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Category() {
    useEffect(()=>{
        AOS.init({duration:500});
     },[])
    return (
        <div>
            <section className="py-6 relative">
                <h1 className="cat-text font-bold font-sans text-[#882de8] lg:text-6xl md:text-5xl text-4xl pb-10" data-aos="fade-left">Dive into Immersive Experience from India</h1>
                <div className="container flex flex-col justify-center p-4 mx-auto" >
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2" >
                        <div data-aos="zoom-out">
                            <Link to="/heritage" >
                                <img
                                    className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl " style={{ boxShadow: "2px 2px 15px black" }}

                                    src={require("../assets/images/heritage.jpg")}
                                    alt=""
                                />
                                <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle">
                                    Heritage
                                </h1>
                            </Link>
                        </div>
                        <div data-aos="zoom-out">
                            <Link to='/arts' >
                                <img
                                    className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}
                                    src={require("../assets/images/culture.jpg")}
                                    alt="" />
                            </Link>
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle">
                                Art
                            </h1>
                        </div> 

                        <div data-aos="zoom-out">
                            <Link to="infras">
                                <img
                                    className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}
                                    src={require("../assets/images/emerging.jpg")}
                                    alt=""
                                />
                                <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                    Infrastructure
                                </h1>
                            </Link>
                        </div>
                        <div data-aos="zoom-out">
                            <Link to='/technology'>
                            <img
                                className="object-cover w-full cursor-pointer hover:animate-pulse  h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}
                                src={require("../assets/images/technology.jpg")}
                                alt=""
                            />
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                Technology
                            </h1>
                            </Link>
                        </div>
                        <div data-aos="zoom-out">
                            <img
                                className="object-cover w-fit cursor-pointer hover:animate-pulse  h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px brown" }}
                                src={require("../assets/images/tourism.jpg")}
                                alt=""
                            />
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                Tourism
                            </h1>
                        </div>
                        
                        {/* <div data-aos="zoom -out">
                            <img
                                className="object-cover w-full cursor-pointer hover:animate-pulse h-[40vh] rounded-xl" style={{ boxShadow: "2px 2px 15px black" }}
                                src={require("../assets/images/luxury.jpg")}
                                alt=""
                            />
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                Luxury
                            </h1>
                        </div>  */}
                        <div data-aos="zoom-out">
                            <Link to="/sports">
                            <img
                                className="object-cover cursor-pointer hover:animate-pulse h-[40vh] rounded-xl w-auto" style={{ boxShadow: "2px 2px 15px black" }}
                                src={require("../assets/images/sports.jpg")}
                                alt=""
                            />
                            <h1 className=" font-bold relative bottom-7 rounded-b-2xl text-white text-xl text-center datatitle ">
                                Sports
                            </h1>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </section>

        </div>
    )
}





