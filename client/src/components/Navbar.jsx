import { useState } from "react";
import { Link } from "react-router-dom";
import { UserMenu } from "../components";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <nav className="navbar-container">
          <button onClick={() => setIsOpen(!isOpen)} className="menu-icon">
            <CiMenuBurger />
          </button>
          <ul className={isOpen ? "navbar-menu open" : "navbar-menu"}>
            <li>
              <Link to="/mission" onClick={() => setIsOpen(false)}>
                Mission
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setIsOpen(false)}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/testimonials" onClick={() => setIsOpen(false)}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/wholesale" onClick={() => setIsOpen(false)}>
                Wholesale
              </Link>
            </li>
            <UserMenu />
          </ul>
        </nav>
      </header>
    </>
  );
}
