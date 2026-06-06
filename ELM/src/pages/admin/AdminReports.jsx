import React from 'react';

const AdminReports = () => {
  const reports = [
    {
      title: 'Employee Reports',
      total: 248,
      icon: '👨‍💼',
      description: 'Complete employee records and department analytics',
    },
    {
      title: 'Leave Reports',
      total: 124,
      icon: '📅',
      description: 'Leave requests, approvals, and absence tracking',
    },
    {
      title: 'Salary Reports',
      total: '₹14.5L',
      icon: '💰',
      description: 'Monthly payroll, bonuses, and deductions',
    },
    {
      title: 'Attendance Reports',
      total: '96%',
      icon: '✅',
      description: 'Employee attendance and performance tracking',
    },
  ];

  const recentReports = [
    {
      report: 'Monthly Salary Report',
      department: 'Finance',
      generated: '10 May 2026',
      status: 'Completed',
    },
    {
      report: 'Employee Attendance Analysis',
      department: 'HR',
      generated: '09 May 2026',
      status: 'Completed',
    },
    {
      report: 'Leave Request Summary',
      department: 'Administration',
      generated: '08 May 2026',
      status: 'Processing',
    },
    {
      report: 'Department Performance',
      department: 'Engineering',
      generated: '07 May 2026',
      status: 'Completed',
    },
  ];

  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="bg-white shadow-sm rounded-4 p-4 mb-4 d-flex justify-content-between align-items-center">

        <div>
          <h2 className="fw-bold mb-1">
            Analytics & Reports
          </h2>

          <p className="text-muted mb-0">
            Monitor employee, salary, leave, and attendance analytics
          </p>
        </div>

        <button className="btn btn-primary rounded-4 px-4">
          Generate Report
        </button>

      </div>

      {/* Analytics Cards */}
      <div className="row g-4 mb-4">

        {reports.map((item, index) => (
          <div className="col-md-6 col-xl-3" key={index}>

            <div className="bg-white shadow-sm rounded-4 p-4 h-100">

              <div className="d-flex justify-content-between align-items-center mb-3">

                <div>
                  <p className="text-muted mb-1">
                    {item.title}
                  </p>

                  <h2 className="fw-bold">
                    {item.total}
                  </h2>
                </div>

                <div
                  className="bg-light rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: '70px',
                    height: '70px',
                    fontSize: '32px',
                  }}
                >
                  {item.icon}
                </div>

              </div>

              <p className="text-muted mb-0">
                {item.description}
              </p>

            </div>

          </div>
        ))}

      </div>

      {/* Charts Section */}
      <div className="row g-4 mb-4">

        {/* Employee Analytics */}
        <div className="col-lg-8">

          <div className="bg-white shadow-sm rounded-4 p-4 h-100">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h4 className="fw-bold mb-0">
                Analytics Overview
              </h4>

              <select className="form-select w-auto rounded-4">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>

            </div>

            <div
              className="bg-light rounded-4 d-flex align-items-center justify-content-center"
              style={{ height: '350px' }}
            >
              <div className="text-center">

                <h1 style={{ fontSize: '90px' }}>
                  📊
                </h1>

                <h5 className="fw-bold">
                  Analytics Chart Area
                </h5>

                <p className="text-muted">
                  Integrate Chart.js or Recharts here
                </p>

              </div>
            </div>

          </div>

        </div>

        {/* Quick Analytics */}
        <div className="col-lg-4">

          <div className="bg-white shadow-sm rounded-4 p-4 h-100">

            <h4 className="fw-bold mb-4">
              Quick Insights
            </h4>

            <div className="d-flex flex-column gap-4">

              <div className="bg-light rounded-4 p-3">
                <p className="text-muted mb-1">
                  Highest Attendance
                </p>

                <h5 className="fw-bold mb-0">
                  Engineering - 98%
                </h5>
              </div>

              <div className="bg-light rounded-4 p-3">
                <p className="text-muted mb-1">
                  Most Leaves Taken
                </p>

                <h5 className="fw-bold mb-0">
                  Marketing Department
                </h5>
              </div>

              <div className="bg-light rounded-4 p-3">
                <p className="text-muted mb-1">
                  Total Payroll
                </p>

                <h5 className="fw-bold mb-0">
                  ₹14,50,000
                </h5>
              </div>

              <div className="bg-light rounded-4 p-3">
                <p className="text-muted mb-1">
                  Active Employees
                </p>

                <h5 className="fw-bold mb-0">
                  220 Employees
                </h5>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Reports Table */}
      <div className="bg-white shadow-sm rounded-4 p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h4 className="fw-bold mb-0">
            Recent Reports
          </h4>

          <button className="btn btn-outline-primary rounded-4">
            Download All
          </button>

        </div>

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>
              <tr>
                <th>Report Name</th>
                <th>Department</th>
                <th>Generated On</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {recentReports.map((report, index) => (
                <tr key={index}>

                  <td>
                    <h6 className="mb-0 fw-semibold">
                      {report.report}
                    </h6>
                  </td>

                  <td>{report.department}</td>

                  <td>{report.generated}</td>

                  <td>
                    <span
                      className={`badge rounded-pill px-3 py-2 ${
                        report.status === 'Completed'
                          ? 'bg-success'
                          : 'bg-warning text-dark'
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>

                  <td>

                    <div className="d-flex gap-2">

                      <button className="btn btn-sm btn-primary rounded-3">
                        View
                      </button>

                      <button className="btn btn-sm btn-success rounded-3">
                        Download
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default AdminReports;