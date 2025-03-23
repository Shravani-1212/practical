import React from "react";
import AddButton from "../components/AddButton";
import MainContent from "../components/MainContent";

const Skills = () => {
  return (
    <MainContent title="Skills">
      <AddButton text="Add Skill" />
      <div className="actions">
        <button className="action-button">Import</button>
        <button className="action-button">Export</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">No data available.</td>
          </tr>
        </tbody>
      </table>
    </MainContent>
  );
};

export default Skills;
