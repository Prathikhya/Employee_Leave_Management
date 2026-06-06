import { Navigate } from "react-router-dom";

const ManagerRoute = ({ children }) => {

  const role = localStorage.getItem("role");

  return role === "MANAGER" || role === "ADMIN"
    ? children
    : <Navigate to="/employee/dashboard" replace />;
};

export default ManagerRoute;

