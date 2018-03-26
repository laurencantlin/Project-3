import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import "./Card.css";

const Card = props => (
  <div>
    <Row>
      <Col s={12} m={5}>
        <CardPanel className="grey lighten-4 black-text">
          <span>I am a card component</span>
        </CardPanel>
      </Col>
    </Row>
  </div>

);

export default Card;
