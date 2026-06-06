import { Navigate } from "react-router-dom";

const EmployeeRoute = ({ children }) => {

    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default EmployeeRoute;