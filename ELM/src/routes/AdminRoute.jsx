import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {

    const role = localStorage.getItem("role");

    if (
        role !== "MANAGER" &&
        role !== "ADMIN" 
    ) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default AdminRoute;