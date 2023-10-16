import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {Drpdown} from './'

const Navbar = () => {
  const [st1, setSt1] = useState("")
  const [st2, setSt2] = useState("")
  const [st3, setSt3] = useState("")
  const [st4, setSt4] = useState("")
  const [st5, setSt5] = useState("")
  return (
    <>
      <div className='border border-black w-full flex justify-between my-5 text-2xl'>
        <div className='mx-4'>
          <Link to="/">GRP</Link>
        </div>
        <div className='text-center space-x-9  '>
          <Link to="/" className={st1} onMouseEnter={() => {setSt1("bg-yellow-400")}} onMouseLeave={()=>{setSt1("")}}>Home</Link>
          <Link to="/aboutus" className={st2} onMouseEnter={() => {setSt2("bg-yellow-400")}} onMouseLeave={()=>{setSt2("")}}>About Us</Link>
          <Link to="/services" className={st3} onMouseEnter={() => {setSt3("bg-yellow-400")}} onMouseLeave={()=>{setSt3("")}}>Services</Link>
          <Link to="/contactus" className={st4} onMouseEnter={() => {setSt4("bg-yellow-400")}} onMouseLeave={()=>{setSt4("")}}>Contact Us</Link>
          <Link to="/careers" className={st5} onMouseEnter={() => {setSt5("bg-yellow-400")}} onMouseLeave={()=>{setSt5("")}}>Careers</Link>
        </div>
        <div className='mx-4'>
          Something
        </div>
      </div>
    </>
  )
}

export default Navbar