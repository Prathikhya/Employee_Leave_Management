import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BsGrid1X2Fill } from 'react-icons/bs'

const Sidebar = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

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
            0% {
              opacity: 0;
              transform: translateX(-100%) scale(0.95);
            }
            60% {
              opacity: 1;
              transform: translateX(12px) scale(1.02);
            }
            100% {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
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
        `}
      </style>

      <div
        className={mounted ? 'sidebar-spring bg-white shadow-sm border rounded-3 p-4' : 'bg-white shadow-sm border rounded-3 p-4'}
        style={{ width: '260px', minHeight: '100vh' }}
      >
        <div className="sidebar-title">Logo</div>

        <div className="sidebar-menu">
          <div>
            <Link to="/admin/dashboard" className="sidebar-link">
              <BsGrid1X2Fill />
              Dashboard
            </Link>
          </div>

          <div>
            <Link to="/admin/employees" className="sidebar-link">
              Employee List
            </Link>
          </div>

          <div>
            <Link to="/admin/leaverequests" className="sidebar-link">
              Leave Requests
            </Link>
          </div>

          <div>
            <Link to="/admin/calender" className="sidebar-link">
              Calender
            </Link>
          </div>

          <div>
            <Link to="/admin/salary" className="sidebar-link">
              Salary
            </Link>
          </div>

          <div>
            <Link to="/admin/setting" className="sidebar-link">
              Settings
            </Link>
          </div>

          <div>
            <Link to="/admin/attendence" className="sidebar-link">
              <BsGrid1X2Fill />
              Attendence
            </Link>
          </div>

          <div>
            <Link to="/admin/reports" className="sidebar-link">
              Reports
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
