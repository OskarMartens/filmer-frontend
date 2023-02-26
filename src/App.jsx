import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import Homepage from "./pages/Homepage/Homepage";
import React from "react";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
    </Router>
  );
}

export default App;
