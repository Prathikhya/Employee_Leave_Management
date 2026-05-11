import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
 
// common pages
import Home from '../pages/common/home'
import About from '../pages/common/about'
import Contact from '../pages/common/contact'

// Authenticated pages
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'


// Admin pages
import AdminDashboard from '../pages/admin/adminDashboard'
import EmployeeList from '../pages/admin/EmployeeList'
import LeaveRequests from '../pages/admin/LeaveRequests'


// Employee pages
import UserDashboard from '../pages/employee/userDashboard'
import Profile from '../pages/employee/Profile'
import LeaveHistory from '../pages/employee/LeaveHistory'
import LeaveForm from '../pages/employee/LeaveForm'



const AppRoutes = () => {
  return (

   <Routes>

      {/* Common */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/employees" element={<EmployeeList />} />
      <Route path="/admin/leaves" element={<LeaveRequests />} />

      {/* Employee */}
      <Route path="/employee/userdashboard" element={<UserDashboard />} />
      <Route path="/employee/applyleave" element={<LeaveForm />} />
      <Route path="/employee/history" element={<LeaveHistory />} />
      <Route path="/employee/profile" element={<Profile />} />

      {/* Default Route */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
    
  );
}

export default AppRoutes;