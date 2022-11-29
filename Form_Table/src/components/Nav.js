import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div>
      <ul className="nav-ul">
        <li>
          <Link to="/">From</Link>
        </li>
        <li>
          <Link to="/add">AddFrom</Link>
        </li>  
      </ul>
    </div>
  );
};

export default Nav;
