import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ border: "solid red", padding: "1rem" }}>
      <ul style={{ display: "flex", justifyContent: "space-around" }}>
        <li style={linkStyles}>
          <Link to="/" style={linkStyles}>
            Home
          </Link>
        </li>
        <li style={linkStyles}>
          <Link to="/books" style={linkStyles}>
            Books
          </Link>
        </li>
        <li style={linkStyles}>
          <Link to="/favorites" style={linkStyles}>
            Your Favorites
          </Link>
        </li>

        <li style={linkStyles}>
          <Link to="/login" replace={true} style={linkStyles}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const linkStyles = {
  listStyle: "none",
  textDecoration: "none",
};
