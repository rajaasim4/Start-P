import React from "react";
import "../Stylesheet/Navbar.css";
//import logo from ''
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">LTR Demo</NavLink>
          </li>
          <li>
            <NavLink to="/">RTL Demo</NavLink>
          </li>
          <li>
            <NavLink to="/">Installation</NavLink>
          </li>
          <li>
            <NavLink to="/">Alternate Version</NavLink>
          </li>
          <li>
            <NavLink to="/">Features</NavLink>
          </li>
          <li>
            <NavLink to="/">Support</NavLink>
          </li>
        </ul>
        <div className="btn-div">
          <button>Buy Now!</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
