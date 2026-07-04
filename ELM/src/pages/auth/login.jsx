import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import api from "../../services/api";

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
      const response = await api.post('/auth/login', {
        email,
        password,
      });

      console.log('LOGIN RESPONSE:', response.data); // ← inside here now

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('name', response.data.name);
      localStorage.setItem('email', response.data.email);

      const role = response.data.role;
      console.log('ROLE IS:', role); // ← check role value

      if (role === 'ADMIN') navigate('/admin/admindashboard');
      else if (role === 'MANAGER') navigate('/manager/managerdashboard');
      else navigate('/employee/employeedashboard');

    } catch (err) {
      console.log('FULL ERROR:', err);
      console.log('ERROR MESSAGE:', err.message);
      setError(err.response?.data?.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="card shadow-lg border-0 p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px' }}>

        <h2 className="text-center fw-bold text-primary mb-4">Login</h2>

        {error && (
          <div className="alert alert-danger rounded-pill text-center py-2">{error}</div>
        )}

        <form onSubmit={handleLogin}>
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
          </div>

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
              <Link to="/forgot-password" className="text-decoration-none" style={{ fontSize: '13px' }}>
                Forgot Password?
              </Link>
            </div>
          </div>

          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary rounded-pill py-2 fw-bold" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>

        <p className="text-center mt-3" style={{ fontSize: '14px' }}>
          Don't have an account?{' '}
          <Link to="/register" className="fw-bold text-decoration-none">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;