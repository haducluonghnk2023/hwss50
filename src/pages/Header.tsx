import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

export default function Header() {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <header>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
      </ul>
    </header>
  );
}
