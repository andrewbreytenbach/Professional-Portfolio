import React from 'react';

function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
      <div className="hero-container" data-aos="fade-in">
        <h1>Andrew Breytenbach</h1>
        <p>I'm a <span className="typed" data-typed-items="Front-End Developer, Back-End Developer, Full-Stack Developer"></span></p>
      </div>
    </section>
  );
}

export default Hero;
