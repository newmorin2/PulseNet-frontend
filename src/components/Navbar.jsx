import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-brand-badge">M</span>
        <span>MedCare</span>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/departments">Departments</Link>
        </li>
        <li>
          <Link to="/appointments">Appointment</Link>
        </li>
      </ul>

      <button className="login-btn" type="button">
        Login
      </button>
    </header>
  );
}

export default Navbar;