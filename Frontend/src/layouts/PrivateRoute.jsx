import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import Header from '../components/header/Header';
import useAuth from '../hooks/useAuth';

const PrivateRoute = () => {
  const {auth} = useAuth();
  
  if (!auth.admin) {
    return <Navigate to='/'/>
  }

  return (
    <>
        <Header/>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default PrivateRoute;