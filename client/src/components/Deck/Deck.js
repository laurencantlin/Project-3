import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import "./Deck.css";

const Deck = props => (
  <div>
    <Row>
      <Col s={12} m={5}>
        <CardPanel className="blue-grey lighten-4 black-text">
          <span>{props.deckText}</span>
        </CardPanel>
      </Col>
    </Row>
  </div>

);

export default Deck;
