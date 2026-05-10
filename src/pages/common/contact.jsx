import React from 'react'

const Contact = () => {
  return (
     <div
      className="d-flex justify-content-evenly align-items-center mt-5"
      style={{
        minHeight: "85vh",
        
      }}
    >
      <div
        className="card shadow-lg p-4 border-0"
        style={{
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
        }}
      >
        <h2 className="text-center mb-4 fw-bold text-primary">
          Contact Us
        </h2>

        <form>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Full Name
            </label>

            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="form-control rounded-pill"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Subject
            </label>

            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Enter subject"
            />
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label fw-semibold">
              Message
            </label>

            <textarea
              className="form-control rounded-4"
              rows="4"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary rounded-pill fw-bold py-2"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>


      <div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--call-logo-laptop-helping-customer-service-pack-network-communication-illustrations-2912020.png"
          alt="Contact Us"
          className="img-fluid"
          style={{ maxHeight: "400px" }}
        />
      </div>
    </div>
  )
}

export default Contact
