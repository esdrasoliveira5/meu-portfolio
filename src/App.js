import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PortfolioProvider from './context/PortfolioProvider';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Work from './pages/Work';

function App() {
  return (

    <PortfolioProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </PortfolioProvider>
  );
}

export default App;
