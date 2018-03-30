import React, { Component } from "react";
// import "./Decks.css";
import Deck from "../../components/Deck"
import Stack from "../../components/Stack"
import API from "../../utils/API";
import Container from "../../components/Container";
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
          <section class="section">
            <div class="container">
              <h3 class=" is-1 title">Decks</h3>
              {/* <h2 class="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2> */}
            </div>
          </section>
        <Container >
          <p className="has-text-dark	">
            {this.state.decks.map(deck => <Link to={"/questions/" + deck.DeckName} className="stacklink">
              <Stack deckText={deck.DeckName}
                handleBtnClick={this.onDeckClick} className="card5" key={deck.DeckName}>  {deck.DeckName} </Stack>
                </Link>)}
          </p>
        </Container>


      </div>
      // </div>
    );
  }
}

export default Decks;
