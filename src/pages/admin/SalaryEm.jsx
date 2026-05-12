import React from 'react';

const SalaryEm = () => {
  const salaryHistory = [
    {
      month: 'January 2026',
      amount: '₹58,000',
      status: 'Paid',
    },
    {
      month: 'February 2026',
      amount: '₹58,000',
      status: 'Paid',
    },
    {
      month: 'March 2026',
      amount: '₹60,000',
      status: 'Processing',
    },
  ];

  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="bg-white shadow-sm rounded-4 p-4 mb-4 d-flex justify-content-between align-items-center">

        <div>
          <h2 className="fw-bold mb-1">
            Salary Dashboard
          </h2>

          <p className="text-muted mb-0">
            View salary details, bonuses, and payment history
          </p>
        </div>

        <button className="btn btn-primary rounded-4 px-4">
          Download Payslip
        </button>

      </div>

      {/* Salary Cards */}
      <div className="row g-4 mb-4">

        <div className="col-md-4">
          <div className="bg-white shadow-sm rounded-4 p-4 h-100">

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">
                  Monthly Salary
                </p>

                <h2 className="fw-bold">
                  ₹58,000
                </h2>
              </div>

              <div
                className="bg-success-subtle rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '70px',
                  height: '70px',
                  fontSize: '30px',
                }}
              >
                💰
              </div>
            </div>

          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white shadow-sm rounded-4 p-4 h-100">

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">
                  Bonus
                </p>

                <h2 className="fw-bold">
                  ₹5,000
                </h2>
              </div>

              <div
                className="bg-primary-subtle rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '70px',
                  height: '70px',
                  fontSize: '30px',
                }}
              >
                🎁
              </div>
            </div>

          </div>
        </div>

        <div className="col-md-4">
          <div className="bg-white shadow-sm rounded-4 p-4 h-100">

            <div className="d-flex justify-content-between align-items-center">
              <div>
                <p className="text-muted mb-1">
                  Payment Status
                </p>

                <h2 className="fw-bold">
                  Paid
                </h2>
              </div>

              <div
                className="bg-warning-subtle rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '70px',
                  height: '70px',
                  fontSize: '30px',
                }}
              >
                ✅
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Salary Breakdown */}
      <div className="row g-4 mb-4">

        <div className="col-lg-6">
          <div className="bg-white shadow-sm rounded-4 p-4 h-100">

            <h4 className="fw-bold mb-4">
              Salary Breakdown
            </h4>

            <div className="d-flex flex-column gap-3">

              <div className="d-flex justify-content-between bg-light rounded-4 p-3">
                <span>Basic Salary</span>
                <span className="fw-semibold">₹45,000</span>
              </div>

              <div className="d-flex justify-content-between bg-light rounded-4 p-3">
                <span>HRA</span>
                <span className="fw-semibold">₹8,000</span>
              </div>

              <div className="d-flex justify-content-between bg-light rounded-4 p-3">
                <span>Travel Allowance</span>
                <span className="fw-semibold">₹2,000</span>
              </div>

              <div className="d-flex justify-content-between bg-light rounded-4 p-3">
                <span>Bonus</span>
                <span className="fw-semibold">₹3,000</span>
              </div>

              <div className="d-flex justify-content-between bg-danger-subtle rounded-4 p-3">
                <span>Tax Deduction</span>
                <span className="fw-semibold text-danger">
                  - ₹5,000
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Payment Summary */}
        <div className="col-lg-6">
          <div className="bg-white shadow-sm rounded-4 p-4 h-100">

            <h4 className="fw-bold mb-4">
              Payment Summary
            </h4>

            <div
              className="bg-primary text-white rounded-4 p-4"
            >
              <p className="mb-2">
                Total Salary Received
              </p>

              <h1 className="fw-bold">
                ₹1,74,000
              </h1>

              <p className="mb-0">
                Last updated: May 2026
              </p>
            </div>

            <div className="mt-4">

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">
                  Bank Name
                </span>

                <span className="fw-semibold">
                  HDFC Bank
                </span>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="text-muted">
                  Account Number
                </span>

                <span className="fw-semibold">
                  XXXX4321
                </span>
              </div>

              <div className="d-flex justify-content-between">
                <span className="text-muted">
                  Payment Mode
                </span>

                <span className="fw-semibold">
                  Direct Transfer
                </span>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Salary History */}
      <div className="bg-white shadow-sm rounded-4 p-4">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h4 className="fw-bold mb-0">
            Salary History
          </h4>

          <button className="btn btn-outline-primary rounded-4">
            View All
          </button>

        </div>

        <div className="table-responsive">

          <table className="table align-middle">

            <thead>
              <tr>
                <th>Month</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Payslip</th>
              </tr>
            </thead>

            <tbody>

              {salaryHistory.map((salary, index) => (
                <tr key={index}>

                  <td>{salary.month}</td>

                  <td className="fw-semibold">
                    {salary.amount}
                  </td>

                  <td>
                    <span
                      className={`badge rounded-pill px-3 py-2 ${
                        salary.status === 'Paid'
                          ? 'bg-success'
                          : 'bg-warning text-dark'
                      }`}
                    >
                      {salary.status}
                    </span>
                  </td>

                  <td>
                    <button className="btn btn-sm btn-primary rounded-3">
                      Download
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

export default SalaryEm;