import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Lokesh<span>.</span>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/#about">About</Link>

        <Link to="/projects">
          Projects
        </Link>

        <Link to="/#journey">Journey</Link>

        <Link to="/#contact">Contact</Link>
      </nav>

      <Link to="/#contact" className="connect-btn">
        Let's Connect <span>↗</span>
      </Link>
    </header>
  );
};

export default Navbar;