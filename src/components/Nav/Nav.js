import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-link">
        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
