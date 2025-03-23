import React from "react";
import "./MainContent.css"; // Import CSS for styling

const MainContent = ({ title, children }) => {
  return (
    <div className="main-content">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default MainContent;
