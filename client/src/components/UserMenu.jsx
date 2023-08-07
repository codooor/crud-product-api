import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

export default function UserMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/mission");
  };

  return (
    <li
      className="user-menu"
      onMouseEnter={() => setDropdownOpen(true)}
      onMouseLeave={() => setDropdownOpen(false)}
    >
      <div className="account" onClick={() => setDropdownOpen(!isDropdownOpen)}>
        Account <FaCaretDown />
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/login" onClick={() => setDropdownOpen(false)}>
              Login
            </Link>
          </li>
          <hr />
          <li>
            <Link to="/register" onClick={() => setDropdownOpen(false)}>
              Register
            </Link>
          </li>
          <hr />
          <li>
            <a href="/mission" onClick={handleLogout}>
              Logout
            </a>
          </li>
        </ul>
      )}
    </li>
  );
}
