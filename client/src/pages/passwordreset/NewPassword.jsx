import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

const NewPassword = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
                <h1 className='text-3xl font-bold text-center text-gray-300 mb-2'>Reset
                    <span className='text-black'> Password</span>
                </h1>

                <form>
                    <div>
                        <label htmlFor="new-password" className="label">
                            <span className="text-base label-text text-white">New Password</span>
                        </label>
                        <input 
                            type="password" 
                            id="new-password" 
                            placeholder='Enter new password' 
                            className='w-full input input-bordered h-10' 
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="label">
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <input 
                            type="password" 
                            id="confirm-password" 
                            placeholder='Confirm new password' 
                            className='w-full input input-bordered h-10' 
                        />
                    </div>
                    <button onClick={()=> navigate('/login')} className="btn btn-sm h-10 bg-black text-white border-none hover:bg-white hover:text-black w-full mt-5">
                        Reset Password
                    </button>
                </form>
                <span className="text-sm mt-5 inline-block cursor-default text-white">
                    Remembered your password? <Link to="/login" className="text-sm hover:underline hover:text-black ml-0.5">Login</Link>
                </span>
                <div className="text-center text-xs mt-8 text-gray-200">
                    &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Eli Bautista</span>. All rights reserved.
                </div>

            </div>
        </div>
    )
}

export default NewPassword
