import React, { useEffect, useState } from 'react'
import ManagerSidebar from './ManagerSidebar'
import api from '../../services/api'

const ManagerDashboard = () => {
  const [leaveRequests, setLeaveRequests] = useState([])
  const [loading, setLoading] = useState(true)
  const name = localStorage.getItem('name') || 'Manager'

  const stats = [
    { title: 'Team Members',       value: '12',  icon: '👥', growth: 'Active employees'       },
    { title: 'Pending Requests',   value: '3',   icon: '📝', growth: 'Needs your attention'    },
    { title: 'Approved This Month',value: '8',   icon: '✅', growth: '+2 from last month'      },
    { title: 'Attendance Today',   value: '10/12',icon: '📊', growth: '83% present'            },
  ]

  const teamStatus = [
    { name: 'Arun Kumar',  role: 'Developer',  status: 'Present' },
    { name: 'Neha Joshi',  role: 'Designer',   status: 'On Leave' },
    { name: 'Priya Singh', role: 'Analyst',    status: 'Present' },
    { name: 'Ravi Varma',  role: 'QA Engineer',status: 'On Leave' },
    { name: 'Suresh Babu', role: 'Developer',  status: 'Present' },
  ]

  const recentActivities = [
    'Arun Kumar requested Medical Leave',
    'Neha Joshi leave approved',
    'Team meeting scheduled for Monday',
    'Priya Singh attendance marked',
    'Monthly report generated',
  ]

  useEffect(() => {
    const fetchLeaveRequests = async () => {
      try {
        const res = await api.get('/manager/leave-requests')
        setLeaveRequests(res.data)
      } catch (err) {
        console.error('Failed to fetch leave requests', err)
        // Use dummy data if API not ready
        setLeaveRequests([
          { id: 1, employeeName: 'Arun Kumar',  leaveType: 'Medical Leave', startDate: '2026-07-29', endDate: '2026-07-30', status: 'PENDING' },
          { id: 2, employeeName: 'Priya Singh', leaveType: 'Casual Leave',  startDate: '2026-08-01', endDate: '2026-08-01', status: 'PENDING' },
          { id: 3, employeeName: 'Ravi Varma',  leaveType: 'Annual Leave',  startDate: '2026-08-05', endDate: '2026-08-07', status: 'APPROVED' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchLeaveRequests()
  }, [])

  const handleApprove = async (id) => {
    try {
      await api.put(`/manager/leave-requests/${id}/approve`)
      setLeaveRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'APPROVED' } : r))
    } catch (err) {
      console.error('Failed to approve', err)
    }
  }

  const handleReject = async (id) => {
    try {
      await api.put(`/manager/leave-requests/${id}/reject`)
      setLeaveRequests(prev => prev.map(r => r.id === id ? { ...r, status: 'REJECTED' } : r))
    } catch (err) {
      console.error('Failed to reject', err)
    }
  }

  const getStatusBadge = (status) => {
    const map = {
      PENDING:  'bg-warning-subtle text-warning',
      APPROVED: 'bg-success-subtle text-success',
      REJECTED: 'bg-danger-subtle text-danger',
    }
    return map[status] || 'bg-secondary-subtle text-secondary'
  }

  const getInitials = (name) =>
    name ? name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'NA'

  return (
    <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      
      <ManagerSidebar />
      <div className="flex-grow-1 p-4">

        {/* Top Navbar */}
        <div className="bg-white rounded-4 shadow-sm p-4 d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Manager Dashboard</h2>
            <p className="text-muted mb-0">Welcome back, {name} 👋</p>
          </div>
          <div className="d-flex align-items-center gap-3">
            <input
              type="text"
              placeholder="Search team..."
              className="form-control rounded-4"
              style={{ width: '240px' }}
            />
            <div
              className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
              style={{ width: '45px', height: '45px', background: '#2563eb', fontSize: '14px' }}
            >
              {getInitials(name)}
            </div>
          </div>
        </div>

        {/* Manager Profile Section */}
        <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
          <div className="row align-items-center">
            <div className="col-lg-8 d-flex align-items-center gap-4">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                style={{ width: '90px', height: '90px', background: '#2563eb', fontSize: '28px', flexShrink: 0 }}
              >
                {getInitials(name)}
              </div>
              <div>
                <h3 className="fw-bold mb-1">{name}</h3>
                <p className="text-primary fw-semibold mb-2">Team Manager</p>
                <p className="text-muted mb-2">
                  Managing team leave requests, attendance tracking, and performance reports.
                </p>
                <div className="d-flex flex-wrap gap-3 mt-3">
                  <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill">Manager Access</span>
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">Active Status</span>
                  <span className="badge bg-warning-subtle text-warning px-3 py-2 rounded-pill">Team Lead</span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="bg-light rounded-4 p-4">
                <h5 className="fw-bold mb-3">Manager Information</h5>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Role</span>
                  <span className="fw-semibold">Manager</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Team Size</span>
                  <span className="fw-semibold">12 Members</span>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span className="text-muted">Email</span>
                  <span className="fw-semibold">{localStorage.getItem('email') || 'manager@company.com'}</span>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="text-muted">Location</span>
                  <span className="fw-semibold">India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="row g-4 mt-2">
            {stats.map((item, index) => (
              <div className="col-md-6 col-xl-3" key={index}>
                <div className="bg-white shadow-sm rounded-4 p-4 h-100 border">
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
                    {item.growth}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leave Requests + Team Status */}
        <div className="row g-4 mb-4">

          {/* Leave Requests */}
          <div className="col-lg-8">
            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold">Leave Requests</h4>
                <span className="badge bg-warning-subtle text-warning px-3 py-2 rounded-pill">
                  {leaveRequests.filter(r => r.status === 'PENDING').length} Pending
                </span>
              </div>

              {loading ? (
                <div className="text-center py-4">
                  <div className="spinner-border text-primary" role="status" />
                </div>
              ) : leaveRequests.length === 0 ? (
                <div className="text-center py-4 text-muted">No leave requests found</div>
              ) : (
                <div className="table-responsive">
                  <table className="table table-hover align-middle">
                    <thead className="table-light">
                      <tr>
                        <th>Employee</th>
                        <th>Leave Type</th>
                        <th>Dates</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveRequests.map((req) => (
                        <tr key={req.id}>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <div
                                className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                                style={{ width: '36px', height: '36px', background: '#6366f1', fontSize: '12px', flexShrink: 0 }}
                              >
                                {getInitials(req.employeeName)}
                              </div>
                              <span className="fw-semibold">{req.employeeName}</span>
                            </div>
                          </td>
                          <td className="text-muted">{req.leaveType}</td>
                          <td className="text-muted" style={{ fontSize: '13px' }}>
                            {req.startDate} → {req.endDate}
                          </td>
                          <td>
                            <span className={`badge px-3 py-2 rounded-pill ${getStatusBadge(req.status)}`}>
                              {req.status}
                            </span>
                          </td>
                          <td>
                            {req.status === 'PENDING' && (
                              <div className="d-flex gap-2">
                                <button
                                  className="btn btn-sm btn-outline-success rounded-pill"
                                  onClick={() => handleApprove(req.id)}
                                >
                                  Approve
                                </button>
                                <button
                                  className="btn btn-sm btn-outline-danger rounded-pill"
                                  onClick={() => handleReject(req.id)}
                                >
                                  Reject
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          {/* Recent Activities */}
          <div className="col-lg-4">
            <div className="bg-white rounded-4 shadow-sm p-4 h-100">
              <h4 className="fw-bold mb-4">Recent Activities</h4>
              <div className="d-flex flex-column gap-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="d-flex align-items-start gap-3">
                    <div
                      className="rounded-circle bg-primary-subtle d-flex align-items-center justify-content-center"
                      style={{ width: '42px', height: '42px', flexShrink: 0 }}
                    >
                      🔔
                    </div>
                    <div>
                      <p className="mb-1 fw-medium" style={{ fontSize: '14px' }}>{activity}</p>
                      <small className="text-muted">2 mins ago</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Status */}
        <div className="bg-white rounded-4 shadow-sm p-4 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="fw-bold">Team Status Today</h4>
            <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
              {teamStatus.filter(t => t.status === 'Present').length} Present
            </span>
          </div>
          <div className="row g-3">
            {teamStatus.map((member, index) => (
              <div className="col-md-4 col-lg-2" key={index}>
                <div className="text-center p-3 rounded-4 border">
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white mx-auto mb-2"
                    style={{ width: '48px', height: '48px', background: member.status === 'Present' ? '#22c55e' : '#f59e0b', fontSize: '14px' }}
                  >
                    {getInitials(member.name)}
                  </div>
                  <p className="fw-semibold mb-0" style={{ fontSize: '13px' }}>{member.name}</p>
                  <small className="text-muted">{member.role}</small>
                  <div className="mt-2">
                    <span className={`badge rounded-pill px-2 py-1 ${member.status === 'Present' ? 'bg-success-subtle text-success' : 'bg-warning-subtle text-warning'}`} style={{ fontSize: '11px' }}>
                      {member.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ManagerDashboard