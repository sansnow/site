import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-2xl flex items-center justify-between">
      <h1 className="">
        <Link to="/">sansnow</Link>
      </h1>

      <ul className="flex gap-4 items-center ">
        <li>
          <Link to="/blog" className="text-cyan-400">
            [ BLOG ]
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-yellow-400">
            [ ABOUT ]
          </Link>
        </li>
        <li>
          <Link to="/game" className="text-pink-500">
            [ GAME ]
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
