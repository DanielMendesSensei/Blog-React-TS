import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
      <h1>
        <Link to={`/`}>Blog</Link>
      </h1>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/new`} className="new-btn">
            New Post
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
