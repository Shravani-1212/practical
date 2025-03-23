import React from "react";
import AddButton from "../components/AddButton";
import MainContent from "../components/MainContent";

const Vulnerabilities = () => {
  return (
    <MainContent title="Vulnerabilities">
      <AddButton text="Add Parent" />
      <div className="actions">
        <button className="action-button">Import</button>
        <button className="action-button">Export</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th># of Vulnerabilities</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4">No data available.</td>
          </tr>
        </tbody>
      </table>
    </MainContent>
  );
};

export default Vulnerabilities;
