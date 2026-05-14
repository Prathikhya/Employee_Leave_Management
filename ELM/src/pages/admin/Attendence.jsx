import React from 'react';

const Attendance = () => {
  const employees = [
    {
      name: 'Rahul Sharma',
      department: 'Engineering',
      checkIn: '09:10 AM',
      checkOut: '06:15 PM',
      status: 'Present',
    },
    {
      name: 'Anjali Singh',
      department: 'HR',
      checkIn: '09:00 AM',
      checkOut: '06:00 PM',
      status: 'Present',
    },
    {
      name: 'Aman Verma',
      department: 'Finance',
      checkIn: '--',
      checkOut: '--',
      status: 'Absent',
    },
    {
      name: 'Priya Das',
      department: 'Marketing',
      checkIn: '09:25 AM',
      checkOut: '06:10 PM',
      status: 'Late',
    },
  ];

  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="bg-white shadow-sm rounded-4 p-4 mb-4 d-flex justify-content-between align-items-center">

        <div>
          <h2 className="fw-bold mb-1">
            Attendance Management
          </h2>

          <p className="text-muted mb-0">
            Monitor employee attendance records and work status
          </p>
        </div>

        <button className="btn btn-primary rounded-4 px-4">
          Export Report
        </button>

      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">

        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-4 p-4">

            <p className="text-muted mb-2">
              Total Employees
            </p>

            <h2 className="fw-bold">
              248
            </h2>

          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-4 p-4">

            <p className="text-muted mb-2">
              Present Today
            </p>

            <h2 className="fw-bold text-success">
              220
            </h2>

          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-4 p-4">

            <p className="text-muted mb-2">
              Absent
            </p>

            <h2 className="fw-bold text-danger">
              18
            </h2>

          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-4 p-4">

            <p className="text-muted mb-2">
              Late Entries
            </p>

            <h2 className="fw-bold text-warning">
              10
            </h2>

          </div>
        </div>

      </div>

      {/* Filters */}
      <div className="bg-white shadow-sm rounded-4 p-4 mb-4">

        <div className="row g-3">

          <div className="col-md-4">
            <input
              type="text"
              className="form-control rounded-4 py-3"
              placeholder="Search employee..."
            />
          </div>

          <div className="col-md-3">
            <select className="form-select rounded-4 py-3">
              <option>All Departments</option>
              <option>Engineering</option>
              <option>HR</option>
              <option>Finance</option>
            </select>
          </div>

          <div className="col-md-3">
            <select className="form-select rounded-4 py-3">
              <option>All Status</option>
              <option>Present</option>
              <option>Absent</option>
              <option>Late</option>
            </select>
          </div>

          <div className="col-md-2">
            <button className="btn btn-dark w-100 rounded-4 py-3">
              Filter
            </button>
          </div>

        </div>

      </div>

      {/* Attendance Table */}
      <div className="bg-white shadow-sm rounded-4 p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h4 className="fw-bold mb-0">
            Employee Attendance
          </h4>

          <button className="btn btn-outline-primary rounded-4">
            View Full Report
          </button>

        </div>

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>
              <tr>
                <th>Employee</th>
                <th>Department</th>
                <th>Check In</th>
                <th>Check Out</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {employees.map((employee, index) => (
                <tr key={index}>

                  <td>
                    <div className="d-flex align-items-center gap-3">

                      <img
                        src={`https://i.pravatar.cc/50?img=${index + 10}`}
                        alt="employee"
                        className="rounded-circle"
                      />

                      <div>
                        <h6 className="mb-0 fw-semibold">
                          {employee.name}
                        </h6>

                        <small className="text-muted">
                          employee@company.com
                        </small>
                      </div>

                    </div>
                  </td>

                  <td>{employee.department}</td>

                  <td>{employee.checkIn}</td>

                  <td>{employee.checkOut}</td>

                  <td>
                    <span
                      className={`badge rounded-pill px-3 py-2 ${
                        employee.status === 'Present'
                          ? 'bg-success'
                          : employee.status === 'Absent'
                          ? 'bg-danger'
                          : 'bg-warning text-dark'
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-sm btn-primary rounded-3">
                      View
                    </button>
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

export default Attendance;