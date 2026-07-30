import React, { useState } from 'react'
import api from "../../services/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [showToast, setShowToast] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await api.post('/contact/send', formData)

      // Show toast
      setShowToast(true)

      // Auto hide after 3 seconds
      setTimeout(() => setShowToast(false), 3000)

      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '' })

    } catch (err) {
      setError('Failed to send message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="d-flex justify-content-evenly align-items-center mt-1"
      style={{ minHeight: '85vh' }}
    >
      {/* Contact Form Card */}
      <div
        className="card shadow-lg p-4 border-0"
        style={{ width: '100%', maxWidth: '500px', borderRadius: '20px', backgroundColor: '#ffffff' }}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">Contact Us</h2>

        {error && (
          <div className="alert alert-danger rounded-pill text-center py-2">{error}</div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control rounded-pill"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control rounded-pill"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Subject */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              className="form-control rounded-pill"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Message</label>
            <textarea
              name="message"
              className="form-control rounded-4"
              rows="4"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary rounded-pill fw-bold py-2"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>

        </form>
      </div>

      {/* Illustration */}
      <div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912020.png"
          alt="Contact Us"
          className="img-fluid"
          style={{ maxHeight: '400px' }}
        />
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            zIndex: 9999,
            minWidth: '280px',
            animation: 'fadeInUp 0.4s ease',
          }}
        >
          <style>{`
            @keyframes fadeInUp {
              from { opacity: 0; transform: translateY(20px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
          <div className="toast show shadow-lg border-0 rounded-4" role="alert">
            <div className="toast-header bg-success text-white rounded-top-4">
              <strong className="me-auto">✅ Success</strong>
              <button
                type="button"
                className="btn-close btn-close-white"
                onClick={() => setShowToast(false)}
              />
            </div>
            <div className="toast-body fw-semibold">
              🎉 Message sent successfully! We'll get back to you soon.
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Contact