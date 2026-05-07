import React from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'
 
// common pages
import Home from '../pages/common/home'
import About from '../pages/common/about'
import Contact from '../pages/common/contact'

// Authenticated pages
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'


// Admin pages
import AdminDashboard from '../pages/admin/adminDashboard'
import EmployeedList from '../pages/admin/employeeList'
import LeaveRequests from '../pages/admin/leaveRequests'


// Employee pages
import UserDashboard from '../pages/employee/userDashboard'
import Profile from '../pages/employee/profile'
import LeaveHistory from '../pages/employee/leaveHistory'
import LeaveForm from '../pages/employee/leaveForm'



const AppRoutes = () => {
  return (

    <Switch>

        {/* Common routes */}
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

        {/* Auth routes */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        {/* Admin routes */}
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/employee-list" component={EmployeedList} />
        <Route path="/admin/leave-requests" component={LeaveRequests} />


        {/* Employee routes */}
        <Route path="/employee/dashboard" component={UserDashboard} />
        <Route path="/employee/profile" component={Profile} />
        <Route path="/employee/leave-history" component={LeaveHistory} />
        <Route path="/employee/leave-form" component={LeaveForm} />

        {/* Redirect any unknown routes to home */}
        <Redirect to="/" />
    </Switch>
    
  )
}

export default AppRoutes;