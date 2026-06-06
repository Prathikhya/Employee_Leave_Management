
import { Routes, Route, Navigate } from "react-router-dom";
 
// common pages
import Home from '../pages/home/Home'
import About from '../pages/home/About'
import Contact from '../pages/home/Contact'

// Authenticated pages
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'


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
import Calender from '../pages/shared/Calender'
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
       {/* Public routes */}
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
    </Route>


    {/* Dashboard pages () */}
    <Route
      element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }

    >
      {/* Admin routes */}
    <Route  path="/admin/admindashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>}
/>
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

    </Route>

      {/* Default Route */}
      <Route path="*" element={<Navigate to="/" />} />

    </Routes>
    
  );
}

export default AppRoutes;