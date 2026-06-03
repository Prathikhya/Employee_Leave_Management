import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold" to="/">
          LMS
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Left Side */}
          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link btn btn-outline-light me-2 px-3" to="/login">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-primary  px-3" to="/register">
                Register
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;