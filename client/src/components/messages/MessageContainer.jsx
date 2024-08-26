import React from 'react'
import Messages from './Messages'
import MessageForm from './MessageForm'
import { BiSolidConversation } from "react-icons/bi";

const MessageContainer = () => {

    const noChatSelected = true;

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {noChatSelected ? (<NoChatSelected />) : (
                <>
                    {/* Header */}
                    <div className="bg-gray-900 px-4 py-2  mb-2">
                        <span className="label-text  text-white">To:</span> <span className="text-white font-bold">Eli Bautista</span>
                    </div>

                    {/* Messages */}
                    <Messages />

                    {/* Message Input */}
                    <MessageForm />
                </>
            )}
        </div>
    )
}

export default MessageContainer

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-md md:text-lg text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome, Eli Bautista!</p>
                <p>Select a chat to start a conversation</p>
                <BiSolidConversation className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
}