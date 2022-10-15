import React from 'react'
import logo from '../assets/propertyImages/logo.png'

function Footer() {
  return (
    <footer className=' px-[150px] w-full h-[10%] justify-between items-center flex flex-col md:flex-row bg-[#bababa] mt-10 text-[white] static bottom-0'>
        <div className='flex '>
        <img className="w-[250px] h-[150px] object-contain" src={logo} alt='company-logo' />
        </div>
        <div className='text-[black]'>Copyrights reserved by the company</div>
    </footer>
  )
}

export default Footer