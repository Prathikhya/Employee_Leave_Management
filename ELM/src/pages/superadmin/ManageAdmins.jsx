import React, { useEffect, useState } from 'react'
import SuperAdminSidebar from './SuperAdminSidebar'
import api from '../../services/api'

const ManageAdmins = () => {
  const [admins, setAdmins] = useState([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const fetchAdmins = async () => {
    try {
      setLoading(true)
      const res = await api.get('/super-admin/admins')
      setAdmins(res.data)
    } catch (err) {
      setError('Failed to fetch admins')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAdmins()
  }, [])

  const handleDemote = async (userId, name) => {
    if (!window.confirm(`Are you sure you want to demote ${name} to Employee?`)) return
    try {
      const res = await api.put(`/super-admin/demote/${userId}`)
      setMessage(res.data)
      fetchAdmins()
    } catch (err) {
      setError('Failed to demote admin')
    }
  }

  const handleDelete = async (userId, name) => {
    if (!window.confirm(`Are you sure you want to delete ${name}? This cannot be undone.`)) return
    try {
      const res = await api.delete(`/super-admin/delete/${userId}`)
      setMessage(res.data)
      fetchAdmins()
    } catch (err) {
      setError('Failed to delete user')
    }
  }

  return (
    <div className="d-flex">
      <SuperAdminSidebar />

      <div className="flex-grow-1 p-4" style={{ backgroundColor: '#f9fafb', minHeight: '100vh' }}>

        {/* Header */}
        <div className="mb-4">
          <h4 className="fw-bold mb-1">Manage Admins 🛡️</h4>
          <p className="text-muted mb-0">View, demote or remove admins. Maximum 3 admins allowed.</p>
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

        {/* Admin Count Badge */}
        <div className="mb-3">
          <span className="badge rounded-pill px-3 py-2" style={{ backgroundColor: '#6366f1', fontSize: '0.85rem' }}>
            {admins.length} / 3 Admins
          </span>
        </div>

        {/* Admins Table */}
        <div className="card border-0 shadow-sm rounded-3">
          <div className="card-body p-0">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status" />
              </div>
            ) : admins.length === 0 ? (
              <div className="text-center py-5 text-muted">
                <p>No admins found</p>
              </div>
            ) : (
              <table className="table table-hover mb-0">
                <thead style={{ backgroundColor: '#f3f4f6' }}>
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Department</th>
                    <th className="py-3">Designation</th>
                    <th className="py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map(admin => (
                    <tr key={admin.id}>
                      <td className="px-4 py-3 fw-semibold">{admin.name}</td>
                      <td className="py-3 text-muted">{admin.email}</td>
                      <td className="py-3">{admin.department || '—'}</td>
                      <td className="py-3">{admin.designation || '—'}</td>
                      <td className="py-3">
                        <button
                          className="btn btn-sm btn-outline-warning rounded-pill me-2"
                          onClick={() => handleDemote(admin.id, admin.name)}
                        >
                          Demote
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger rounded-pill"
                          onClick={() => handleDelete(admin.id, admin.name)}
                        >
                          Delete
                        </button>
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

export default ManageAdmins