import React from "react";

const Library = () => (
  <div style={{ padding: "2rem" }}>
    <h2>Library Home</h2>
    <p>Welcome to the library application. This page is inspired by <a href="https://www.mbrl.ae/" target="_blank" rel="noopener noreferrer">MBRL</a>.</p>
    <div style={{ marginTop: "1rem" }}>
      <h3>Demo Book List</h3>
      <ul>
        <li><strong>Book 1:</strong> The Great Gatsby</li>
        <li><strong>Book 2:</strong> 1984</li>
        <li><strong>Book 3:</strong> To Kill a Mockingbird</li>
      </ul>
    </div>
  </div>
);

export default Library;
