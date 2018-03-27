import React from "react";
import { Row, Col, CardPanel } from "react-materialize";
import "./Deck.css";
import { Link } from "react-router-dom";

const Deck = props => (
  <div>
    <Row>
      <Col s={12}>
      <Link to={"/questions/" + props.deckText }>
        <CardPanel className="white lighten-4 black-text"  onClick={props.handleBtnClick} value={props.deckText}>
          <span>{props.deckText}</span>
        </CardPanel></Link>
      </Col>
    </Row>
  </div>

);

export default Deck;
