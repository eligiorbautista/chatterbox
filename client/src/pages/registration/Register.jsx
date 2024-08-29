import { useState } from "react";
import { Link } from "react-router-dom";
import useRegister from "../../hooks/useRegister";

const Register = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePic: "" // store base64-encoded image
    });

    const { loading, register } = useRegister();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setInputs({ ...inputs, profilePic: reader.result });
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await register(inputs);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 drop-shadow-md bg-neutral-200 rounded-none'>
                <h1 className='text-3xl font-bold text-center text-white bg-stone-900 py-3 px-4 rounded-md mb-2'>
                    ChatterBox Registration
                </h1>
                <form>
                    <div>
                        <label className='label p-2 pt-6'>
                            <span className='text-base label-text text-black '>Full name <span className="text-sm">(e.g., Eli Bautista)</span></span>
                        </label>
                        <input
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                            type='text'
                            placeholder='Enter full name'
                            className='w-full input input-bordered rounded-md bg-white drop-shadow-md text-black input-sm h-10'
                        />
                    </div>
                    <div>
                        <label className='label p-2 pt-6'>
                            <span className='text-base label-text text-black '>Email <span className="text-sm">(e.g., it.elibautista@gmail.com)</span></span>
                        </label>
                        <input
                            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                            type='text'
                            placeholder='Enter email address'
                            className='w-full input input-bordered rounded-md bg-white drop-shadow-md text-black input-sm h-10'
                        />
                    </div>
                    <div cl>
                        <label className='label'>
                            <span className='text-base label-text text-black '>Password <span className="text-sm">(min 6 characters, alphanumeric)</span></span>
                        </label>
                        <input
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                            type='password'
                            placeholder='Enter password'
                            className='w-full input input-bordered rounded-md bg-white drop-shadow-md text-black input-sm h-10'
                        />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text text-black '>Confirm password</span>
                        </label>
                        <input
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                            type='password'
                            placeholder='Re-enter password'
                            className='w-full input input-bordered rounded-md bg-white drop-shadow-md text-black input-sm h-10'
                        />
                    </div>
                    <div className="mb-3">
                        <label className='label p-2 pt-6'>
                            <span className='text-base label-text text-black '>Profile Picture</span>
                        </label>

                        <input type="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                    </div>
                    <button
                        disabled={loading}
                        onClick={handleSubmit}
                        className="btn btn-sm h-10 bg-stone-900 hover:bg-stone-800 text-white border-none w-full mt-5">
                        {loading ? <span className="loading loading-spinner"></span> : "Create account"}
                    </button>
                </form>
                <span className="text-sm mt-5 inline-block cursor-default text-black ">
                    Already have an account?
                    <Link to="/login" className="text-sm hover:underline hover:text-black ml-0.5 font-semibold">Log In</Link>
                </span>
            </div>
        </div>
    );
};

export default Register;
