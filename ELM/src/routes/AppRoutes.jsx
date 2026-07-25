
import { Routes, Route, Navigate } from "react-router-dom";

// common pages
import Home from '../pages/home/Home'
import About from '../pages/home/About'
import Contact from '../pages/home/Contact'

// Authenticated pages
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'
import ForgotPassword from '../pages/auth/ForgotPassword'
import ResetPassword from '../pages/auth/ResetPassword'

// Super Admin pages
import SuperAdminDashboard from '../pages/superadmin/SuperAdminDashboard'
import ManageAdmins from '../pages/superadmin/ManageAdmins'
import ManageUsers from '../pages/superadmin/ManageUsers'


// Admin pages
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminReports from '../pages/admin/AdminReports'
import EmployeeList from '../pages/admin/EmployeeList'
import EmployeeSalary from '../pages/admin/EmployeesSalary'


// Employee pages
import EmployeeDashboard from '../pages/employee/EmployeeDashboard'
import EmployeeLeaves from '../pages/employee/EmployeeLeaves'
import Mysalary from '../pages/employee/MySalary'



//Manager pages
import ManagerDashboard from '../pages/manager/ManagerDashboard'
import ManagerLeaves from '../pages/manager/ManagerLeaves'
import ManagerSalary from '../pages/manager/ManagerSalary'


// Shared pages
import Calendar from '../pages/shared/Calendar'
import Setting from '../pages/shared/Setting'
import LeaveRequests from '../pages/shared/LeaveRequests'

// Authority pages
import Leaves from '../pages/manager/ManagerLeaves'

// Layouts
import PublicLayout from '../layouts/PublicLayout'
import DashboardLayout from '../layouts/DashboardLayout'

// Protected Route Component
import AdminRoute from "./AdminRoute";
import ManagerRoute from "./ManagerRoute";


const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token') // change as needed
  return isLoggedIn ? children : <Navigate to="/login" replace />
}


const AppRoutes = () => {
  return (

    <Routes>

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Route>


      {/* Dashboard pages () */}
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }


      >
        {/* Super Admin routes */}
        <Route path="/superadmin/superadmindashboard" element={<SuperAdminDashboard />} />
        <Route path="/superadmin/manageadmins" element={<ManageAdmins />} />
        <Route path="/superadmin/manageusers" element={<ManageUsers />} />


        {/* Admin routes */}
        <Route path="/admin/admindashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/admin/adminreports" element={<AdminRoute><AdminReports /></AdminRoute>} />
        <Route path="/admin/employeelist" element={<AdminRoute><EmployeeList /></AdminRoute>} />
        <Route path="/admin/employeesalary" element={<AdminRoute><EmployeeSalary /></AdminRoute>} />


        {/* Employee routes */}
        <Route path="/employee/employeedashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/employeaves" element={<EmployeeLeaves />} />
        <Route path="/employee/mysalary" element={<Mysalary />} />



        {/* Authority routes */}
        <Route path="/manager/managerdashboard" element={<ManagerRoute><ManagerDashboard /></ManagerRoute>} />
        <Route path="/manager/managerleaves" element={<ManagerRoute><ManagerLeaves /></ManagerRoute>} />
        <Route path="/manager/managersalary" element={<ManagerRoute><ManagerSalary /></ManagerRoute>} />




        {/* Shared routes */}
        <Route path="/shared/calendar" element={<Calendar />} />
        <Route path="/shared/setting" element={<Setting />} />
        <Route path="/shared/leaverequests" element={<LeaveRequests />} />

      </Route>

      {/* login forget reset */}
      <Route path="auth/forgot-password" element={<ForgotPassword />} />
      <Route
        path="auth/reset-password"
        element={<ResetPassword />}
      />


      {/* Default Route */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>

  );
}

export default AppRoutes;