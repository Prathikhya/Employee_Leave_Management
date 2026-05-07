import React from "react";

const LeaveHistory = () => {
  return (
    <div className="container mt-4">
      <h2>Leave History</h2>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>2026-05-01</td>
            <td>Medical</td>
            <td>Approved</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LeaveHistory;