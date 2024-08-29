import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoLogoGoogle } from "react-icons/io";
import useLogin from '../../hooks/useLogin';
import { useAuthContext } from '../../context/AuthContext';
import { toast } from 'sonner';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { loading, login } = useLogin();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(email, password);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6  drop-shadow-md bg-neutral-200 rounded-none '>
                <h1 className='text-3xl font-bold text-center text-white bg-stone-900 py-2 rounded-md mb-2'>ChatterBox Log In 
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="label">
                            <span className="text-base label-text text-black ">Email</span>
                        </label>
                        <input onChange={(e) => setEmail(e.target.value)} type="text" id="username" placeholder='Enter email address' className='w-full input input-bordered rounded-md bg-white drop-shadow-md text-black input-sm h-10' />
                    </div>
                    <div>
                        <label htmlFor="password" className="label">
                            <span className="text-base label-text text-black ">Password</span>
                        </label>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" placeholder='Enter password' className='w-full input input-bordered rounded-md bg-white   drop-shadow-md text-black input-sm h-10' />
                    </div>
                    <div className="flex justify-end mt-2 ">
                        <Link  onClick={() => toast.info("This feature is not available yet.", { position: "top-center" })} className="text- hover:underline hover:text-black text-black ">Forgot Password?</Link>
                    </div>
                    <button disabled={loading} className="btn btn-sm h-10 bg-stone-900 hover:bg-stone-800 text-white border-none  w-full mt-5">
                        {loading ? <span className='loading loading-spinner'></span> : "Log In"}
                    </button>
                </form>

                <button onClick={() => toast.info("Google Sign-In is not available yet.", { position: "top-center" })} className="btn btn-sm btn-outline border-black text-black hover:bg-red-600 hover:text-white w-full mt-3 h-10 flex items-center justify-center gap-2">
                    <IoLogoGoogle className="text-lg" />
                    Continue with Google
                </button>
                <span className="text-sm mt-5 inline-block cursor-default text-black">
                    Don't have an account yet? <Link to="/register" className="text-sm hover:underline hover:text-black ml-0.5">Register</Link>
                </span>
                <div className="text-center text-xs mt-8 text-black">
                    &copy; {new Date().getFullYear()} <span className="font-semibold text-black">Eli Bautista</span>. All rights reserved.
                </div>

            </div>
        </div>
    )
}

export default Login
