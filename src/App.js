import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import SellerList from "./pages/SellerList";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sellers" element={<SellerList />} />
      </Routes>
    </Router>
  );
}

export default App;
