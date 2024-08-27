import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { toast } from 'sonner'
import useRegister from "../../hooks/useRegister";

const Register = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })

    const { loading, register } = useRegister()

    const handleCheckBoxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await register(inputs);
    }

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10'>
                <h1 className='text-3xl font-bold text-center text-gray-300 mb-2'>ChatterBox
                    <span className='text-black'> Registration</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white '>Full name <span className="text-sm">(e.g., Eli Bautista)</span></span>
                        </label>
                        <input onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} type='text' placeholder='Enter full name' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text text-white '>Email <span className="text-sm">(e.g., it.elibautista@gmail.com)</span></span>
                        </label>
                        <input onChange={(e) => setInputs({ ...inputs, email: e.target.value })} type='text' placeholder='Enter email address' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-white '>Password <span className="text-sm">(min 6 characters, alphanumeric)</span></span>
                        </label>
                        <input onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            type='password'
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-white '>Confirm password</span>
                        </label>
                        <input onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            type='password'
                            placeholder='Re-enter password'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <GenderCheckbox onCheck={handleCheckBoxChange} selectedGender={inputs.gender} />

                    {/* <div >
                        <label className='label'>
                            <span className='text-base label-text text-white '>Profile Picture</span>
                        </label>
                        <input
                            type='file'
                            accept='image/*'
                            className='w-full file-input file-input-bordered text-white  file-input-sm'
                        />
                    </div> */}

                    <button disabled={loading} onClick={(e) => handleSubmit(e)} className="btn btn-sm h-10 bg-black text-white border-none hover:bg-white hover:text-black w-full mt-5">
                        {loading ? <span className="loading loading-spinner"></span> : "Create account"}</button>
                </form>
                <span className="text-sm mt-5 inline-block cursor-default text-white ">Already have an account? <Link to="/login" className="text-sm hover:underline hover:text-black ml-0.5">Log In</Link></span>
            </div>
        </div >
    );
};
export default Register;
