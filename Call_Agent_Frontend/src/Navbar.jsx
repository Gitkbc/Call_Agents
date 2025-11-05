
import React from 'react';
import { Link } from 'react-router-dom'; // Only if using React Router

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyBrand</Link> {/* Link to home, adjust as needed */}
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;