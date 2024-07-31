import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Carouselslide from './Carouselslide';
import About from './About';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Carouselslide />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
