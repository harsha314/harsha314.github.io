import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Shelf from "./components/Shelf";
import ShelfItem from "./components/ShelfItem";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/shelf" element={<Shelf />} />
        <Route path="/projects" element={<div>Projects Page</div>} />
        <Route path="/shelf/:id" element={<ShelfItem />} />
        {/* Add other routes later */}
      </Routes>
    </Router>
  );
};

export default App;
