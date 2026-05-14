import React from 'react'
import { Link } from 'react-router-dom';


const stats = [
  {
    title: 'Leave Balance',
    value: '12 Days',
    icon: '📅',
  },
    {
      title: 'Attendance',
      value: '96%',
      icon: '✅',
    },
    {
      title: 'Salary Status',
      value: 'Credited',
      icon: '💰',
    },
  ];
  
  const UserDashboard = () => {
    return (

    <div className="d-flex bg-light" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-4 d-flex flex-column"
        style={{ width: '270px' }}
      >
        <div className="mb-5">
          <h2 className="fw-bold">Employee Panel</h2>
          <p className="text-secondary">
            Leave Management System
          </p>
        </div>

        <div className="d-flex flex-column gap-3">
          <Link
            to="/dashboard"
            className="btn btn-dark border border-secondary rounded-4 text-start py-3"
          >
            Dashboard
          </Link>

          <Link
            to="/dashboard"
            className="btn btn-dark border border-secondary rounded-4 text-start py-3"
          >
            Attendance
          </Link>


<Link
            to="/dashboard"
            className="btn btn-dark border border-secondary rounded-4 text-start py-3"
          >
            Leaves
          </Link>


          <Link
            to="/calendar"
            className="btn btn-dark border border-secondary rounded-4 text-start py-3"
          >
            Calendar
          </Link>

          <Link
            to="/salary"
            className="btn btn-dark border border-secondary rounded-4 text-start py-3"
          >
            Salary
          </Link>

          <div className="dropdown">
            <button
              className="btn btn-dark border border-secondary rounded-4 text-start py-3 w-100 "
              data-bs-toggle="dropdown"
            >
              Settings
            </button>

            <ul className="dropdown-menu w-100 rounded-4 border-0 shadow">
              <li>
                <Link
                  to="/edit-profile"
                  className="dropdown-item py-3"
                >
                  Edit Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-auto pt-5">
          <button className="btn btn-danger w-100 rounded-4 py-3">
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        {/* Navbar */}
        <div className="bg-white shadow-sm rounded-4 p-4 d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Welcome Back 👋</h2>
            <p className="text-muted mb-0">
              Employee Dashboard
            </p>
          </div>

          <div className="d-flex align-items-center gap-3">
            <img
              src="https://i.pravatar.cc/60"
              alt="user"
              className="rounded-circle"
            />
          </div>
        </div>

        {/* User Profile Section */}
        <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
          <div className="row align-items-center">
            <div className="col-lg-8 d-flex align-items-center gap-4">
              <img
                src="https://i.pravatar.cc/120"
                alt="employee"
                className="rounded-circle border border-3"
              />

              <div>
                <h3 className="fw-bold mb-1">employee 1</h3>
                <p className="text-primary fw-semibold mb-2">
                  Software Engineer
                </p>

                <p className="text-muted mb-2">
                  Working in frontend development and handling
                  dashboard management system tasks.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-3">
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                    Active Employee
                  </span>

                  <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                    Full Time
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="bg-light rounded-4 p-4">
                <h5 className="fw-bold mb-3">Employee Details</h5>

                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Employee ID</span>
                  <span className="fw-semibold">EMP1042</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Department</span>
                  <span className="fw-semibold">Engineering</span>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Email</span>
                  <span className="fw-semibold">
                    employee@company.com
                  </span>
                </div>

                <div className="d-flex justify-content-between">
                  <span className="text-muted">Location</span>
                  <span className="fw-semibold">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-4">
          {stats.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">
                      {item.title}
                    </p>
                    <h3 className="fw-bold">{item.value}</h3>
                  </div>

                  <div
                    className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px', fontSize: '28px' }}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Calendar + Salary */}
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold">Work Calendar</h4>

                <button className="btn btn-primary rounded-4 px-4">
                  Request Leave
                </button>
              </div>

              <div
                className="bg-light rounded-4 d-flex align-items-center justify-content-center"
                style={{ height: '320px' }}
              >
                <div className="text-center">
                  <h1 style={{ fontSize: '80px' }}>📆</h1>
                  <p className="text-muted mb-0">
                    Calendar Integration Area
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
              <h4 className="fw-bold mb-4">Salary Details</h4>

              <div className="bg-light rounded-4 p-4 mb-3">
                <p className="text-muted mb-1">Monthly Salary</p>
                <h2 className="fw-bold">₹58,000</h2>
              </div>

              <div className="bg-light rounded-4 p-4 mb-3">
                <p className="text-muted mb-1">Bonus</p>
                <h4 className="fw-bold">₹5,000</h4>
              </div>

              <div className="bg-light rounded-4 p-4">
                <p className="text-muted mb-1">Payment Status</p>
                <span className="badge bg-success px-3 py-2 rounded-pill">
                  Paid Successfully
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default UserDashboard
