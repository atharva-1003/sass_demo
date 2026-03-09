import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ padding: "1rem", background: "#eee", marginBottom: "2rem" }}>
    <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
    <Link to="/library" style={{ marginRight: "1rem" }}>Library</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navbar;
