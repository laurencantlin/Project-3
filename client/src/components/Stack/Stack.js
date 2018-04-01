import React from "react";
import {Row, Col, CardPanel } from "react-materialize";
import "./Stack.css";
import { Link } from "react-router-dom";

const Stack = props => (
  <div>
    <Row>
      <Col s={12} >
        {/* <Link to={"/questions/" + props.deckText} className="stacklink"> */}
          <div className="card-stacked" >
            <div className={props.className}  onClick={props.handleBtnClick} value={props.deckText}>
           
              {props.children}
            </div>
            <div className="lower-card"></div>

          </div>
        {/* </Link> */}
      </Col>
    </Row>
  </div>
);

export default Stack;