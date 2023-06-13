import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>

      <ul>
        <li>
        <Link to="/home">Home</Link>
        </li>
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
  );
}

export default Navigation;
