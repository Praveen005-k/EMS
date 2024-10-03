import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes , Route, Navigate} from 'react-router-dom'
import Login from './pages/Login'
import AdminDashBoard from './pages/AdminDashBoard'
import EmployeeDashboard from './pages/EmployeeDashboard'
import PrivateRoutes from './utils/PrivateRoutes'
import RoleBaseRoute from './utils/RoleBaseRoute'
import AdminSummary from './components/dashBoard/AdminSummary'
import DepartmentList from './components/department/DepartmentList'
import AddDepartment from './components/department/AddDepartment'


function App() {

  return (
    <>
     

     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Navigate to='/admin-dashboard'/>}/>
      <Route path='/login' element={<Login/>}/>
      
      <Route path='/admin-dashboard' element={
        <PrivateRoutes>
              <RoleBaseRoute requiredRole={['admin']}>
                  <AdminDashBoard /> 
              </RoleBaseRoute>
            </PrivateRoutes>
        }>

            <Route index element={<AdminSummary />} />
            <Route path='/admin-dashboard/department' element={<DepartmentList />} />
            <Route path='/admin-dashboard/add-department' element={<AddDepartment />} />


        </Route>

       
      <Route path='/employee-dashboard' element={<EmployeeDashboard /> }/>
      

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
