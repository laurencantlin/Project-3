import React, { Component } from "react";
import "./Decks.css";
import Deck from "../../components/Deck"
import Stack from "../../components/Stack"
import API from "../../utils/API";
import Container from "react-materialize/lib/Container";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";

class Decks extends Component {
  state = {
    decks: [],
  };

  componentDidMount() {
    this.loadDecks();
    // console.log(this.state.decks);
  }
  loadDecks = () => {
    API.getDecks()
      .then(res => (
        this.setState({ decks: res.data }))
      )
      .catch(err => console.log(err));
  };
  onDeckClick = event => {
    const btnType = event.target;
    console.log(btnType);
  }

  render() {
    return (
      <div>
        <Nav />
        <Container>
          <h3>Deck</h3>
          {this.state.decks.map(deck => <Link to={"/questions/" + deck.DeckName} className="stacklink">
            <Stack deckText={deck.DeckName}
              handleBtnClick={this.onDeckClick} key={deck.DeckName}
            >{deck.DeckName} </Stack></Link>)}
        </Container>
      </div>
        );
      }
    }
    
    export default Decks;
