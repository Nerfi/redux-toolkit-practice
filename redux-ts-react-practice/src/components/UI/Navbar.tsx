import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/favorites">Your Favorites</Link>
        </li>

        <li>
          <Link to="/login" replace={true}>Login</Link>
        </li>
      </ul>
    </nav>
  );
}
