import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <div className="container">

        <p className="mb-1">
          © <span>{(new Date().getFullYear())}</span> Centurion University Leave Management System. All rights reserved.
        </p>

        <small>
          Developed using React JS & Spring Boot
        </small>

      </div>
    </footer>
  );
};

export default Footer;