import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav className="navbar-container">
          <ul className="navbar-menu">
            <li>
              <Link to="/mission">Mission</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
