import React, { useEffect, useState } from 'react'
import SuperAdminSidebar from './SuperAdminSidebar'
import api from '../../services/api'

const SuperAdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalAdmins: 0,
    totalManagers: 0,
    totalEmployees: 0,
  })
  const [loading, setLoading] = useState(true)
  const name = localStorage.getItem('name') || 'Super Admin'

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get('/super-admin/users')
        const users = res.data
        setStats({
          totalUsers: users.length,
          totalAdmins: users.filter(u => u.role === 'ADMIN').length,
          totalManagers: users.filter(u => u.role === 'MANAGER').length,
          totalEmployees: users.filter(u => u.role === 'EMPLOYEE').length,
        })
      } catch (err) {
        console.error('Failed to fetch stats', err)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  const cards = [
    { label: 'Total Users', value: stats.totalUsers, color: '#6366f1', icon: '👥' },
    { label: 'Admins', value: stats.totalAdmins, color: '#f59e0b', icon: '🛡️' },
    { label: 'Managers', value: stats.totalManagers, color: '#10b981', icon: '💼' },
    { label: 'Employees', value: stats.totalEmployees, color: '#3b82f6', icon: '👤' },
  ]

  return (
    <div className="d-flex">
      <SuperAdminSidebar />

      <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>

        {/* Header */}
        <div className="mb-4">
          <h4 className="fw-bold mb-1">Welcome, {name} 👋</h4>
          <p className="text-muted mb-0">Here's an overview of the system</p>
        </div>

        {/* Stats Cards */}
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status" />
          </div>
        ) : (
          <div className="row g-4 mb-4">
            {cards.map((card, index) => (
              <div className="col-md-3" key={index}>
                <div className="card border-0 shadow-sm rounded-3 p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <p className="text-muted mb-1" style={{ fontSize: '0.85rem' }}>{card.label}</p>
                      <h3 className="fw-bold mb-0">{card.value}</h3>
                    </div>
                    <div style={{
                      width: '50px', height: '50px',
                      borderRadius: '12px',
                      backgroundColor: card.color + '20',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>
                      {card.icon}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quick Actions */}
        <div className="card border-0 shadow-sm rounded-3 p-4">
          <h6 className="fw-bold mb-3">Quick Actions</h6>
          <div className="d-flex gap-3 flex-wrap">
            <a href="/super-admin/manage-admins" className="btn btn-outline-primary rounded-pill px-4">
              🛡️ Manage Admins
            </a>
            <a href="/super-admin/manage-users" className="btn btn-outline-success rounded-pill px-4">
              👥 Manage Users
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SuperAdminDashboard