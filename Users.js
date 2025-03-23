import React from "react";
import AddButton from "../components/AddButton";
import MainContent from "../components/MainContent";

const Users = () => {
  return (
    <MainContent title="Users">
      <AddButton text="Add User" />
      <div className="actions">
        <button className="action-button">Import</button>
        <button className="action-button">Export</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th># of Skills</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="5">No data available.</td>
          </tr>
        </tbody>
      </table>
    </MainContent>
  );
};

export default Users;
