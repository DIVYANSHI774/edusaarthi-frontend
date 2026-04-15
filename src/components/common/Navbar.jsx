import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>EduSaarthi AI</h2>
      <div>
        <Link to="/" style={{ color: "white", marginRight: 15 }}>Chat</Link>
        <Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link>
      </div>
    </div>
  );
}

export default Navbar;