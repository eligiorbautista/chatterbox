import React, { useEffect } from 'react';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext'
import { toast } from 'sonner';

const Message = ({ message }) => {
    const { authUser } = useAuthContext(); 
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-gray-800' : "";

    // toast.info(authUser._id)

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-9 rounded-full">
                    <img src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubbletext-white ${bubbleBgColor} p-2 text-sm text-start`}>{message.message}</div>
            <div className="chat-footer  text-white opacity-50 pt-2 text-xs flex gap-1 items-center">12:27</div>
        </div>
    )
}

export default Message;
