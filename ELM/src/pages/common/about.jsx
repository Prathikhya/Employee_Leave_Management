import React from 'react'

const about = () => {
  return (

    <div style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* About Section */}
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '56px' }}>
        <div className="row align-items-center g-5">

          {/* {Left Column Stats card} */}
          <div className="col-md-6">

            <div
              style={{
                background: '#f3f4f6',
                borderRadius: '12px',
                padding: '24px',
                marginBottom: '32px',
              }}
            >
              <div style={{ padding: '5px', display: 'flex',  marginBottom: '12px' }}>
              <span style={{background:'#5a189a', padding: '5px', color:' #ffffff',margin:'5px' }}>@</span>
              <h5 style={{ fontSize: '14px', fontWeight: '500', color: '#111827', marginBottom: '6px' }}>Our Mission</h5>
                
              </div>

            </div>
          </div>



          {/* {right Column} */}
          <div className="col-md-6">
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
                ! About Us
              </div>

              <h1 style={{ fontSize: '36px', fontWeight: '600', lineHeight: '1.25', color: '#111827', marginBottom: '16px' }}>
                About Employee Leave Management<br />System
              </h1>

              <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.75', marginBottom: '10px' }}>
                The Leave Management System is designed to streamline the process of managing employee leave requests. 
                It provides a user-friendly interface for employees to apply for leave, view their leave history, and manage their profiles.
              </p>

              <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.75', marginBottom: '28px' }}>
                Administrators can easily review and approve leave requests, manage employee information, and generate reports.
              </p>


            </div>



          </div>

        </div>
      </div>


      {/* Featuring card section */}
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

export default about