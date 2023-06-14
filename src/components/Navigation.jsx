import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div id="header">
      <div class="profile">
        <img src="./img/IMG_8850.JPG" alt="Profile Image" />
        <h1>
            Andrew Breytenbach | Full-Stack Web Developer
        </h1>
      </div>
      <nav>
        <ul>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
        <Link to="/resume">Resume</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;


    
