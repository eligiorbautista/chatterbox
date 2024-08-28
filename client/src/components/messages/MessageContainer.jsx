import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageForm from './MessageForm'
import { BiSolidConversation } from "react-icons/bi";
import useConversation from '../../zustand/useConversation';

const MessageContainer = () => {

    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {

        // clean up function (on mount)
        return () => setSelectedConversation(null)
    }, [])

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!selectedConversation ? (<NoChatSelected />) : (
                <>
                    {/* Header */}
                    <div className="bg-gray-900 px-4 py-2  mb-2">
                        <span className="text-white font-bold">{selectedConversation.fullName}</span>
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