import React from 'react'
import { useState } from 'react'
import './Card.css'
import {motion,AnimateSharedLayout} from 'framer-motion'
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'
import { CircularProgressbar } from 'react-circular-progressbar';

function Card(props) {
    const [expanded,setExpanded] = useState(false)
  return (
    <AnimateSharedLayout>
        {
            expanded? 
            <ExpandedCard param={props} setExpanded={() => setExpanded(false)}/>
            :
            <CompactCard param={props} setExpanded={() => setExpanded(true)}/>
        }
    </AnimateSharedLayout>
  )
}

//Compact Card

function CompactCard ({param,setExpanded}){
    const Png = param.png;
    return(
     
        <motion.div className="CompactCard "
        onClick={setExpanded}
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow
        }}
        layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span>Last 24 Hours</span>
            </div>
        </motion.div>
        
    )
}

// Expanded card

function ExpandedCard ({param,setExpanded}){
    const data = {
        options: {
            chart: {
              type: "area",
              height: "auto",
            },
      
            dropShadow: {
              enabled: false,
              enabledOnSeries: undefined,
              top: 0,
              left: 0,
              blur: 3,
              color: "#000",
              opacity: 0.35,
            },
      
            fill: {
              colors: ["#fff"],
              type: "gradient",
            },
            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              colors: ["white"],
            },
            tooltip: {
              x: {
                format: "dd/MM/yy HH:mm",
              },
            },
            grid: {
              show: true,
            },
            xaxis: {
              type: "date",
              categories: [
                "2018-09-19",
                "2018-09-19",
                "2018-09-19",
                "2018-09-19",
                "2018-09-19",
                "2018-09-19",
                "2018-09-19",
              ],
            },
          },
    }
    return(
        <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <UilTimes onClick={setExpanded} />
        </div>
          <span>{param.title}</span>
        <div className="chartContainer">
          <Chart options={data.options} series={param.series} type="area" />
        </div>
        <span>Last 24 hours</span>
      </motion.div>
    )

}

export default Card