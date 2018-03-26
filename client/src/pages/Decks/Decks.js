import React, { Component } from "react";
import Deck from "../../components/Deck"
import API from "../../utils/API";
import Container from "react-materialize/lib/Container";

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
    const btnType = event.target.value;
    console.log(btnType);
  }

  render() {
    return (
      <div>

        <Container>
          {this.state.decks.map(deck => <Deck
            deckText={deck.DeckName}
            key={deck.DeckName}
            handleBtnClick={this.onDeckClick}/>)}

        </Container>
      </div>
    );
  }
}

export default Decks;
