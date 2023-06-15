import React, { useState } from 'react';

const Portfolio = () => {

  const portfolioItems = [
    {
      imageSrc: './img/color-WeatherApp.png',
      imageAlt: 'Weather App',
      githubLink: 'https://github.com/andrewbreytenbach/weather-challenge',
    },
    {
      imageSrc: './img/work-day-scheduler.png',
      imageAlt: 'Work Day Scheduler',
      githubLink: 'https://github.com/andrewbreytenbach/work-day-scheduler',
    },
    {
      imageSrc: './img/Password.png',
      imageAlt: 'Password Generator',
      githubLink: 'https://github.com/andrewbreytenbach/Password-Generator',
    },
    {
      imageSrc: './img/color-quiz.png',
      imageAlt: 'JavaScript Quiz Game',
      githubLink: 'https://github.com/andrewbreytenbach/coding-game-quiz',
    },
    {
      imageSrc: './img/Match.com.png',
      imageAlt: 'The Other Match.com',
      githubLink: 'https://github.com/andrewbreytenbach/movie-book-match',
    },
    {
      imageSrc: './img/RandomPlaylistGenerator.png',
      imageAlt: 'Random Playlist Generator',
      githubLink: 'https://github.com/andrewbreytenbach/random-playlist-generator',
    },
    {
      imageSrc: './img/ProfessionalReadmeGenerator.png',
      imageAlt: 'Professional Readme Generator',
      githubLink: 'https://github.com/andrewbreytenbach/professional-readme-generator',
    },
    {
      imageSrc: './img/SVGLogoMaker.png',
      imageAlt: 'SVG Logo Maker',
      githubLink: 'https://github.com/andrewbreytenbach/svg-logo-maker',
    },
    {
      imageSrc: './img/SQLEmployeeTracker.png',
      imageAlt: 'Employee Tracker',
      githubLink: 'https://github.com/andrewbreytenbach/sql-challenge-employee-tracker',
    },
    {
      imageSrc: './img/NoteTakerApp.png',
      imageAlt: 'Note Taker',
      githubLink: 'https://github.com/andrewbreytenbach/express-note-taker',
    },
  ];

  const [showLinks, setShowLinks] = useState(Array(portfolioItems.length).fill(false));

  const handleHover = (index, show) => {
    setShowLinks((prevState) => {
      const newState = [...prevState];
      newState[index] = show;
      return newState;
    });
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <br />
          <h2>Portfolio</h2>
          <p>Take a look at some of the projects I have had the privilege of working on:</p>
        </div>

        <div className="row portfolio-container">
          {portfolioItems.map((item, index) => (
            <div className="col-lg-4 col-md-6 portfolio-item" key={index}>
              <div
                className="portfolio-wrap"
                onMouseEnter={() => handleHover(index, true)}
                onMouseLeave={() => handleHover(index, false)}
              >
                <img src={item.imageSrc} className="card-img-top" alt={item.imageAlt} />
                <div className={`portfolio-links ${showLinks[index] ? 'visible' : ''}`}>
                  <p className="portfolio-link" onClick={() => window.open(item.githubLink, '_blank')}>
                    GitHub Repository
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;