import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='justify-between'>

        <div className='w-full flex grid grid-cols-2 divide-x ' style={{height:500, paddingTop: '80px', paddingRight:'40px', paddingLeft:'40px',  paddingBottom: '70px', backgroundColor:'#1E1E1E', color:'747474'}}>

          <div  className='justify-between text-center'>
            <div style={{color:'#FED03D', font:'15px', paddingBottom:'40px'}}>
              <b>QUICK LINKS</b>
            </div>

            <div style={{color:'#747474', font:'15px'}} className='space-y-5'>
              <p><Link to="/">Home</Link></p>
              <p><Link to="/aboutus">About Us</Link></p>
              <p><Link to="/services">Services</Link></p>
              <p><Link to="contactus">Contact Us</Link></p>
              <p><Link to="careers">Careers</Link></p>
            </div>
          </div>

          <div  className='justify-between text-center'>
            <div style={{color:'#FED03D', font:'15px', paddingBottom:'40px'}}>
              <b>PUNE BRANCH ADDRESS</b>
            </div>

            <div style={{color:'#747474', font:'15px'}} className='space-y-5'>
              <p>A.N GAWADE & CO  LLP</p>
              <p>5B, Maker Bhavan, No 2, 5th Floor,S V Thackersy Marg,New Marine Lines,</p>
              <p>Mumbai-400020.</p>
              <p>Mobile : +91-8983424134</p>
              <p>Email : ang@angca.com</p>
            </div>
          </div>

        </div>

        <div className=' w-full h-screen flex items-center justify-center' style={{height:100, backgroundColor:'#111111', color:'#747474'}}>
          <p>COPYRIGHT 2023 |   ALL RIGHTS RESERVED   |   POWERED BY A N GAWADE & CO LLP</p>
        </div>

      </div>
    </>
  )
}

export default Footer