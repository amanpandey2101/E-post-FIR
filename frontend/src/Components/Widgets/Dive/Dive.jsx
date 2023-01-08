import React from 'react'
import './Dive.css'
import MessageIcon from '../images/message.png'
import { Link } from 'react-router-dom'

export default function Dive() {
  return (
    <div className=" flex diveContainer w-screen bg-transparent items-center">

    
    <div className=' diveCard mx-10 flex flex-row h-3/5 mt-10 rounded-2xl items-center shadow-md p-4 w-1/2 bg-white '>
        <img src={MessageIcon}/>
        <div className='flex flex-col w-full  items-center flex-wrap p-4'>

        <p className='font-mono text-lg font-semibold text-black ml-5'>
          Let's Have A Dive To New India
        </p>
        <p className='text-black font-mono '>
          Introducing <b className='text-yellow-500 font-extrabold'>
            E-Post-FIR
          </b>
        </p>
        <div className=' mt-4 mr-4 '>

        <Link  className='diveBtn px-4 py-3 rounded-xl bg-blue bg-sky-100 text-sky-600'>
          Have a Look!
        </Link>
        </div>
        </div>
    </div>
    </div>
  )
}
