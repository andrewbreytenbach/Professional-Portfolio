import React, { Component } from 'react';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends Component {
  render() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <About></About>
            <Resume></Resume>
            <Portfolio></Portfolio>
            <Contact></Contact>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
}

export default App;
