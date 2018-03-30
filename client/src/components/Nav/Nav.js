import React from "react";
import {Navbar, NavItem} from "react-materialize";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = (props) =>
<nav className="navbar is-dark is-Roboto">
<div class="container">
        <div class="navbar-brand">
          <Link to="/decks" class="navbar-item is-icon is-active">
              Decks
            </Link>
          {/* <span class="navbar-burger burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span> */}
        </div>
        <div  class="navbar-menu">
        {/* <div id="navbarMenuHeroA" class="navbar-menu"> */}
          <div class="navbar-end">
           
            {/* <span class="navbar-item"> */}
            <Link to="/practicesetup" class="navbar-item">
              Practice
            </Link>
            <span class="navbar-item">
            <Link to="/practicesession" class="button has-text-bold is-primary">
              Practice
            </Link>
                {/* <span class="icon">
                  <i class="fab fa-github"></i>
                </span> */}
                {/* <span>Practice</span> */}
            </span>
          </div>
          </div>
          </div>
          </nav>
// <Navbar brand='Interview App' right>
//   <NavItem options={{}} href='/practicesetup'>Practice</NavItem>
//   {/* <NavItem href='/practicesession'>Practice Session</NavItem> */}

// </Navbar>

export default Nav;
