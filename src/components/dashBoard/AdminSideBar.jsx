import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaBuilding, FaCalendar, FaCogs, FaMoneyBillWave, FaTachometerAlt, FaUsers} from 'react-icons/fa';

const AdminSideBar = () => {

  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
        <div className='bg-teal-600 h-12 flex items-center justify-center'>
            <h3 className='text-2xl text-center font-sans'>Employees MS</h3>
        </div>
        <div className='px-4'>
            <NavLink to='/admin-dashboard'
                className= {({isActive})=> `${isActive? "bg-teal-500" : "" } flex items-center space-x-4 block py-2.5 px-4 rounded`}
                end>
                <FaTachometerAlt />
                <span>DashBoard</span>
            </NavLink>
              <NavLink to='/admin-dashboard'
                  className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
                  <FaUsers />
                  <span>Employees</span>
              </NavLink>
              <NavLink to='/admin-dashboard/department'
                  className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                  <FaBuilding />
                  <span>Department</span>
              </NavLink>
              <NavLink to='/admin-dashboard'
                  className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
                  <FaCalendar />
                  <span>Leave</span>
              </NavLink>
              <NavLink to='/admin-dashboard'
                  className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
                  <FaMoneyBillWave />
                  <span>Salary</span>
              </NavLink>
              <NavLink to='/admin-dashboard'
                  className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
                  <FaCogs/>
                  <span>Settings</span>
              </NavLink>
        </div>
    </div>
  )
}

export default AdminSideBar