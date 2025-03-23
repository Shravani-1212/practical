import React from "react";
import "./TableComponent.css"; // Add CSS file for styling

const TableComponent = ({ columns, data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((row, index) => (
            <tr key={index}>
              {Object.keys(row).map((key) => (
                <td key={key}>{row[key]}</td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={columns.length}>No data available.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableComponent;
