import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsGrid1X2Fill, BsPeopleFill, BsPersonCheckFill, BsBoxArrowRight } from 'react-icons/bs'

const SuperAdminSidebar = () => {
  const [mounted, setMounted] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    navigate('/login')
  }

  return (
    <>
      <style>
        {`
          .sidebar-spring {
            opacity: 0;
            transform: translateX(-100%) scale(0.95);
            animation: springIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          }

          @keyframes springIn {
            0% { opacity: 0; transform: translateX(-100%) scale(0.95); }
            60% { opacity: 1; transform: translateX(12px) scale(1.02); }
            100% { opacity: 1; transform: translateX(0) scale(1); }
          }

          .sidebar-link {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.9rem 1rem;
            border-radius: 0.75rem;
            color: #1f2937;
            text-decoration: none;
            transition: transform 0.2s ease, background-color 0.2s ease;
          }

          .sidebar-link:hover {
            background-color: #f3f4f6;
            transform: translateX(4px);
          }

          .sidebar-title {
            font-size: 1.15rem;
            font-weight: 700;
            margin-bottom: 1.25rem;
          }

          .sidebar-menu > div {
            margin-bottom: 0.45rem;
          }

          .logout-btn {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.9rem 1rem;
            border-radius: 0.75rem;
            color: #dc2626;
            background: none;
            border: none;
            width: 100%;
            text-align: left;
            cursor: pointer;
            transition: transform 0.2s ease, background-color 0.2s ease;
          }

          .logout-btn:hover {
            background-color: #fee2e2;
            transform: translateX(4px);
          }

          .super-admin-badge {
            background: linear-gradient(135deg, #6366f1, #8b5cf6);
            color: white;
            font-size: 0.7rem;
            padding: 2px 8px;
            border-radius: 20px;
            font-weight: 600;
          }
        `}
      </style>

      <div
        className={mounted ? 'sidebar-spring bg-white shadow-sm border rounded-3 p-4' : 'bg-white shadow-sm border rounded-3 p-4'}
        style={{ width: '260px', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <div>
          <div className="sidebar-title">
            LMS
            <br />
            <span className="super-admin-badge">SUPER ADMIN</span>
          </div>

          <div className="sidebar-menu">
            <div>
              <Link to="/super-admin/dashboard" className="sidebar-link">
                <BsGrid1X2Fill />
                Dashboard
              </Link>
            </div>

            <div>
              <Link to="/super-admin/manage-admins" className="sidebar-link">
                <BsPersonCheckFill />
                Manage Admins
              </Link>
            </div>

            <div>
              <Link to="/super-admin/manage-users" className="sidebar-link">
                <BsPeopleFill />
                Manage Users
              </Link>
            </div>
          </div>
        </div>

        {/* Logout at bottom */}
        <div>
          <button className="logout-btn" onClick={handleLogout}>
            <BsBoxArrowRight />
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default SuperAdminSidebar