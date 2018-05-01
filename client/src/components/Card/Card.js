import React from "react";
import { Row, Col, Input, CardPanel } from "react-materialize";
import "./Card.css";

const Card = props => (
  <div className="columns  is-clearfix">
    <div className="column is-clearfix">
      <div className="box card-panel">
        <span>
          <textarea className="textarea is-medium" rows="5" s={12} value={props.cardText} onChange={props.handleInputChange} placeholder="Enter text here"
          />
        </span>
      </div>
    </div>
  </div>

);

export default Card;
