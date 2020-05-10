import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Project from "./components/project/projects";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Dashboard />
        <Project />
      </div>
    </BrowserRouter>
  );
}

export default App;
