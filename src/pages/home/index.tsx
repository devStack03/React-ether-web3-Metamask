import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import Headroom from 'react-headroom';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import PreOrder from './PreOrder';
import Testimonial from './Testimonial';

const Home = () => {
   return (
      <>
         <Headroom style={{
            transition: 'all .5s ease-in-out'
         }}>
            <nav>
               <div className="container mx-auto px-6 py-2 flex justify-between items-center">
                  <a className="font-bold text-2xl lg:text-4xl">
                     SHMW
                  </a>
                  <div className="block lg:hidden">
                     <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:border-teal-500 appearance-none focus:outline-none">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <title>Menu</title>
                           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                     </button>
                  </div>
                  <div className="hidden lg:block">
                     <ul className="inline-flex">
                        <li><a className="px-4 font-bold" href="/">Home</a></li>
                        <li><Link to="/navigation" className="px-4 hover:text-gray-800">Navigation</Link></li>
                        <li><Link to="/blockchain" className="px-4 hover:text-gray-800">Blockchain</Link></li>
                        <li><a className="px-4 hover:text-gray-800" href="#">Contact</a></li>
                     </ul>


                  </div>

               </div>
            </nav>
         </Headroom>
         {/* <Outlet /> */}
         <Hero />
         <Features />
         <Testimonial />
         <PreOrder />
         <Footer />
      </>

   )
}

export default Home;