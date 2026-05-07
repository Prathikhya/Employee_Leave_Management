import React from "react";

const LeaveRequests = () => {
  return (
    <div className="container mt-4">
      <h2>Leave Requests</h2>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John</td>
            <td>Casual</td>
            <td>Pending</td>
            <td>
              <button className="btn btn-success btn-sm">Approve</button>
              <button className="btn btn-danger btn-sm ms-2">Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequests;