import React from "react";
import AddButton from "../components/AddButton";
import MainContent from "../components/MainContent";

const ProjectTypes = () => {
  return (
    <MainContent title="Project Types">
      <AddButton text="Add Type" />
      <div className="actions">
        <button className="action-button">Import</button>
        <button className="action-button">Export</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th># of Tasks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="3">No data available.</td>
          </tr>
        </tbody>
      </table>
    </MainContent>
  );
};

export default ProjectTypes;
