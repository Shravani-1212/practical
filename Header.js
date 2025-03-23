import React from "react";
import "./Header.css"; // Import CSS for styling

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src="/cybersecurist_logo.jpeg" alt="CyberSecurist Logo" className="logo" />
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <div>
          <a href="/projects">Projects</a>
          <a href="/wfh">WFH</a>
          <a href="/tasks">Tasks</a>
          <a href="/settings">Settings</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
