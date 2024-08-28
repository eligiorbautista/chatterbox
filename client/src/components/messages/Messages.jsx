import React from 'react';
import Message from './Message';
import '../../index.css';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useConversation from '../../zustand/useConversation';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const { selectedConversation } = useConversation();

  return (
    <div className="px-4 flex-1 overflow-auto py-4">
      {/* IF THERE ARE MESSAGES */}
      {!loading && messages.length > 0 && messages.map((message, _key = message._id) => (
        <Message key={_key} message={message} />
      ))}

      {/* IF LOADING */}
      {loading && [...Array(5)].map((_, _index) => <MessageSkeleton key={_index} />)}

      {/* IF NOT LOADING AND THERE ARE NO MESSAGES */}
      {!loading && messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-center text-sm">
            You're about to start a new conversation with {`${selectedConversation.fullName}`}. <br />Say hello and enjoy your chat!
          </p>
        </div>
      )}
    </div>
  );
}

export default Messages;
