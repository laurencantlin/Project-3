import React from "react";
import "./Container.css";

const Container = props => (

  <div class="container is-transparent ">
     {props.children}
  </div>

);

export default Container;
