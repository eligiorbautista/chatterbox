import React from 'react'
import useConversation from '../../zustand/useConversation';

const Conversation = ({ conversation, _index }) => {
    const isOnline = true;
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-gray-600 rounded p-2 py-2 cursor-pointer ${isSelected ? "bg-gray-600" : ""}`} onClick={() => setSelectedConversation(conversation)}>
                <div className="avatar online ">
                    <div className="w-8 rounded-full">
                        <img src={conversation.profilePic} alt="user profile picture" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className=' text-gray-200  text-sm'>{conversation.fullName}</p>
                        {/* <p className={`text-xs ${isOnline ? 'text-green-500' : 'text-gray-400'}`}>
                            {isOnline ? 'active now' : 'offline'}
                        </p> */}
                    </div>
                </div>
            </div>

            <div className='divider my-0 py-0 h-1.5'></div>
        </>
    )
}

export default Conversation
