import React from "react";
import { useLocation } from "react-router-dom";
import "./Sidebar.css"; // Import CSS for styling

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  return (
    <aside className="sidebar">
      <ul className="sidebar-links">
        <li className={isActive("/settings/skills") ? "active" : ""}>
          <a href="/settings/skills">Skills</a>
        </li>
        <li className={isActive("/settings/users") ? "active" : ""}>
          <a href="/settings/users">Users</a>
        </li>
        <li className={isActive("/settings/ptasks") ? "active" : ""}>
          <a href="/settings/ptasks">Project Tasks</a>
        </li>
        <li className={isActive("/settings/ptypes") ? "active" : ""}>
          <a href="/settings/ptypes">Project Types</a>
        </li>
        <li className={isActive("/vulnerabilities") ? "active" : ""}>
          <a href="/vulnerabilities">Vulnerabilities</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
