import React from 'react'
import { CardsData } from '../../../Data/Data'
import Card from '../Card/Card'
import './Cards.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function Cards() {
  useEffect(()=>{
    AOS.init({duration:800});
  },[]);
  return (
    <div className='Cards w-full' data-aos="zoom-in">
      {CardsData.map((card,index)=>{
        return(
          <div className="parentContainer" >
            <Card 
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value = {card.value}
            png = {card.png}
            series = {card.series}
            options = {card.options}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards