import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeSidebar from './EmployeeSidebar'
import api from '../../services/api'

const EmployeeDashboard = () => {
  const navigate = useNavigate()
  const name = localStorage.getItem('name') || 'Employee'
  const email = localStorage.getItem('email') || 'employee@company.com'

  const [leaveData, setLeaveData] = useState([])
  const [loading, setLoading] = useState(true)

  const getInitials = (name) =>
    name ? name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2) : 'EM'

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const res = await api.get('/employee/my-leaves')
        setLeaveData(res.data)
      } catch (err) {
        console.error('Failed to fetch leaves', err)
        // Dummy data for prototype
        setLeaveData([
          { id: 1, leaveType: 'Medical Leave', startDate: '2026-07-10', endDate: '2026-07-11', status: 'APPROVED' },
          { id: 2, leaveType: 'Casual Leave',  startDate: '2026-07-20', endDate: '2026-07-20', status: 'PENDING'  },
          { id: 3, leaveType: 'Annual Leave',  startDate: '2026-08-05', endDate: '2026-08-07', status: 'REJECTED' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchLeaves()
  }, [])

  const stats = [
    { title: 'Leave Balance',   value: '12 Days', icon: '📅', color: '#dbeafe', text: '#1d4ed8' },
    { title: 'Attendance',      value: '96%',     icon: '✅', color: '#dcfce7', text: '#16a34a' },
    { title: 'Salary Status',   value: 'Credited',icon: '💰', color: '#fef9c3', text: '#a16207' },
    { title: 'Pending Leaves',  value: leaveData.filter(l => l.status === 'PENDING').length.toString(), icon: '📝', color: '#fee2e2', text: '#dc2626' },
  ]

  const getStatusBadge = (status) => {
    const map = {
      PENDING:  'bg-warning-subtle text-warning',
      APPROVED: 'bg-success-subtle text-success',
      REJECTED: 'bg-danger-subtle text-danger',
    }
    return map[status] || 'bg-secondary-subtle text-secondary'
  }

  return (
    <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <EmployeeSidebar />

      <div className="flex-grow-1 p-4">

        {/* Top Navbar */}
        <div className="bg-white rounded-4 shadow-sm p-4 d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Welcome Back, {name} 👋</h2>
            <p className="text-muted mb-0">Employee Dashboard</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div
              className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
              style={{ width: '45px', height: '45px', background: '#16a34a', fontSize: '14px' }}
            >
              {getInitials(name)}
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
          <div className="row align-items-center">
            <div className="col-lg-8 d-flex align-items-center gap-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                style={{ width: '90px', height: '90px', background: '#16a34a', fontSize: '28px', flexShrink: 0 }}
              >
                {getInitials(name)}
              </div>
              <div>
                <h3 className="fw-bold mb-1">{name}</h3>
                <p className="text-success fw-semibold mb-2">Software Engineer</p>
                <p className="text-muted mb-2">
                  Working in frontend development and handling dashboard management system tasks.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">Active Employee</span>
                  <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">Full Time</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="bg-light rounded-4 p-4">
                <h5 className="fw-bold mb-3">My Details</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Role</span>
                  <span className="fw-semibold">Employee</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Email</span>
                  <span className="fw-semibold" style={{ fontSize: '13px' }}>{email}</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Department</span>
                  <span className="fw-semibold">Engineering</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Location</span>
                  <span className="fw-semibold">India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-4">
          {stats.map((item, index) => (
            <div className="col-md-6 col-xl-3" key={index}>
              <div className="bg-white rounded-4 shadow-sm p-4 h-100 border">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1">{item.title}</p>
                    <h3 className="fw-bold">{item.value}</h3>
                  </div>
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: '60px', height: '60px', fontSize: '28px', background: item.color }}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leave History + Salary */}
        <div className="row g-4 mb-4">

          {/* Leave History */}
          <div className="col-lg-8">
            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold">My Leave History</h4>
                <button
                  className="btn btn-success rounded-pill px-4"
                  onClick={() => navigate('/employee/apply-leave')}
                >
                  + Apply Leave
                </button>
              </div>

              {loading ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-success" role="status" />
                </div>
              ) : leaveData.length === 0 ? (
                <div className="text-center py-4 text-muted">No leave records found</div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>#</th>
                        <th>Leave Type</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveData.map((leave, index) => (
                        <tr key={leave.id}>
                          <td>{index + 1}</td>
                          <td className="fw-semibold">{leave.leaveType}</td>
                          <td className="text-muted">{leave.startDate}</td>
                          <td className="text-muted">{leave.endDate}</td>
                          <td>
                            <span className={`badge px-3 py-2 rounded-pill ${getStatusBadge(leave.status)}`}>
                              {leave.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Salary Details */}
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

              <div className="bg-light rounded-4 p-4 mb-3">
                <p className="text-muted mb-1">Payment Status</p>
                <span className="badge bg-success px-3 py-2 rounded-pill">Paid Successfully</span>
              </div>

              <div className="bg-light rounded-4 p-4">
                <p className="text-muted mb-1">Next Payment</p>
                <h6 className="fw-bold">1st August 2026</h6>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar Area */}
        <div className="bg-white rounded-4 shadow-sm p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold">Work Calendar</h4>
            <button
              className="btn btn-outline-success rounded-pill px-4"
              onClick={() => navigate('/employee/calendar')}
            >
              View Full Calendar
            </button>
          </div>
          <div
            className="bg-light rounded-4 d-flex align-items-center justify-content-center"
            style={{ height: '200px' }}
          >
            <div className="text-center">
              <h1 style={{ fontSize: '60px' }}>📆</h1>
              <p className="text-muted mb-0">Calendar Integration Area</p>
              <small className="text-secondary">Connect a calendar library later</small>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default EmployeeDashboard