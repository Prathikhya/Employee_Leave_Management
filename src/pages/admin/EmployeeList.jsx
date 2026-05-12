import React from 'react';

const EmployeeList = () => {
  const employees = [
    {
      id: 'EMP101',
      name: 'Rahul Sharma',
      department: 'Engineering',
      role: 'Frontend Developer',
      email: 'rahul@company.com',
      status: 'Active',
    },
    {
      id: 'EMP102',
      name: 'Anjali Singh',
      department: 'HR',
      role: 'HR Manager',
      email: 'anjali@company.com',
      status: 'Active',
    },
    {
      id: 'EMP103',
      name: 'Aman Verma',
      department: 'Finance',
      role: 'Accountant',
      email: 'aman@company.com',
      status: 'Inactive',
    },
    {
      id: 'EMP104',
      name: 'Priya Das',
      department: 'Marketing',
      role: 'Marketing Executive',
      email: 'priya@company.com',
      status: 'Active',
    },
  ];

  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="bg-white shadow-sm rounded-4 p-4 mb-4 d-flex justify-content-between align-items-center">

        <div>
          <h2 className="fw-bold mb-1">
            Employee Management
          </h2>

          <p className="text-muted mb-0">
            View and manage all employees in the organization
          </p>
        </div>

        <button className="btn btn-primary rounded-4 px-4">
          + Add Employee
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
              Active Employees
            </p>

            <h2 className="fw-bold text-success">
              220
            </h2>

          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-4 p-4">

            <p className="text-muted mb-2">
              Departments
            </p>

            <h2 className="fw-bold text-primary">
              12
            </h2>

          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white shadow-sm rounded-4 p-4">

            <p className="text-muted mb-2">
              Inactive Employees
            </p>

            <h2 className="fw-bold text-danger">
              28
            </h2>

          </div>
        </div>

      </div>

      {/* Search & Filters */}
      <div className="bg-white shadow-sm rounded-4 p-4 mb-4">

        <div className="row g-3">

          <div className="col-md-5">
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
              <option>Marketing</option>
            </select>
          </div>

          <div className="col-md-2">
            <select className="form-select rounded-4 py-3">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="col-md-2">
            <button className="btn btn-dark w-100 rounded-4 py-3">
              Filter
            </button>
          </div>

        </div>

      </div>

      {/* Employee Table */}
      <div className="bg-white shadow-sm rounded-4 p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h4 className="fw-bold mb-0">
            Employee List
          </h4>

          <button className="btn btn-outline-primary rounded-4">
            Export List
          </button>

        </div>

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>
              <tr>
                <th>Employee</th>
                <th>Employee ID</th>
                <th>Department</th>
                <th>Role</th>
                <th>Email</th>
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
                        src={`https://i.pravatar.cc/50?img=${index + 15}`}
                        alt="employee"
                        className="rounded-circle"
                      />

                      <div>
                        <h6 className="mb-0 fw-semibold">
                          {employee.name}
                        </h6>

                        <small className="text-muted">
                          Employee
                        </small>
                      </div>

                    </div>
                  </td>

                  <td>{employee.id}</td>

                  <td>{employee.department}</td>

                  <td>{employee.role}</td>

                  <td>{employee.email}</td>

                  <td>
                    <span
                      className={`badge rounded-pill px-3 py-2 ${
                        employee.status === 'Active'
                          ? 'bg-success'
                          : 'bg-danger'
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>

                  <td>
                    <div className="d-flex gap-2">

                      <button className="btn btn-sm btn-primary rounded-3">
                        View
                      </button>

                      <button className="btn btn-sm btn-warning rounded-3 text-white">
                        Edit
                      </button>

                      <button className="btn btn-sm btn-danger rounded-3">
                        Delete
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

export default EmployeeList;