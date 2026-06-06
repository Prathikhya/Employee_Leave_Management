import React from "react";
import { NavLink } from "react-router-dom";


const Dashboard = () => {

  const stats = [
    {
      title: 'Total Employees',
      value: '248',
      icon: '👨‍💼',
      growth: '+12%',
    },
    {
      title: 'Pending Leaves',
      value: '18',
      icon: '📝',
      growth: '+4%',
    },
    {
      title: 'Approved Requests',
      value: '132',
      icon: '✅',
      growth: '+22%',
    },
    {
      title: 'Departments',
      value: '12',
      icon: '🏢',
      growth: '+2%',
    },
  ];

  const employees = [
    {
      name: 'Rahul Sharma',
      department: 'Engineering',
      leave: 'Medical Leave',
      status: 'Pending',
    },
    {
      name: 'Anjali Singh',
      department: 'HR',
      leave: 'Casual Leave',
      status: 'Approved',
    },
    {
      name: 'Aman Verma',
      department: 'Finance',
      leave: 'Vacation',
      status: 'Rejected',
    },
  ];



  return (

    
        <div className="min-h-screen bg-slate-100">
        {/* Main Content */}
        <div className="flex-grow-1 p-4">

          {/* Top Navbar */}
          <div className="bg-white rounded-4 shadow-sm p-4 d-flex justify-content-between align-items-center mb-4">
            <div>
              <h2 className="fw-bold mb-1">Admin Dashboard</h2>
              <p className="text-muted mb-0">
                Welcome back, Admin 👋
              </p>
            </div>

            <div className="d-flex align-items-center gap-3">
              <input
                type="text"
                placeholder="Search employees..."
                className="form-control rounded-4"
                style={{ width: '260px' }}
              />

              <img
                src="https://i.pravatar.cc/60"
                alt="admin"
                className="rounded-circle border"
              />
            </div>
          </div>


          {/* Admin Profile Section */}
          <div className="bg-white rounded-4 shadow-sm p-4 mb-4 border-0">
            <div className="row align-items-center">
              <div className="col-lg-8 d-flex align-items-center gap-4">
                <img
                  src="https://i.pravatar.cc/120"
                  alt="admin"
                  className="rounded-circle border border-3"
                />

                <div>
                  <h3 className="fw-bold mb-1">Funny admin</h3>
                  <p className="text-primary fw-semibold mb-2">
                    System Administrator
                  </p>

                  <p className="text-muted mb-2">
                    Managing employee leave requests, attendance,
                    payroll, department records, and system analytics.
                  </p>

                  <div className="d-flex flex-wrap gap-3 mt-3">
                    <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">
                      Admin Access
                    </span>

                    <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                      Active Status
                    </span>

                    <span className="badge bg-warning-subtle text-warning px-3 py-2 rounded-pill">
                      5+ Years Experience
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mt-4 mt-lg-0">
                <div className="bg-light rounded-4 p-4">
                  <h5 className="fw-bold mb-3">Admin Information</h5>

                  <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">Employee ID</span>
                    <span className="fw-semibold">ADM1024</span>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">Department</span>
                    <span className="fw-semibold">Administration</span>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <span className="text-muted">Email</span>
                    <span className="fw-semibold">
                      admin@company.com
                    </span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Location</span>
                    <span className="fw-semibold">India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="row g-4 mb-4">
              {stats.map((item, index) => (
                <div className="col-md-6 col-xl-3" key={index}>
                  <div className="bg-white shadow-sm rounded-4 p-4 h-100 border-0">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <p className="text-muted mb-1">{item.title}</p>
                        <h2 className="fw-bold">{item.value}</h2>
                      </div>

                      <div
                        className="d-flex align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: '60px', height: '60px', fontSize: '28px' }}
                      >
                        {item.icon}
                      </div>
                    </div>

                    <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                      {item.growth} this month
                    </span>
                  </div>
                </div>
              ))}
            </div>


            {/* Charts + Activity */}
            <div className="row g-4 mb-4">
              <div className="col-lg-8">
                <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="fw-bold">Leave Analytics</h4>

                    <select className="form-select w-auto rounded-4">
                      <option>This Month</option>
                      <option>Last Month</option>
                    </select>
                  </div>

                  <div
                    className="rounded-4 bg-light d-flex align-items-center justify-content-center"
                    style={{ height: '320px' }}
                  >
                    <div className="text-center">
                      <h1 style={{ fontSize: '80px' }}>📊</h1>
                      <p className="text-muted">
                        Analytics Chart Area
                      </p>
                      <small className="text-secondary">
                        Connect Recharts or Chart.js later
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bg-white rounded-4 shadow-sm p-4 h-100">
                  <h4 className="fw-bold mb-4">Recent Activities</h4>

                  <div className="d-flex flex-column gap-4">
                    {[
                      'Rahul requested Medical Leave',
                      'Anjali leave approved',
                      'New employee added',
                      'Salary processed successfully',
                      'Meeting scheduled for HR team',
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="d-flex align-items-start gap-3"
                      >
                        <div
                          className="rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center"
                          style={{ width: '45px', height: '45px' }}
                        >
                          🔔
                        </div>

                        <div>
                          <p className="mb-1 fw-medium">{activity}</p>
                          <small className="text-muted">
                            2 mins ago
                          </small>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

    
        );
};

        export default Dashboard;