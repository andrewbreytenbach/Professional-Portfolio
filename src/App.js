import React, { Component } from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends Component {
  render() {
  return (
    <div className="App">
    <Header />
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
}
}

export default App;
