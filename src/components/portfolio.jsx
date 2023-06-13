import React from 'react';

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Take a look at some of the projects I have had the privilege of working on:</p>
        </div>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="./img/color-WeatherApp.png" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="./img/color-WeatherApp.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Weather App"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/andrewbreytenbach/weather-challenge" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="./img/work-day-scheduler.png" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="./img/work-day-scheduler.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Work Day Scheduler"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/andrewbreytenbach/work-day-scheduler" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          {/* Add the rest of the projects here */}

          {/* Project 3 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="./img/Password.png" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="./img/Password.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Password Generator"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/andrewbreytenbach/Password-Generator" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="./img/color-quiz.png" className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a href="./img/color-quiz.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="JavaScript Quiz Game"><i className="bx bx-plus"></i></a>
                <a href="https://github.com/andrewbreytenbach/coding-game-quiz" title="More Details"><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>

          {/* Project 5 */}
<div className="col-lg-4 col-md-6 portfolio-item filter-web">
  <div className="portfolio-wrap">
    <img src="./img/Match.com.png" className="img-fluid" alt="" />
    <div className="portfolio-links">
      <a href="./img/Match.com.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="The Other Match.com"><i className="bx bx-plus"></i></a>
      <a href="https://github.com/andrewbreytenbach/movie-book-match" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>

{/* Project 6 */}
<div className="col-lg-4 col-md-6 portfolio-item filter-web">
  <div className="portfolio-wrap">
    <img src="./img/RandomPlaylistGenerator.png" className="img-fluid" alt="" />
    <div className="portfolio-links">
      <a href="./img/RandomPlaylistGenerator.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Random Playlist Generator"><i className="bx bx-plus"></i></a>
      <a href="https://github.com/andrewbreytenbach/random-playlist-generator" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>

{/* Project 7 */}
<div className="col-lg-4 col-md-6 portfolio-item filter-web">
  <div className="portfolio-wrap">
    <img src="./img/ProfessionalReadmeGenerator.png" className="img-fluid" alt="" />
    <div className="portfolio-links">
      <a href="./img/ProfessionalReadmeGenerator.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Professional Readme Generator"><i className="bx bx-plus"></i></a>
      <a href="https://github.com/andrewbreytenbach/professional-readme-generator" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>

{/* Project 8 */}
<div className="col-lg-4 col-md-6 portfolio-item filter-web">
  <div className="portfolio-wrap">
    <img src="./img/SVGLogoMaker.png" className="img-fluid" alt="" />
    <div className="portfolio-links">
      <a href="./img/SVGLogoMaker.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="SVG Logo Maker"><i className="bx bx-plus"></i></a>
      <a href="https://github.com/andrewbreytenbach/svg-logo-maker" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>

{/* Project 9 */}
<div className="col-lg-4 col-md-6 portfolio-item filter-web">
  <div className="portfolio-wrap">
    <img src="./img/SQLEmployeeTracker.png" className="img-fluid" alt="" />
    <div className="portfolio-links">
      <a href="./img/SQLEmployeeTracker.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Employee Tracker"><i className="bx bx-plus"></i></a>
      <a href="https://github.com/andrewbreytenbach/sql-challenge-employee-tracker" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>

{/* Project 10 */}
<div className="col-lg-4 col-md-6 portfolio-item filter-web">
  <div className="portfolio-wrap">
    <img src="./img/NoteTaker.png" className="img-fluid" alt="" />
    <div className="portfolio-links">
      <a href="./img/NoteTaker.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Note Taker"><i className="bx bx-plus"></i></a>
      <a href="https://github.com/andrewbreytenbach/express-note-taker" title="More Details"><i className="bx bx-link"></i></a>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  );
}

export default Portfolio;
