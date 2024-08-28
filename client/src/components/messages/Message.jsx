import React from 'react';
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../context/AuthContext';
// import { formatTime } from '../../utils/formatTime';
import moment from 'moment';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-stone-900 text-white' : "bg-zinc-300 text-black";
    const formattedTime = moment(message.createdAt).format('HH:mm a');
    const shakeClass = message.shouldShake ? 'shake' : ''; 

    return (
        <div className={`chat ${chatClassName} mb-3`}>
            <div className="chat-image avatar">
                <div className="w-9 rounded-full">
                    <img src={profilePic} alt="Profile" />
                </div>
            </div>
            <div className={`chat-bubble rounded-none ${bubbleBgColor} ${shakeClass} p-2 text-sm text-start`}>{message.message}</div>
            <div className="chat-footer text-black opacity-50 pt-2 text-xs flex gap-1 items-center">{formattedTime}</div>
        </div>
    );
}

export default Message;

