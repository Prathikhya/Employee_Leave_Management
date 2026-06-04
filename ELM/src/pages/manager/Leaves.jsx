import React from 'react'
const requests = [
  {
    id: 1,
    employee: "Rahul",
    leave: "Medical Leave",
    status: "Pending",
  },
  {
    id: 2,
    employee: "Ankit",
    leave: "Casual Leave",
    status: "Pending",
  },
];

const Leaves = () => {
  return (
    <div>


      <h2 className="mb-4">Leave Requests</h2>

      <table className="table table-bordered table-hover bg-white">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.employee}</td>
              <td>{req.leave}</td>
              <td>{req.status}</td>

              <td>
                <button className="btn btn-success btn-sm me-2">
                  Approve
                </button>

                <button className="btn btn-danger btn-sm">
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Leaves;