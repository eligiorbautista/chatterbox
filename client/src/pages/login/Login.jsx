import React from 'react'

import { Link } from 'react-router-dom'
import { IoLogoGoogle } from "react-icons/io";


const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
                <h1 className='text-3xl font-bold text-center text-gray-300 mb-2'>Log In
                    <span className='text-black'> ChatterBox</span>
                </h1>

                <form>
                    <div>
                        <label htmlFor="username" className="label">
                            <span className="text-base label-text text-white ">Username</span>
                        </label>
                        <input type="text" id="username" placeholder='Enter username' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label htmlFor="password" className="label">
                            <span className="text-base label-text text-white ">Password</span>
                        </label>
                        <input type="password" id="password" placeholder='Enter password' className='w-full input input-bordered h-10' />
                    </div>
                    <div className="flex justify-between mt-2">
                        <Link to="/account-recovery" className="text-sm hover:underline hover:text-black text-white ">Forgot Password?</Link>
                    </div>
                    <button className="btn btn-sm h-10 bg-black text-white border-none hover:bg-white hover:text-black w-full mt-5">
                        Login
                    </button>
                    <button onClick={()=> alert("Google Sign-In is not available yet.")} className="btn btn-sm btn-outline border-white text-white hover:bg-white hover:text-black w-full mt-3 h-10 flex items-center justify-center gap-2">
                        <IoLogoGoogle className="text-lg" />
                        Continue with Google
                    </button>

                </form>
                <span className="text-sm mt-5 inline-block cursor-default text-white">
                    Don't have an account yet? <Link to="/register" className="text-sm hover:underline hover:text-black ml-0.5">Register</Link>
                </span>
                <div className="text-center text-xs mt-8 text-gray-200">
                    &copy; {new Date().getFullYear()} <span className="font-semibold text-white">Eli Bautista</span>. All rights reserved.
                </div>

            </div>
        </div>
    )
}

export default Login
