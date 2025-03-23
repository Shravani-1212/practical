import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Vulnerabilities from "./pages/Vulnerabilities";
import ProjectTypes from "./pages/ProjectTypes";
import ProjectTasks from "./pages/ProjectTasks";
import Users from "./pages/Users";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header at the top */}
        <Header />

        {/* Sidebar and Main Content below the header */}
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/vulnerabilities" element={<Vulnerabilities />} />
            <Route path="/settings/ptypes" element={<ProjectTypes />} />
            <Route path="/settings/ptasks" element={<ProjectTasks />} />
            <Route path="/settings/users" element={<Users />} />
            <Route path="/settings/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
