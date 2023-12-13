import React from 'react'
import logo from '../assets/Netflix Logo.png'
import {useVideoContext} from '../context/VedioTitleContext'

function Navbar() {
   const {videoStatus} = useVideoContext()
   return (
    videoStatus === false ? 
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <img className='w-[150px] h-auto p-2' src={logo} alt="hiiii" />
      <div>
        <button className='text-white pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button>
      </div>
    </div>
    : null
  );
}

export default Navbar