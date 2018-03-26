import React from "react";
import {Navbar, NavItem} from "react-materialize";
import "./Nav.css";

const Nav = () =>

<Navbar brand='Interview App' right>
  <NavItem href='/decks'>Decks</NavItem>
  <NavItem href='/questions'>Questions</NavItem>
  <NavItem href='/practicesetup'>Practice Setup</NavItem>
  <NavItem href='/practicesession'>Practice Session</NavItem>

</Navbar>
  // <nav className="navbar navbar-inverse navbar-top">
  //   <div className="container-fluid">
  //     <div className="navbar-header">
  //       <button type="button" className="collapsed navbar-toggle">
  //         <span className="sr-only">Toggle navigation</span>
  //         <span className="icon-bar" /> <span className="icon-bar" />
  //         <span className="icon-bar" />
  //       </button>
  //       <a href="/" className="navbar-brand">
  //         Interview App
  //       </a>
  //     </div>
  //   </div>
  // </nav>;

export default Nav;
