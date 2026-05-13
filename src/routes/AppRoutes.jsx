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
import Dashboard from '../pages/admin/dashboard'
import EmployeeList from '../pages/admin/employeeList'
import LeaveRequests from '../pages/admin/leaverequests'
import CalenderAdmin from '../pages/admin/CalenderAdmin'
import SalaryEm from '../pages/admin/SalaryEm'
import Setting from '../pages/admin/Setting'
import attendence from '../pages/admin/attendence'
import Reports from '../pages/admin/Reports'


// Employee pages
import UserDashboard from '../pages/employee/UserDashboard'
import UserAttendance from '../pages/employee/UserAttendance'
import UserLeaves from '../pages/employee/UserLeaves'
import UserSalary from '../pages/employee/UserSalary'
import UserCalendar from '../pages/employee/UserCalendar'
import UserSettings from '../pages/employee/UserSettings'


// Authority pages
import Leaves from '../pages/authorities/Leaves'



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
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/employees" element={<EmployeeList />} />
      <Route path="/admin/leaverequests" element={<LeaveRequests />} />
      <Route path="/admin/calender" element={<CalenderAdmin />} />
      <Route path="/admin/salary" element={<SalaryEm />} />
      <Route path="/admin/setting" element={<Setting />} />
      <Route path="/admin/attendence" element={<attendence />} />
      <Route path="/admin/reports" element={<Reports />} />



      {/* Employee */}
      <Route path="/employee/dashboard" element={<UserDashboard />} />
      <Route path="/employee/applyleave" element={<UserLeaves />} />
      <Route path="/employee/attendance" element={<UserAttendance />} />
      <Route path="/employee/salary" element={<UserSalary />} />
      <Route path="/employee/calendar" element={<UserCalendar />} />
      <Route path="/employee/settings" element={<UserSettings />} />

      {/* Authority */}
      <Route path="/authority/leaves" element={<Leaves />} />

      {/* Default Route */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
    
  );
}

export default AppRoutes;