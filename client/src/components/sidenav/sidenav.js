import React from "react";
// import {Navbar, NavItem} from "react-materialize";
import "./sidenav.css";
import { Link } from "react-router-dom";

const Sidenav = (props) =>
<nav className="panel">
  <p className="panel-heading">
    Questions
  </p>

  {/* <div className="panel-block">
    <p className="control has-icons-left">
      <input className="input is-small" type="text" placeholder="search"/>
      <span className="icon is-small is-left">
        <i className="fas fa-search" aria-hidden="true"></i>
      </span>
    </p>
  </div> */}

  {/* <p className="panel-tabs">
    <a className="is-active">all</a>
    <a>public</a>
    <a>private</a>
    <a>sources</a>
    <a>forks</a>
  </p> */}

  
  {props.children}

  <div className="panel-block">
    <button className="button is-link is-outlined is-fullwidth">
      reset all filters
    </button>
  </div>
</nav>
export default Sidenav;
