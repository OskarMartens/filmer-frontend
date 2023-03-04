import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Frontpage from "./pages//Frontpage/Frontpage";
import Homepage from "./pages/Homepage/Homepage";
import Friendspage from "./pages/Friendspage/Friendspage";
import Profilepage from "./pages/Profilepage/Profilepage";
import React from "react";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/friendspage" element={<Friendspage />} />
        <Route path="/profilepage" element={<Profilepage />} />
      </Routes>
    </Router>
  );
}

export default App;
