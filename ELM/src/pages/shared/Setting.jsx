import React from 'react';

const Setting = () => {
  return (
    <div className="container-fluid py-4">

      {/* Header */}
      <div className="bg-white shadow-sm rounded-4 p-4 mb-4">
        <h2 className="fw-bold mb-1">
          Settings
        </h2>

        <p className="text-muted mb-0">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="row g-4">

        {/* Left Section */}
        <div className="col-lg-4">

          {/* Profile Card */}
          <div className="bg-white shadow-sm rounded-4 p-4 text-center mb-4">

            <img
              src="https://i.pravatar.cc/120"
              alt="profile"
              className="rounded-circle border border-3 mb-3"
            />

            <h4 className="fw-bold mb-1">
              Prathikhya Devi
            </h4>

            <p className="text-muted mb-3">
              System Administrator
            </p>

            <button className="btn btn-primary rounded-4 px-4">
              Change Photo
            </button>
          </div>

          {/* Quick Settings */}
          <div className="bg-white shadow-sm rounded-4 p-4">

            <h5 className="fw-bold mb-4">
              Quick Settings
            </h5>

            <div className="d-flex flex-column gap-3">

              <button className="btn btn-light text-start rounded-4 py-3 border">
                🔔 Notifications
              </button>

              <button className="btn btn-light text-start rounded-4 py-3 border">
                🔒 Privacy & Security
              </button>

              <button className="btn btn-light text-start rounded-4 py-3 border">
                🌐 Language
              </button>

              <button className="btn btn-light text-start rounded-4 py-3 border">
                🎨 Theme Settings
              </button>

            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-8">

          {/* Edit Profile */}
          <div className="bg-white shadow-sm rounded-4 p-4 mb-4">

            <div className="d-flex justify-content-between align-items-center mb-4">
              <h4 className="fw-bold mb-0">
                Edit Profile
              </h4>

              <button className="btn btn-success rounded-4 px-4">
                Save Changes
              </button>
            </div>

            <div className="row g-4">

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control rounded-4 py-3"
                  placeholder="Enter your name"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control rounded-4 py-3"
                  placeholder="Enter your email"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Phone Number
                </label>

                <input
                  type="text"
                  className="form-control rounded-4 py-3"
                  placeholder="Enter phone number"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Department
                </label>

                <input
                  type="text"
                  className="form-control rounded-4 py-3"
                  placeholder="Department"
                />
              </div>

              <div className="col-12">
                <label className="form-label fw-semibold">
                  Bio
                </label>

                <textarea
                  rows="4"
                  className="form-control rounded-4"
                  placeholder="Write something about yourself..."
                ></textarea>
              </div>

            </div>

          </div>

          {/* Security */}
          <div className="bg-white shadow-sm rounded-4 p-4">

            <h4 className="fw-bold mb-4">
              Security Settings
            </h4>

            <div className="row g-4">

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Current Password
                </label>

                <input
                  type="password"
                  className="form-control rounded-4 py-3"
                  placeholder="Current password"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  New Password
                </label>

                <input
                  type="password"
                  className="form-control rounded-4 py-3"
                  placeholder="New password"
                />
              </div>

              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  Confirm Password
                </label>

                <input
                  type="password"
                  className="form-control rounded-4 py-3"
                  placeholder="Confirm password"
                />
              </div>

            </div>

            <div className="mt-4">
              <button className="btn btn-danger rounded-4 px-4">
                Update Password
              </button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Setting;