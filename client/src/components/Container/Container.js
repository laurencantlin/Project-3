import React from "react";
import "./Container.css";

const Container = props => (

  <div className="container "{...this.props}>
    {/* <div className="level "> */}

     {props.children}
  {/* </div> */}
  </div>

);

export default Container;
