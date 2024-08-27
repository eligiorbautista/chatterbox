import React from 'react' 
import SearchForm from './SearchForm'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchForm/>
        <div className="divider px-3"></div>
        <Conversations/>
        <LogoutButton/>
    </div>
  )
}

export default Sidebar
