import React from 'react'
import useConversation from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, _index, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-zinc-300  rounded p-2  cursor-pointer ${isSelected ? "bg-zinc-300 " : ""}`} onClick={() => setSelectedConversation(conversation)}>

                <div className={`avatar  ${isOnline ? "online" : ""}`}>
                    <div className="w-8 rounded-full">
                        <img src={conversation.profilePic} alt="user profile picture" />
                    </div>
                </div>
                <div className="flex flex-col flex-1">
                    <div className='flex gap-3 justify-between'>
                        <p className=' text-black  text-sm'>{conversation.fullName}</p>
                        <p className={`text-xs  font-semibold ${isOnline ? 'text-green-500' : 'text-black'} ${isSelected ? 'text-lime-600' : ''}`}>
                            {isOnline ? 'online' : 'offline'}
                        </p>
                    </div>
                </div>
            </div>

            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    )
}

export default Conversation
