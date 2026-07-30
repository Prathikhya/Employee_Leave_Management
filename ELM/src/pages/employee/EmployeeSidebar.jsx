import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import {
  BsGrid1X2Fill,
  BsCalendarCheck,
  BsCalendar3,
  BsCurrencyDollar,
  BsGear,
  BsClockHistory,
  BsFileText,
  BsBoxArrowRight,
} from 'react-icons/bs'

const EmployeeSidebar = () => {
  const [mounted, setMounted] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

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

  const isActive = (path) => location.pathname === path

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
        .emp-sidebar-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 1rem;
          border-radius: 0.75rem;
          color: #1f2937;
          text-decoration: none;
          transition: transform 0.2s ease, background-color 0.2s ease;
          font-size: 0.95rem;
        }
        .emp-sidebar-link:hover {
          background-color: #f3f4f6;
          transform: translateX(4px);
          color: #1f2937;
        }
        .emp-sidebar-link.active {
          background-color: #eff6ff;
          color: #2563eb;
          font-weight: 600;
        }
        .emp-sidebar-menu > div {
          margin-bottom: 0.45rem;
        }
        .emp-logout-btn {
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
          font-size: 0.95rem;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .emp-logout-btn:hover {
          background-color: #fee2e2;
          transform: translateX(4px);
        }
        .emp-badge {
          font-size: 0.65rem;
          background-color: #dcfce7;
          color: #16a34a;
          padding: 2px 8px;
          border-radius: 20px;
          font-weight: 600;
          margin-left: 6px;
        }
      `}</style>

      <div
        className={
          mounted
            ? 'sidebar-spring bg-white shadow-sm border rounded-3 p-4 d-flex flex-column'
            : 'bg-white shadow-sm border rounded-3 p-4 d-flex flex-column'
        }
        style={{ width: '260px', minHeight: '100vh' }}
      >
        {/* Logo */}
        <div style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '1.25rem' }}>
          LMS <span className="emp-badge">EMPLOYEE</span>
        </div>

        {/* Menu */}
        <div className="emp-sidebar-menu flex-grow-1">
          <div>
            <Link
              to="/employee/dashboard"
              className={`emp-sidebar-link ${isActive('/employee/dashboard') ? 'active' : ''}`}
            >
              <BsGrid1X2Fill /> Dashboard
            </Link>
          </div>

          <div>
            <Link
              to="/employee/apply-leave"
              className={`emp-sidebar-link ${isActive('/employee/apply-leave') ? 'active' : ''}`}
            >
              <BsCalendarCheck /> Apply Leave
            </Link>
          </div>

          <div>
            <Link
              to="/employee/my-leaves"
              className={`emp-sidebar-link ${isActive('/employee/my-leaves') ? 'active' : ''}`}
            >
              <BsFileText /> My Leaves
            </Link>
          </div>

          <div>
            <Link
              to="/employee/attendance"
              className={`emp-sidebar-link ${isActive('/employee/attendance') ? 'active' : ''}`}
            >
              <BsClockHistory /> Attendance
            </Link>
          </div>

          <div>
            <Link
              to="/employee/calendar"
              className={`emp-sidebar-link ${isActive('/employee/calendar') ? 'active' : ''}`}
            >
              <BsCalendar3 /> Calendar
            </Link>
          </div>

          <div>
            <Link
              to="/employee/salary"
              className={`emp-sidebar-link ${isActive('/employee/salary') ? 'active' : ''}`}
            >
              <BsCurrencyDollar /> Salary
            </Link>
          </div>

          <div>
            <Link
              to="/employee/settings"
              className={`emp-sidebar-link ${isActive('/employee/settings') ? 'active' : ''}`}
            >
              <BsGear /> Settings
            </Link>
          </div>
        </div>

        {/* Logout */}
        <div className="mt-auto pt-3 border-top">
          <button className="emp-logout-btn" onClick={handleLogout}>
            <BsBoxArrowRight /> Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default EmployeeSidebar