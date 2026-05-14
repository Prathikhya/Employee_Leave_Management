import React from 'react';

const CalendarAdmin = () => {
  const events = [
    {
      date: '12',
      title: 'Team Meeting',
      time: '10:00 AM',
    },
    {
      date: '15',
      title: 'Salary Processing',
      time: '02:00 PM',
    },
    {
      date: '18',
      title: 'Leave Review',
      time: '11:30 AM',
    },
    {
      date: '25',
      title: 'Project Deadline',
      time: '05:00 PM',
    },
  ];

  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="bg-white shadow-sm rounded-4 p-4 mb-4 d-flex justify-content-between align-items-center">
        <div>
          <h2 className="fw-bold mb-1">
            Calendar
          </h2>

          <p className="text-muted mb-0">
            Manage meetings, leaves, and schedules
          </p>
        </div>

        <button className="btn btn-primary rounded-4 px-4">
          + Add Event
        </button>
      </div>

      {/* Calendar Layout */}
      <div className="row g-4">

        {/* Calendar */}
        <div className="col-lg-8">
          <div className="bg-white shadow-sm rounded-4 p-4">

            {/* Month */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <button className="btn btn-light rounded-circle">
                ←
              </button>

              <h4 className="fw-bold mb-0">
                May 2026
              </h4>

              <button className="btn btn-light rounded-circle">
                →
              </button>
            </div>

            {/* Days */}
            <div className="row text-center fw-semibold text-muted mb-3">
              <div className="col">Sun</div>
              <div className="col">Mon</div>
              <div className="col">Tue</div>
              <div className="col">Wed</div>
              <div className="col">Thu</div>
              <div className="col">Fri</div>
              <div className="col">Sat</div>
            </div>

            {/* Dates */}
            <div className="row g-3">
              {[...Array(35)].map((_, index) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-1" key={index}>
                  <div
                    className={`border rounded-4 p-3 text-center bg-light ${
                      index === 11
                        ? 'border-primary border-3'
                        : ''
                    }`}
                    style={{
                      minHeight: '90px',
                      cursor: 'pointer',
                    }}
                  >
                    <h6 className="fw-bold">
                      {index + 1 <= 31 ? index + 1 : ''}
                    </h6>

                    {index === 11 && (
                      <span className="badge bg-primary rounded-pill">
                        2 Events
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="col-lg-4">
          <div className="bg-white shadow-sm rounded-4 p-4 h-100">

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold mb-0">
                Upcoming Events
              </h4>

              <button className="btn btn-outline-primary rounded-4">
                View All
              </button>
            </div>

            <div className="d-flex flex-column gap-3">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="bg-light rounded-4 p-3 border"
                >
                  <div className="d-flex align-items-center gap-3">

                    <div
                      className="bg-primary text-white rounded-4 d-flex flex-column align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                      }}
                    >
                      <h5 className="mb-0 fw-bold">
                        {event.date}
                      </h5>
                    </div>

                    <div>
                      <h6 className="fw-bold mb-1">
                        {event.title}
                      </h6>

                      <p className="text-muted mb-0">
                        {event.time}
                      </p>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};

export default CalendarAdmin;