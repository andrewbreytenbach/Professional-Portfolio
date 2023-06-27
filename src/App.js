import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Contact from './components/contact';


class App extends Component {
  render() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        <Route path="/" element={<About />} />
          <Route path="/About" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
);
}
}

export default App;
