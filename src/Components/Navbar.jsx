import {Menu , X ,Linkedin,Mail} from 'lucide-react';
import React, { useState } from 'react'
import logo from "../assets/logo.png";
import {navItems} from "../constants"
import imag1 from "../assets/profile-pictures/imag1.png"

const Navbar = ({ onBookIntro }) => {
    const [mobileDrawerOpen , setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };
  return (
    
   <nav className="sticky top-0 z-50 py-3  backdrop-blur-lg border-b
   border-neutral-700/80">
      <div className='container px-4 mx-auto relative text-sm'>
         <div className='flex justify-between items-center'>
            <div className='flex items-center flex-shrink-0'>
               <img className = "h-10 w-10 mr-2 " src={imag1} alt='logo'/>       
                 <span className='text-xl tracking-tight'>Bixy</span>
                 </div> 
              <ul className='hidden lg:flex ml-14 space-x-12'>
                { navItems.map((item,index) => (
                    <li key ={index}>
                     <a href = {item.href}> {item.label}</a>
                      </li>
            ))} 
                 
              </ul>
              <div className='hidden lg:flex justify-center space-x-4 items-center'>
                <a href= "https://www.linkedin.com/company/teambixy/" className='py-2 px-3 border rounded-md'>
                    <Linkedin/>
                    </a>

                <button 
                onClick={onBookIntro}
                className='bg-gradient-to-r from-blue-500 to-blue-800  rounded-md px-4 py-2 flex items-center' >
                Book an intro <Mail className='ml-2 inline-block'/>
                </button> 
              </div>

              <div  className='lg:hidden md:flex flex-col justify-end'>
                  <button onClick={toggleNavbar}>
                    {mobileDrawerOpen ? <X/> : <Menu />}
                  </button>
              </div>
          </div>
         
        { mobileDrawerOpen && (
            <div className = "fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
             <ul>
                {navItems.map( (item ,index) => (
                    <li key ={index} className="py-4" >

                        <a href = {item.href}> {item.label}</a>
                    </li>

                ))} 
             </ul>
             <div className='flex space-x-6'>
            <a href='#' className='p-2 px-3 border rounded-md'>
                sign In 
            </a>
            <button 
              onClick={onBookIntro}
              className=' py-2 px-3 rounded-md bg-gradient-to-r
            from-blue-500 to-blue-800'>
                Book an Intro
            </button>
            
        </div> 
            </div>
        )} 
                
       </div>
     </nav>
 
    
     )
}

export default Navbar;
