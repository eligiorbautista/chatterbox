import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const SearchForm = () => {
  return (
    <form className='flex items-center gap-2   pt-6'>
      <input type="text" placeholder='Search...' className='input input-bordered rounded-xl input-sm h-9'/>
        <button className="btn btn-sm btn-square bg-white text-black border-none hover:text-white"> 
            <IoSearchSharp className='w-5 h-5 outline-none'/>
        </button>
        
    </form>
  )
}

export default SearchForm
