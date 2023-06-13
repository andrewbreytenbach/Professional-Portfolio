import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>Connect with me:</p>
      <div className="social-links mt-3 text-center">
        <a href="https://github.com/andrewbreytenbach?tab=repositories" className="github">
          <i className="bx bxl-github">GitHub</i>
        </a>
        <a href="www.linkedin.com/in/andrew-breytenbach" className="linkedin">
          <i className="bx bxl-linkedin">LinkedIn</i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
