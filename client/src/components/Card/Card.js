import React from "react";
import { Row, Col, Input, CardPanel } from "react-materialize";
import "./Card.css";

const Card = props => (
  <div className="columns  is-clearfix">
    {/* <Row> */}
    <div className="column is-clearfix">

      {/* <Col s={12} m={6} offset="m3"> */}
      {/* <CardPanel className="black-text box"> */}
      <div className="box card-panel">
        <span>
          {/* <Input type='textarea' className="textarea" s={12} value={props.cardText} onChange={props.handleInputChange}
          /> */}
          <textarea className="textarea is-medium" rows="5" s={12} value={props.cardText} onChange={props.handleInputChange} placeholder="Enter text here"
          />
        </span>
      </div>
      {/* </CardPanel> */}
    </div>
  </div>

);

export default Card;
