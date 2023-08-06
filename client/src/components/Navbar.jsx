import waveLogo from "../assets/waveLogo.jpg";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav className="navbar-container">
          <img
            className="navbar-logo"
            src={waveLogo}
            alt="company logo"
            style={{ height: "100px", width: "100px" }}
          />

          <ul className="navbar-menu">
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/posts">Posts</a>
            </li>
            <li>
              <a href="/admin-login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
