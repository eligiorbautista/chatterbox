import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';

const MessageForm = () => {

    const [message, setMessage] = useState("");

    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;

        await sendMessage(message);
        setMessage("");
    }

    return (
        <form className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input type="text" className='rounded-sm bg-white drop-shadow-md text-black  text-sm  block w-full p-2.5 border-none'
                    placeholder='Send a message'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)} />
                <button type='submit' className=' text-black absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <div className='loading loading-spinner'></div> : <IoSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageForm


