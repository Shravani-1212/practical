import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import "./styles/global.css";
import App from "./App";

// Get the root DOM element
const container = document.getElementById("root");

// Create a root using createRoot
const root = createRoot(container);

// Render the app into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
