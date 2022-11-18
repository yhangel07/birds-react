import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import BirdsList from "./birdList";
import BirdDetails from "./birdDetails";

const List = () => {
  return <h3>Props Page</h3>;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<BirdsList />} />
      <Route path="/:id" element={<BirdDetails />} />
    </Routes>
  </Router>
);
