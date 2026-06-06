import React, { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'

const navItems = [
  { icon: '⊞', label: 'Dashboard',     path: '/admin/dashboard' },
  { icon: '👥', label: 'Employee List', path: '/admin/employees' },
  { icon: '📋', label: 'Leave Requests',path: '/admin/leaves' },
  { icon: '📅', label: 'Calendar',      path: '/admin/calendar' },
  { icon: '💰', label: 'Salary',        path: '/admin/salary' },
  { icon: '👆', label: 'Attendance',    path: '/admin/attendance' },
  { icon: '📊', label: 'Reports',       path: '/admin/reports' },
  { icon: '⚙️', label: 'Settings',      path: '/admin/settings' },
]

const DashboardLayout = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f9fafb' }}>

      {/* Icon Sidebar */}
      <div
        style={{
          width: '60px',
          background: '#1a1a2e',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '12px 0',
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <div
          onClick={() => navigate('/')}
          title="Back to Home"
          style={{
            width: '38px', height: '38px',
            background: '#4f46e5',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px',
            color: '#fff',
            cursor: 'pointer',
            marginBottom: '16px',
            fontWeight: '700',
          }}
        >
          L
        </div>

        {/* Nav Items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          {navItems.map((item, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <NavLink
                to={item.path}
                title={item.label}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={({ isActive }) => ({
                  width: '42px', height: '42px',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  background: isActive ? 'rgba(79,70,229,0.35)' : 'transparent',
                  transition: 'background 0.15s',
                })}
              >
                {item.icon}
              </NavLink>

              {/* Tooltip */}
              {hoveredIndex === index && (
                <div
                  style={{
                    position: 'absolute',
                    left: '52px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: '#111827',
                    color: '#fff',
                    fontSize: '12px',
                    padding: '5px 10px',
                    borderRadius: '6px',
                    whiteSpace: 'nowrap',
                    zIndex: 200,
                    pointerEvents: 'none',
                  }}
                >
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Avatar at Bottom */}
        <div
          title="Profile"
          style={{
            width: '36px', height: '36px',
            borderRadius: '50%',
            background: '#374151',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '16px',
            color: '#9ca3af',
            cursor: 'pointer',
            marginBottom: '8px',
          }}
        >
          👤
        </div>
      </div>

      {/* Main Content — offset by sidebar width */}
      <div style={{ marginLeft: '60px', flex: 1, padding: '24px' }}>
        <Outlet />
      </div>

    </div>
  )
}

export default DashboardLayout
