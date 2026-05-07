import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Manage Employees</h5>
            <Link to="/admin/employees" className="btn btn-primary">
              View Employees
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Leave Requests</h5>
            <Link to="/admin/leaves" className="btn btn-warning">
              Approve / Reject
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;