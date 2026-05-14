import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
       
      }}
    >
      <div
        className="card shadow-lg border-0 p-4"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
        }}
      >
        <h2 className="text-center fw-bold text-success mb-1">
          Register
        </h2>

        <form>

          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Full Name
            </label>

            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Enter full name"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email
            </label>

            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="Enter email"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Password
            </label>

            <input
              type="password"
              className="form-control rounded-pill"
              placeholder="Create password"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Confirm Password
            </label>

            <input
              type="password"
              className="form-control rounded-pill"
              placeholder="Confirm password"
            />
          </div>

          {/* Role */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Role
            </label>

            <select className="form-select rounded-pill">
              <option>Select Role</option>
              <option>Employee</option>
              <option>Admin</option>
            </select>
          </div>

          {/* Button */}
          <div className="d-grid mt-4">
            <button
              type="submit"
              className="btn btn-success rounded-pill py-2 fw-bold"
            >
              Register
            </button>

                    <button type="button" className="btn btn-outline-success rounded-pill py-2 fw-bold mt-3">
              Sign in with Google
            </button>
          </div>

        </form>

        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="fw-bold text-decoration-none">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Register
