import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frontpage from "./pages/Frontpage";
import React from "react";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
      <p className="bg-red-500 text-yellow-400">Test</p>
        <Routes>
          <Route path="/" element={<Frontpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
