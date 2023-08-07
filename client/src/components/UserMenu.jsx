import { Link, useNavigate } from "react-router-dom";

export default function UserMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <li className="user-menu">
      <div className="account">Account</div>

      <ul className="dropdown-menu">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <a onClick={handleLogout}>Logout</a>
        </li>
      </ul>
    </li>
  );
}
