import React from "react";
// import {Row, Col } from "react-materialize";
import "./Stack.css";
import { Link } from "react-router-dom";

const Stack = props => (
  <div>
      {/* <div className="column"> */}
        {/* <Link to={"/questions/" + props.deckText} className="stacklink"> */}
          <div className="card-stacked" >
            <div className={props.className}  onClick={props.handleBtnClick} value={props.deckText}>
           
              {props.children}
            </div>
            <div className="lower-card"></div>

          {/* </div> */}
        {/* </Link> */}
    </div>
  </div>
);

export default Stack;