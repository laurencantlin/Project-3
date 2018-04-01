import React, { Component } from "react";
// import "./Decks.css";
import Deck from "../../components/Deck"
import Stack from "../../components/Stack"
import API from "../../utils/API";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import IconBtn from "../../components/IconBtn"

class Decks extends Component {
  state = {
    decks: [],
    newDeck: ""
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
  onClickAddDeck = event => {
    const btnType = event.target;
    console.log(this.state.newDeck);
    const newDeck = { DeckName: this.state.newDeck }
    API.postDeck(newDeck)
    .then(res => this.loadDecks())
    // .then(res=> this.event.value="")
    .catch(err => console.log(err));
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      newDeck: value
    });
  };

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
          <Stack
            className="card5"><div class="field is-grouped">
              <p class="control is-expanded">
                <input class="input" type="text" onChange={this.handleInputChange} placeholder="Create a new deck" />
              </p>
              <p class="control">
                <button class="button is-primary" onClick={this.onClickAddDeck}>Add Deck</button>

              </p>
            </div> </Stack>
          <p className="has-text-dark	">
            {this.state.decks.map(deck => <Link to={"/questions/" + deck.DeckName} className="stacklink">
              <Stack deckText={deck.DeckName}
                handleBtnClick={this.onDeckClick} className="card5" key={deck.DeckName}>  {deck.DeckName} </Stack>
            </Link>)}

          </p>
          {/* <Link  className="stacklink"> */}

          {/* </Link> */}

        </Container>


      </div>
      // </div>
    );
  }
}

export default Decks;
