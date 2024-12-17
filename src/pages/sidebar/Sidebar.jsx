import React from 'react';
import { FaHome, FaChartLine, FaCreditCard, FaExchangeAlt, FaSignOutAlt } from 'react-icons/fa';
import logo from '../../assets/images/Logo.svg';

function Sidebar() {
  return (
    <div className="sidebar bg-dark text-white p-4 min-vh-100">
      <div className="logo-container text-center mb-4">
        <img src={logo} alt="MoneyGuard" className="logo mb-3" />
        <div className="user-profile text-center">
          <img src="https://via.placeholder.com/80" alt="Profile" className="rounded-circle mb-3" />
          <p className="welcome-text">Welcome back!</p>
          <h5>Adam Jacobs</h5>
        </div>
      </div>

      <nav className="nav flex-column">
        <a href="#" className="nav-link active">
          <FaHome /> Dashboard
        </a>
        <a href="/exchange" className="nav-link">
          <FaChartLine /> Exchange
        </a>
        <a href="#" className="nav-link">
          <FaCreditCard /> My Cards
        </a>
        <a href="#" className="nav-link">
          <FaExchangeAlt /> Transactions
        </a>
      </nav>

      <button className="btn btn-outline-light mt-5 w-100">
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
}

export default Sidebar;