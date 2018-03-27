import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import "./Card.css";

const Card = props => (
  <div>
    <Row>
      <Col s={12} m={6} offset="m3">
        <CardPanel className="black-text">
          <span>{props.cardText}</span>
        </CardPanel>
      </Col>
    </Row>
  </div>

);

export default Card;
