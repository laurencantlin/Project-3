import React from "react";
import { Row, Col, Input, CardPanel } from "react-materialize";
import "./Card.css";

const Card = props => (
  <div>
    <Row>
      <Col s={12} m={6} offset="m3">
        <CardPanel className="black-text">
          <span><Input type='textarea' s={12} value={props.cardText} onChange={props.handleInputChange}
          />

          </span>
        </CardPanel>
      </Col>
    </Row>
  </div>

);

export default Card;
