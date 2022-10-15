import {React, useState} from 'react'
import {MenuOutline, Close} from 'react-ionicons'
import logo from '../assets/propertyImages/logo.png'

function Navbar() {
    const [open, setOpen] = useState(false);

  return (
    <>
    <header className="flex w-full flex-col justify-center items-center mb-3 mt-2">
        <img className="w-[250px] h-[150px] object-contain" src={logo} alt='company-logo' />
        <div className="absolute top-6 left-5 md:hidden ease-in transform duration-3000">
        {open ? <Close onClick={()=> {setOpen(!open)}}/>
        :<MenuOutline onClick={()=> {setOpen(!open)}}/>}
        </div>
         <nav className={`md:flex md:static lg:flex w-[100%] md:w-[80%] p-5 bg-[#313131] text-[white] md:rounded-[36px] md:items-center absolute transition-transform duration-[2s] ${!open ? ' left-[-800px] top-20' : 'top-20'}`}>
            <ul className='md:flex flex-col mt-5 md:flex-row md:mt-0 md:justify-between md:w-[100%]'>
                <li className='mb-4 md:mb-0'><a href='/'>Home</a></li>
                <li className='mb-4 md:mb-0'><a href='/'>About</a></li>
                <li className='mb-4 md:mb-0'><a href='/'>Contact Us</a></li>
                <li className='mb-4 md:mb-0'><a href='/'>Browse</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Navbar