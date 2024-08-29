import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';
import { toast } from 'sonner';

const SearchForm = () => {

  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    if (search.length < 3) {
      return toast.error('Oops! Try typing at least 3 characters to search.');
    }

    const filteredConversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (filteredConversation) {
      setSelectedConversation(filteredConversation);
      setSearch("");
    } else {
      toast.error("No user found.")
    }
  }
  return (
    <form className='flex items-center gap-2 pt-2' onSubmit={handleSubmit}>
      <input value={search} onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder='Search ChatterBox' className='input input-bordered rounded-sm bg-white   drop-shadow-md text-black input-sm h-8' />
      <button className="btn btn-sm btn-square rounded-sm bg-white drop-shadow-md text-black  border-none hover:text-white">
        <IoSearchSharp className='w-5 h-5 outline-none' />
      </button>

    </form>
  )
}

export default SearchForm
