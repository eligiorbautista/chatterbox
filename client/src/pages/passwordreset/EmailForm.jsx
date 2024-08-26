import React from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const EmailForm = () => {
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='max-w-sm w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
                <h1 className='text-3xl font-bold text-center text-gray-300 mb-2'>Account
                    <span className='text-black'> Recovery</span>
                </h1>
                <p className="text-center text-sm text-gray-600 mt-4 mb-2">
                    Enter your email to receive a password reset link if your account exists.
                </p>
                <form>
                    <div>
                        <label htmlFor="username" className="label">
                            <span className="text-base label-text text-white ">Email</span>
                        </label>
                        <input type="text" id="username" placeholder='Enter your email address' className='w-full input input-bordered h-10' />
                    </div>


                    <button onClick={() => navigate('/change-password')} className="btn btn-sm h-10 bg-black text-white border-none hover:bg-white hover:text-black w-full mt-5">
                        Send Reset Link
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

export default EmailForm
