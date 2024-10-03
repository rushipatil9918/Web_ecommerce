import React from 'react'
import HomeCarosel from '../Componunts/HomeCarosel/HomeCarosel'
import Footer from '../Componunts/Footer/Footer'

import NavBar from '../Componunts/Navigation/Navigation'
import AllProduct from '../Componunts/HomeSectionCardContainer/AllProduct'
import Bagp from '../Componunts/BagProduct/Bagp'




const Homepage = () => {
  return (
    <div className='Homepage'>
      <div className='Homepage Components'>
        <div className='Navbar'>
          <NavBar />
        </div>
        <div className='Carosel'>
          <HomeCarosel />
        </div>
        <div className='Branded Product mt-10'>
          <div className=' textt h-20 bg-white text-slate-800 font-medium text-3xl'>
            <h3 className='ml-6 mt-10'>BIGGEST DEALS ON TOP BRANDS</h3>
          </div>
          <div className='Brands'>
            <AllProduct />

          </div>

        </div>
        <div className='bag'>
          <div className=' textt h-20 bg-white text-slate-800 font-medium text-3xl'>
            <h3 className='ml-6 mt-10'>CATEGORIES TO BAG</h3>
          </div>
          <div className='bagDiv'>
            <Bagp />
          </div>
        </div>
        <div className='Footer'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Homepage