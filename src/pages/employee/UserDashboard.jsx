import React from 'react'

const UserDashboard = () => {
  return (
    
    <div className="container mt-4">
      <h2>Employee Dashboard</h2>

      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Apply Leave</h5>
            <Link to="/employee/apply-leave" className="btn btn-success">
              Apply Now
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3">
            <h5>Leave History</h5>
            <Link to="/employee/history" className="btn btn-info">
              View History
            </Link>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default UserDashboard
