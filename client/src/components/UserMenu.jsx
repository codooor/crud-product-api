import { Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";

export default function UserMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <li className="user-menu">
      <div className="account">
        Account <FaCaretDown />
      </div>

      <ul className="dropdown-menu">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <hr />
        <li>
          <Link to="/register">Register</Link>
        </li>
        <hr />
        <li>
          <a onClick={handleLogout}>Logout</a>
        </li>
      </ul>
    </li>
  );
}
