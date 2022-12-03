import React from "react";
import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Lcomponent from "./components/Lcomponents";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/components" element={<Lcomponent />} />
      </Routes>
    </Router>
  );
}

export default App;
