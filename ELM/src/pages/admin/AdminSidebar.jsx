import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsGrid1X2Fill, BsPeopleFill, BsCalendarCheck, BsClockHistory, BsGear, BsBoxArrowRight, BsCalendar3 } from 'react-icons/bs'

const AdminSidebar = () => {
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
      <style>{`
        .sidebar-spring {
          opacity: 0;
          transform: translateX(-100%) scale(0.95);
          animation: springIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes springIn {
          0%   { opacity: 0; transform: translateX(-100%) scale(0.95); }
          60%  { opacity: 1; transform: translateX(12px) scale(1.02); }
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
        .sidebar-link.active-link {
          background-color: #eff6ff;
          color: #2563eb;
          font-weight: 600;
        }
        .sidebar-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1.25rem;
        }
        .sidebar-menu > div {
          margin-bottom: 0.45rem;
        }
        .logout-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1rem;
          border-radius: 0.75rem;
          color: #dc2626;
          background: none;
          border: none;
          width: 100%;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
          font-size: 1rem;
        }
        .logout-link:hover {
          background-color: #fee2e2;
          transform: translateX(4px);
        }
        .manager-badge {
          font-size: 0.65rem;
          background-color: #dbeafe;
          color: #1d4ed8;
          padding: 2px 8px;
          border-radius: 20px;
          font-weight: 600;
          margin-left: 6px;
        }
      `}</style>

      <div
        className={mounted ? 'sidebar-spring bg-white shadow-sm border rounded-3 p-4 d-flex flex-column' : 'bg-white shadow-sm border rounded-3 p-4 d-flex flex-column'}
        style={{ width: '260px', minHeight: '100vh' }}
      >
        <div className="sidebar-title">
          LMS <span className="manager-badge">MANAGER</span>
        </div>

        <div className="sidebar-menu flex-grow-1">
          <div>
            <Link to="/manager/dashboard" className="sidebar-link">
              <BsGrid1X2Fill /> Dashboard
            </Link>
          </div>
          <div>
            <Link to="/manager/team" className="sidebar-link">
              <BsPeopleFill /> My Team
            </Link>
          </div>
          <div>
            <Link to="/manager/leave-requests" className="sidebar-link">
              <BsCalendarCheck /> Leave Requests
            </Link>
          </div>
          <div>
            <Link to="/manager/calendar" className="sidebar-link">
              <BsCalendar3 /> Calendar
            </Link>
          </div>
          <div>
            <Link to="/manager/attendance" className="sidebar-link">
              <BsClockHistory /> Attendance
            </Link>
          </div>
          <div>
            <Link to="/manager/settings" className="sidebar-link">
              <BsGear /> Settings
            </Link>
          </div>
        </div>

        <div className="mt-auto pt-3 border-top">
          <button className="logout-link" onClick={handleLogout}>
            <BsBoxArrowRight /> Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar