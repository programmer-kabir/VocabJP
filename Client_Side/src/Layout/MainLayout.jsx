import React from 'react'
import Navbar from '../Pages/Shared/Navbar/Navbar'
import Footer from '../Pages/Shared/Footer/Footer'
import {Outlet} from 'react-router-dom'
const MainLayout = () => {
  return (
    <div>
        <Navbar />
        <div className='pt-11'>
        <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout