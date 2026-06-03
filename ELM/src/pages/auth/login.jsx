import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        'http://localhost:8080/auth/login',
        { email, password }
      );

      // Save token and user info
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('email', response.data.email);

      // Redirect based on role
      const role = response.data.role;

      if (role === 'ADMIN') navigate('/admin/dashboard');
      else if (role === 'MANAGER') navigate('/manager/dashboard');
      else navigate('/employee/dashboard');

    } catch (err) {
      setError(
        err.response?.data?.message || 'Invalid email or password'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
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

        {/* Error Message */}
        {error && (
          <div className="alert alert-danger rounded-pill text-center py-2">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="text-end mt-2">
              <Link to="/forgot-email" className="text-decoration-none">
                Forgot Email?
              </Link>
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-pill"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary rounded-pill py-2 fw-bold mt-3"
            >
              Sign in with Google
            </button>
          </div>
        </form>

        <p className="text-center mt-3">
          Don't have an account?{" "}
          <Link to="/register" className="fw-bold text-decoration-none">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;