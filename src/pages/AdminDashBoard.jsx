import React from 'react'
import { useAuth } from '../context/authContext'
import {Outlet, useNavigate} from 'react-router-dom'
import AdminSideBar from '../components/dashBoard/AdminSideBar'
import Navbar from '../components/dashBoard/Navbar'

const AdminDashBoard = () => {

  const {user, loading} = useAuth()
  

  
  return (
    // <div>AdminDashBoard {user && user.name}</div>

    <div className='flex'>
      <AdminSideBar />
      <div className='flex-1 ml-64 bg-gray-100 h-screen'>
          <Navbar />
          <Outlet />
      </div>
    </div>
  )
}

export default AdminDashBoard