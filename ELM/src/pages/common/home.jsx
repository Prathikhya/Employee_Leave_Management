import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Hero Section */}
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '56px' }}>
        <div className="row align-items-center g-5">

          {/* Left Column */}
          <div className="col-md-6">
            {/* Badge */}
            <div
              className="d-inline-flex align-items-center gap-2 mb-3"
              style={{
                background: '#ede9fe',
                color: '#4338ca',
                fontSize: '12px',
                padding: '5px 14px',
                borderRadius: '20px',
                fontWeight: '500',
              }}
            >
              ✦ Smart leave tracking
            </div>

            <h1 style={{ fontSize: '36px', fontWeight: '600', lineHeight: '1.25', color: '#111827', marginBottom: '16px' }}>
              Leave Management<br />System
            </h1>

            <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.75', marginBottom: '10px' }}>
              A smart and efficient platform to manage employee leave requests,
              approvals, and leave history with ease.
            </p>

            <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.75', marginBottom: '28px' }}>
              This system helps organizations simplify leave tracking, improve
              communication between employees and administrators, and maintain
              accurate leave records.
            </p>

            <div className="d-flex align-items-center gap-3">
              <Link
                to="/login"
                style={{
                  background: '#4f46e5',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: '500',
                  padding: '11px 24px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  border: 'none',
                }}
              >
                Get Started
              </Link>
              <Link
                to="/about"
                style={{
                  color: '#4f46e5',
                  fontSize: '14px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                Learn more →
              </Link>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="col-md-6">
            <div
              style={{
                background: '#f5f3ff',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {/* Mini Calendar */}
              <div
                style={{
                  background: '#fff',
                  borderRadius: '10px',
                  padding: '16px',
                  border: '0.5px solid #e5e7eb',
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span style={{ fontSize: '13px', fontWeight: '500', color: '#111827' }}>June 2026</span>
                  <div className="d-flex gap-2">
                    <span style={{ fontSize: '13px', color: '#9ca3af', cursor: 'pointer' }}>‹</span>
                    <span style={{ fontSize: '13px', color: '#9ca3af', cursor: 'pointer' }}>›</span>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
                  {['M','T','W','T','F','S','S'].map((d, i) => (
                    <span key={i} style={{ fontSize: '11px', color: '#9ca3af', paddingBottom: '4px' }}>{d}</span>
                  ))}
                  {['26','27','28','29','30','31','1','2','3','4','5','6','7','8','9','10'].map((d, i) => (
                    <div
                      key={i}
                      style={{
                        fontSize: '11px',
                        color: d === '3' ? '#fff' : parseInt(d) <= 1 || parseInt(d) >= 26 ? '#d1d5db' : ['5','6','7'].includes(d) ? '#4338ca' : '#374151',
                        background: d === '3' ? '#4f46e5' : ['5','6','7'].includes(d) ? '#ede9fe' : 'transparent',
                        borderRadius: d === '3' ? '50%' : ['5','6','7'].includes(d) ? '4px' : '0',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                      }}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="row g-2">
                <div className="col-6">
                  <div
                    style={{
                      background: '#fff',
                      borderRadius: '10px',
                      padding: '14px',
                      border: '0.5px solid #e5e7eb',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '22px', fontWeight: '600', color: '#4f46e5' }}>18</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Pending Leaves</div>
                  </div>
                </div>
                <div className="col-6">
                  <div
                    style={{
                      background: '#fff',
                      borderRadius: '10px',
                      padding: '14px',
                      border: '0.5px solid #e5e7eb',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '22px', fontWeight: '600', color: '#16a34a' }}>132</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>Approved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Feature Cards Row */}
      <div style={{ borderTop: '0.5px solid #e5e7eb' }}>
        <div className="container">
          <div className="row g-0">

            <div className="col-md-4" style={{ padding: '28px 24px', borderRight: '0.5px solid #e5e7eb' }}>
              <div
                style={{
                  width: '38px', height: '38px',
                  background: '#ede9fe',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '12px',
                  fontSize: '18px',
                }}
              >
                ✅
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827', marginBottom: '6px' }}>Easy leave requests</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>Submit and track leave requests in just one click.</div>
            </div>

            <div className="col-md-4" style={{ padding: '28px 24px', borderRight: '0.5px solid #e5e7eb' }}>
              <div
                style={{
                  width: '38px', height: '38px',
                  background: '#dcfce7',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '12px',
                  fontSize: '18px',
                }}
              >
                🔔
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827', marginBottom: '6px' }}>Real-time approvals</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>Instant notifications for admins and employees.</div>
            </div>

            <div className="col-md-4" style={{ padding: '28px 24px' }}>
              <div
                style={{
                  width: '38px', height: '38px',
                  background: '#fef9c3',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '12px',
                  fontSize: '18px',
                }}
              >
                📊
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827', marginBottom: '6px' }}>Analytics & reports</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>Track leave trends with detailed analytics.</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home
