import React from 'react';
import useAuth from '../../hooks/useAuth';
import './Header.styles.css';

const Header = () => {
  const {auth, logout} = useAuth();

  console.log(auth);

  return (
    <header className="border-b border-gray-700 py-5 mb-5">
      <div className='flex justify-between px-2'>
        <h1 className='text-3xl text-gray-100 text-center font-bold'>Hello {auth.user} </h1>
        <button
          className='bg-red-500 font-bold text-md rounded-md px-3 py-1 text-gray-100 hover:bg-red-600 hover:text-gray-200 shadow-md'
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      </div>
    </header>
  )
}

export default Header;