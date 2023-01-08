import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function About() {
  return (
    <PrevAbout/>
  )
}


function PrevAbout(){
    useEffect(()=>{
        AOS.init({duration:1000});
      },[]);
    return(
        <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
                <div className="w-full lg:w-5/12 flex flex-col justify-center" data-aos="fade-right">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">About Us</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur molestias mollitia fugit tempore exercitationem, voluptatibus, natus error ipsa, fugiat voluptas nihil. Facilis autem veritatis molestiae porro in eveniet perferendis excepturi, molestias necessitatibus dolores reiciendis atque quis. Nesciunt doloremque deleniti, eius aliquid quibusdam natus molestias. Maiores dicta fuga neque nihil aspernatur?</p>
                </div>
                <div className="w-full lg:w-8/12 lg:pt-8">
                    <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-2xl">
                        <div className="p-4 pb-6 flex justify-center flex-col items-center" data-aos="zoom-in">
                            <img className="md:block h-60 md:h-[35vh] rounded-xl w-60 md:w-fit" src={require('./images/amity_uniform_1-min-removebg-preview.png')} alt="" />
                        
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Aman Kumar Pandey</p>
                        </div>
                        <div className="p-4 pb-6 flex justify-center flex-col items-center" data-aos="zoom-in">
                            <img className="md:block h-60 md:h-[35vh] rounded-xl w-55 md:w-64" src={require('./images/anant.jpg')} alt="" />
                            <p className="font-medium text-xl leading-5 text-gray-800 dark:text-white mt-4">Anant Kumar</p>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center" data-aos="fade-right">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Our Mission</h1>
                    <p className="font-normal text-base leading-6 text-gray-600 dark:text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia inventore expedita nemo labore quas sunt iure facilis, excepturi exercitationem ratione saepe itaque culpa esse quasi eligendi error eius! Eaque voluptates nisi temporibus assumenda! Blanditiis placeat, autem laborum unde expedita ut quo fugit rerum et repellendus? Impedit ipsum, molestias placeat amet, culpa, cupiditate temporibus dolor rerum odio saepe ipsa totam nobis explicabo dolorem assumenda incidunt sint aspernatur dolores consectetur. Assumenda reprehenderit harum laudantium id aperiam iure maiores incidunt beatae doloribus, fuga voluptates nobis soluta ex possimus deleniti quaerat provident vitae neque corporis. Corrupti voluptatem quo dicta itaque dolor rerum natus obcaecati.</p>
                </div>
                <div className="w-full lg:w-8/12 " data-aos='zoom-out'>
                    <img className="w-full h-fit pt-5 rounded-2xl" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                    
                </div>
            </div>
    
        </div>
    </div>
    )
}
