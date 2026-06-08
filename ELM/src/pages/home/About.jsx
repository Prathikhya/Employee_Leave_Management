import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* About Section */}
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '56px' }}>
        <div className="row align-items-center g-5">

          {/* Left Column - Mission Card + Stats */}
          <div className="col-md-6">

            {/* Mission Card */}
            <div
              style={{
                background: '#f5f3ff',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '12px',
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px', height: '36px',
                    background: '#4f46e5',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px',
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  🎯
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111827', margin: 0 }}>
                  Our Mission
                </h3>
              </div>

              {/* Card Paragraph */}
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.75', margin: 0 }}>
                Enhance efficiency of leave management while ensuring a seamless
                experience for both employees and administrators.
              </p>
            </div>

            {/* Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <div
                style={{
                  background: '#f3f4f6',
                  borderRadius: '10px',
                  padding: '16px',
                  textAlign: 'center',
                  border: '0.5px solid #e5e7eb',
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: '600', color: '#4f46e5' }}>7</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Employees</div>
              </div>

              <div
                style={{
                  background: '#f3f4f6',
                  borderRadius: '10px',
                  padding: '16px',
                  textAlign: 'center',
                  border: '0.5px solid #e5e7eb',
                }}
              >
                <div style={{ fontSize: '24px', fontWeight: '600', color: '#16a34a' }}>3</div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Admins</div>
              </div>
            </div>

          </div>

          {/* Right Column - Text */}
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
              ℹ️ About Us
            </div>

            <h1 style={{ fontSize: '30px', fontWeight: '600', lineHeight: '1.3', color: '#111827', marginBottom: '16px' }}>
              About Employee Leave<br />Management System
            </h1>

            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.75', marginBottom: '12px' }}>
              The Leave Management System is designed to streamline the process of
              managing employee leave requests. It provides a user-friendly interface
              for employees to apply for leave, view their leave history, and manage
              their profiles.
            </p>

            <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.75', marginBottom: '24px' }}>
              Administrators can easily review and approve leave requests, manage
              employee information, and generate reports.
            </p>

            {/* Tech Pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', background: '#ede9fe', color: '#4338ca', padding: '5px 12px', borderRadius: '20px' }}>
                React JS & Spring Boot
              </span>
              <span style={{ fontSize: '12px', background: '#dcfce7', color: '#166534', padding: '5px 12px', borderRadius: '20px' }}>
                Centurion University
              </span>
              <span style={{ fontSize: '12px', background: '#fef9c3', color: '#854d0e', padding: '5px 12px', borderRadius: '20px' }}>
                2026
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* Feature Cards Section */}
      <div style={{ borderTop: '0.5px solid #e5e7eb' }}>
        <div className="container">
          <div className="row g-0">

            <div className="col-md-4" style={{ padding: '28px 24px', borderRight: '0.5px solid #e5e7eb' }}>
              <div style={{ width: '38px', height: '38px', background: '#ede9fe', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', fontSize: '18px' }}>
                ✅
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827', marginBottom: '6px' }}>Employee portal</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>Apply for leave, track status, and view leave history easily.</div>
            </div>

            <div className="col-md-4" style={{ padding: '28px 24px', borderRight: '0.5px solid #e5e7eb' }}>
              <div style={{ width: '38px', height: '38px', background: '#dcfce7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', fontSize: '18px' }}>
                🛡️
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827', marginBottom: '6px' }}>Admin control</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>Review, approve or reject requests with full audit trail.</div>
            </div>

            <div className="col-md-4" style={{ padding: '28px 24px' }}>
              <div style={{ width: '38px', height: '38px', background: '#fef9c3', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', fontSize: '18px' }}>
                🔒
              </div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#111827', marginBottom: '6px' }}>Secure platform</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>Reliable and secure system built for organizational trust.</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default About
