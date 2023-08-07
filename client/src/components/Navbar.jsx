export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <nav className="navbar-container">
          <ul className="navbar-menu">
            <li>
              <a href="/mission">Mission</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/posts">Testimonials</a>
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