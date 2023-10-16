import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Navbar, Footer} from './component'
import {Home, ContactUs, Careers, AboutUs, Services} from './pages'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App