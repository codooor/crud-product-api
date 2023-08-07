import { Link } from "react-router-dom";
import { UserMenu } from "../components";

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
            <UserMenu />
          </ul>
        </nav>
      </header>
    </>
  );
}
