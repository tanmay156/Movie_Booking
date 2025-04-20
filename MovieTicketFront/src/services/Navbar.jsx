import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.jpg'; // Make sure the path is correct

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img 
            src={logo} 
            alt="Logo" 
            height="40" 
            style={{ objectFit: 'contain' }} 
          />
          <h2 className="mb-0" style={{ fontSize: '1.5rem' }}>BookMyShow</h2>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
