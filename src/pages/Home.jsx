// import { useState } from "react"
import React from 'react'
import dp from './Screenshot from 2023-10-17 04-43-27.png'

const Home = () => {
  return (
    <>
      <div className=''>
        {/* another way to set background image */}
        {/* <div className='w-full' style={{height:'600px', backgroundImage:`url(https://www.freecodecamp.org/news/content/images/size/w2000/2020/12/fcc-bg-image-2.png)`}}>
        </div> */}
        <img className='w-full' src={dp} style={{height:'600px'}} />
        
        
        <div className='w-full text-center ' style={{height:'200px', padding:'30px', backgroundColor:'#FED03D', color:'#333333'}}>
          {/* <div className='text-center'> */}
            <p className='text-5xl'><b>Welcome To Somewhere</b></p>
            <p className='text-5xl'>Accounting, Tax & Audit Firm</p>
          {/* </div> */}
        </div>

        
        <div className='w-full text-center ' style={{paddingLeft:'30px', paddingRight:'30px', paddingTop:'50px', paddingBottom:'20px', color:'#333333'}}>
          <b className='text-5xl'>Accounting , Audit ,Taxation & Corporate Advisory Firm</b>
          <div className='items-center justify-center' style={{height:'40px', paddingTop:'19px', paddingBottom:'19px', paddingRight:'640px', paddingLeft:'640px'}} >
            <div className='bg-yellow-400' style={{height:'3px'}}></div>
          </div>
        </div>


        <div className='w-full flex grid grid-cols-2 divide-x' style={{ height:'500px', paddingLeft:'330px', paddingRight:'330px', paddingTop:'50px', paddingBottom:'50px'}}>
          <div >
            <img src="https://tvovermind.com/wp-content/uploads/2019/05/Tom-and-Jerry-750x395.jpg" alt="img" style={{height:'350px', width:'550px'}}/>
          </div>

          <div className='space-y-5 text-center'>
            <p>A N. GAWADE & CO LLP, CA firm in Pune, India established in the year 2002. We</p>
            <p>are team of Chartered Accountants in India we have been rendering a multitude</p>
            <p>of services under one roof over the 2 decades in the field of  outsourcing,</p>
            <p>Auditing, Company formation in India, Business Taxation, Direct and Indirect</p>
            <p>Taxation, International Taxation, Starting business in India, registration of</p>
            <p>foreign companies, transfer pricing, Goods & Services Tax (GST), Company Law</p>
            <p>Consultancy, NRI Taxation, Startup Services and Book-Keeping & Outsourcing</p>
            <p>AServices, Valuations and Insolvency Advisory Services</p>
            <button style={{backgroundColor:'#FED03D', height:'40px', width:'120px', font:'15px'}}>Read More</button>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home