import React from "react";
import {Navbar, NavItem} from "react-materialize";
import "./Nav.css";

const Nav = () =>

<Navbar brand='Interview App' right>
  <NavItem href='/practicesetup'>Practice</NavItem>
  {/* <NavItem href='/practicesession'>Practice Session</NavItem> */}

</Navbar>

export default Nav;
