import React from 'react'

function home() {
  return (
    <div className="container mt-5">

      <div className="row align-items-center">

        {/* Left Column - Details */}
        <div className="col-md-6">
          <h1 className="fw-bold mb-4">
            Leave Management System
          </h1>

          <p className="lead">
            A smart and efficient platform to manage employee leave requests,
            approvals, and leave history with ease.
          </p>

          <p>
            This system helps organizations simplify leave tracking,
            improve communication between employees and administrators,
            and maintain accurate leave records.
          </p>

          <button className="btn btn-primary btn-lg mt-3">
            Get Started
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://uknowva.com/images/aashna/leave-management.png"
            alt="Leave Management"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>

      </div>

    </div>
  )
}

export default home
