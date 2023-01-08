// Icons 
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt,
    UilUsdSquare,
    UilMoneyWithdrawal,


  } from "@iconscout/react-unicons";


  export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
      },
      {
        icon: UilClipboardAlt,
        heading: "Lodge",
      },
      {
        icon: UilUsersAlt,
        heading: "Customers",
      },
      {
        icon: UilPackage,
        heading: 'Products'
      },
      {
        icon: UilChart,
        heading: 'Analytics'
      },
  ]

  export const CardsData = [
    {
      title:"GDP",
      color:{
        backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
        boxShadow: "0px 10px 20px 0px #e0c6f5",
      },
      barValue:6.9,
      value:"273.08 CR",
      png:UilUsdSquare,
      options:{
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
            format: "yy",
          },
        },
        grid: {
          show: true,
        },
        xaxis: {
          type: "date",
          categories: [
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
          ],
        },
      },
      series: [
        {
          name: "GDP Growth Rate",
          data: [6.45, 3.74, -6.60, 8.95, 7.0],
        },
      ],
    },
    {
      title: "GDP Per Capita",
      color: {
        backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
        boxShadow: "0px 10px 20px 0px #FDC0C7",
      },
      barValue: 17.8,
      value: "$ 2256.6",
      png: UilMoneyWithdrawal,
      options:{
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
            "2018",
            "2019",
            "2020",
            "2021",
            
            
          ],
        },
      },
      series: [
        {
          name: "GDP Per Capita",
          data: [1974.4, 2047.2, 1910.4, 2256.6],
        },
      ],
    },
    {
      title: "Literacy Rate",
      color: {
        backGround:
          "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
        boxShadow: "0px 10px 20px 0px #F9D59B",
      },
      barValue: 74.3,
      value: "+5.07%",
      png: UilClipboardAlt,
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
            "2001",
            "2006",
            "2011",
            "2018",
            "2022",
          ],
        },
      },
      series: [
        {
          name: "Literacy Rate",
          data: [61.01, 62.75, 69.30, 74.37, 77.70],
        },
      ],
    },
  ]