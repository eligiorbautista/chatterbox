import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(`Conversations: ${conversations}`);
  return (
    <div className='py-0 flex flex-col overflow-auto mb-2'>
      {conversations.map((conversation, _index) => (
        <Conversation key={conversation._id} conversation={conversation} lastIdx={_index === conversation.length - 1} />
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations
