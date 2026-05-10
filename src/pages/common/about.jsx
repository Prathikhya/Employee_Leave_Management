import React from 'react'

const about = () => {
  return (
        <div className="container mt-5">

      <div className="row align-items-center">

        {/* Left Column - Details */}
        <div className="col-md-6">
          <h1 className="fw-bold mb-4">
            About Employee Leave Management System
          </h1>

         <p>The Leave Management System is designed to streamline the process of managing employee leave requests. It provides a user-friendly interface for employees to apply for leave, view their leave history, and manage their profiles. Administrators can easily review and approve leave requests, manage employee information, and generate reports.</p>
         <p>Our goal is to enhance the efficiency of leave management while ensuring a seamless experience for both employees and administrators. We are committed to providing a reliable and secure platform that meets the needs of our users.</p>
    

         
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://www.hivepayroll.co.in/wp-content/uploads/2023/03/payroll-and-leave-management-software.png"
            alt="Leave Management"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>

      </div>

    </div>
    
    
  )
}

export default about