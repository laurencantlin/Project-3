import React from "react";
import {Navbar, NavItem} from "react-materialize";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) =>
<nav className="navbar is-dark is-Roboto">
<div className="container">
        <div className="navbar-brand">
          <Link to="/decks" className="navbar-item is-icon is-active">
              Decks
            </Link>
        </div>
        <div  className="navbar-menu">
          <div className="navbar-end">
            {/* <Link to="/practicesetup" className="navbar-item">
              Practice
            </Link> */}
            <span className="navbar-item">
            <Link to="/practicesession" className="button has-text-bold is-primary">
              Practice
            </Link>
                        </span>
          </div>
          </div>
          </div>
          </nav>
export default Nav;
