import React from 'react'
import { FiMenu } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { TbMenuDeep } from "react-icons/tb";
import { CgMenuRightAlt } from "react-icons/cg";
function Navbar() {
  return (
    <div className='  bg-white shadow-md shadow-gray-300 fixed top-0 w-full z-100'>
      <div className=' flex justify-between p-4 pt-3 pb-8 items-Center'> 
        <h1 className='text-3xl font-bold text-yellow-800'>Mart<span className='text-yellow-500'>X</span></h1>
        <CgMenuRightAlt size={35}/>
      </div>
      <div className='flex items-center justify-center p-2 pb-2  w-full '>
        <FaSearch size={25} className='relative left-4 '/>
        <input type="text" placeholder='Search fashion items...' className='border p-3 rounded-full w-full text-xl pl-13 ml-[-25px] '/>
      </div>
    </div>
  )
}

export default Navbar
