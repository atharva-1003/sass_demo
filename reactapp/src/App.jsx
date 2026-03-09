import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import Library from './Library';
import Contact from './Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
