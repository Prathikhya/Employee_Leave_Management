import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Later, we will call the Java Backend here
    console.log("Logging in with:", email, password);
    alert("Login logic will connect to Spring Boot soon!");
  };

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
          maxWidth: "400px",
          borderRadius: "20px",
        }}
      >
        <h2 className="text-center fw-bold text-primary mb-4">
          Login
        </h2>

        <form>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email
            </label>

            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="Enter your email"
            />

            <div className="text-end mt-2">
              <Link to="/forgot-email" className="text-decoration-none">
                Forgot Email?
              </Link>
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Password
            </label>

            <input
              type="password"
              className="form-control rounded-pill"
              placeholder="Enter your password"
            />

            <div className="text-end mt-2">
              <Link to="/forgot-password" className="text-decoration-none">
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Button */}
          <div className="d-grid mt-4">
            <button
              type="submit"
              className="btn btn-primary rounded-pill py-2 fw-bold"
            >
              Login
            </button>


             <button type="button" className="btn btn-outline-primary rounded-pill py-2 fw-bold mt-3">
              Sign in with Google
            </button>
          </div>

        </form>

        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/register" className="fw-bold text-decoration-none">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;