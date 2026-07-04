import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import api from "../../services/api";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // Empty check
        if (!email) {
            setError('Please enter your email');
            return;
        }

        // ← add this email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address (e.g. name@example.com)');
            return;
        }

        setLoading(true);

        try {
            await api.post('/auth/forgot-password', { email });
            setSuccess('Reset link sent! Please check your email.');
        } catch (err) {
            if (err.response?.status === 404) {
                setError('No account found with this email address.');
            } else if (err.response?.status === 500) {
                setError('Something went wrong. Please try again later.');
            } else {
                setError(err.response?.data?.message || 'Something went wrong.');
            }
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="card shadow-lg border-0 p-4" style={{ width: '100%', maxWidth: '400px', borderRadius: '20px' }}>

                <h2 className="text-center fw-bold text-primary mb-2">Forgot Password</h2>
                <p className="text-center text-muted mb-4" style={{ fontSize: '14px' }}>
                    Enter your email and we'll send you a reset link
                </p>

                {/* Error message */}
                {error && (
                    <div className="alert alert-danger rounded-pill text-center py-2">
                        {error}
                    </div>
                )}

                {/* Success message */}
                {success && (
                    <div className="alert alert-success rounded-pill text-center py-2">
                        {success}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
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

                    <div className="d-grid mt-4">
                        <button
                            type="submit"
                            className="btn btn-primary rounded-pill py-2 fw-bold"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Reset Link'}
                        </button>
                    </div>
                </form>

                <p className="text-center mt-3" style={{ fontSize: '14px' }}>
                    Remember your password?{' '}
                    <Link to="/login" className="fw-bold text-decoration-none">Login</Link>
                </p>

            </div>
        </div>
    );
};

export default ForgotPassword;

