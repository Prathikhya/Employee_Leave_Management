import React, { useEffect, useState } from 'react'
import SuperAdminSidebar from './SuperAdminSidebar'
import api from '../../services/api'

const ManageUsers = () => {
  const [users, setUsers] = useState([])
  const [filtered, setFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [roleFilter, setRoleFilter] = useState('ALL')

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const res = await api.get('/super-admin/users')
      setUsers(res.data)
      setFiltered(res.data)
    } catch (err) {
      setError('Failed to fetch users')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  // Filter users by search and role
  useEffect(() => {
    let result = users
    if (roleFilter !== 'ALL') {
      result = result.filter(u => u.role === roleFilter)
    }
    if (search.trim()) {
      result = result.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
      )
    }
    setFiltered(result)
  }, [search, roleFilter, users])

  const handlePromote = async (userId, name) => {
    if (!window.confirm(`Promote ${name} to Admin?`)) return
    try {
      const res = await api.put(`/super-admin/promote/${userId}`)
      setMessage(res.data)
      fetchUsers()
    } catch (err) {
      setError(err.response?.data || 'Failed to promote user')
    }
  }

  const handleDelete = async (userId, name) => {
    if (!window.confirm(`Delete ${name}? This cannot be undone.`)) return
    try {
      const res = await api.delete(`/super-admin/delete/${userId}`)
      setMessage(res.data)
      fetchUsers()
    } catch (err) {
      setError('Failed to delete user')
    }
  }

  const getRoleBadge = (role) => {
    const colors = {
      SUPER_ADMIN: '#6366f1',
      ADMIN: '#f59e0b',
      MANAGER: '#10b981',
      EMPLOYEE: '#3b82f6',
    }
    return (
      <span className="badge rounded-pill px-3" style={{ backgroundColor: colors[role] || '#6b7280' }}>
        {role}
      </span>
    )
  }

  return (
    <div className="d-flex">
      <SuperAdminSidebar />

      <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>

        {/* Header */}
        <div className="mb-4">
          <h4 className="fw-bold mb-1">Manage Users 👥</h4>
          <p className="text-muted mb-0">View all users, promote to admin or remove them.</p>
        </div>

        {/* Alerts */}
        {message && (
          <div className="alert alert-success rounded-3 py-2">{message}
            <button className="btn-close float-end" onClick={() => setMessage('')} />
          </div>
        )}
        {error && (
          <div className="alert alert-danger rounded-3 py-2">{error}
            <button className="btn-close float-end" onClick={() => setError('')} />
          </div>
        )}

        {/* Search and Filter */}
        <div className="d-flex gap-3 mb-4 flex-wrap">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Search by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ maxWidth: '300px' }}
          />
          <select
            className="form-select rounded-pill"
            value={roleFilter}
            onChange={e => setRoleFilter(e.target.value)}
            style={{ maxWidth: '180px' }}
          >
            <option value="ALL">All Roles</option>
            <option value="ADMIN">Admin</option>
            <option value="MANAGER">Manager</option>
            <option value="EMPLOYEE">Employee</option>
          </select>
        </div>

        {/* Users Table */}
        <div className="card border-0 shadow-sm rounded-3">
          <div className="card-body p-0">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="text-center py-5 text-muted">
                <p>No users found</p>
              </div>
            ) : (
              <table className="table table-hover mb-0">
                <thead style={{ backgroundColor: '#f3f4f6' }}>
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Role</th>
                    <th className="py-3">Department</th>
                    <th className="py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map(user => (
                    <tr key={user.id}>
                      <td className="px-4 py-3 fw-semibold">{user.name}</td>
                      <td className="py-3 text-muted">{user.email}</td>
                      <td className="py-3">{getRoleBadge(user.role)}</td>
                      <td className="py-3">{user.department || '—'}</td>
                      <td className="py-3">
                        {user.role === 'EMPLOYEE' && (
                          <button
                            className="btn btn-sm btn-outline-primary rounded-pill me-2"
                            onClick={() => handlePromote(user.id, user.name)}
                          >
                            Promote to Admin
                          </button>
                        )}
                        {user.role !== 'SUPER_ADMIN' && (
                          <button
                            className="btn btn-sm btn-outline-danger rounded-pill"
                            onClick={() => handleDelete(user.id, user.name)}
                          >
                            Delete
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ManageUsers