import React from 'react';
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  const handleLogout = async () => {
    if (!loading) {
      await logout();
    }
  };

  return (
    <div
      className=" mt-auto flex items-center justify-center space-x-2 drop-shadow-md bg-stone-900 text-white py-2 px-4 rounded-md cursor-pointer text-sm hover:bg-stone-800 "
      onClick={handleLogout}
    >
      {!loading ? (
        <div className='inline-flex gap-2'>
          <TbLogout2 className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </div>
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
}

export default LogoutButton;
