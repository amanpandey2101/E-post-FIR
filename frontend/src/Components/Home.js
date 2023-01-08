import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './Home.css'
import Cards from './Widgets/Cards/Cards'
import Dive from './Widgets/Dive/Dive'
import Footer from './Widgets/Footer/Footer'

export default function Home() {
  return (
    <>
    <div className="graphDiv flex h-screen flex-col p-10 pt-48 items-center">
            <Cards/>
            <Dive/>
            <Footer/>
    </div>
    </>
  )
}
