import React from 'react'
import useAuth from './useAuth'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
const Protected = () => {
    const {currentUser} = useAuth()
    console.log('CRU',currentUser.email)
  return (
   currentUser && currentUser.email === "letanhoa1234@gmail.com" ? <Outlet/> : <Navigate to='/'/>
  )
}

export default Protected