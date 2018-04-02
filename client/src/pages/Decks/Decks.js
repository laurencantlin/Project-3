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
        <section className="section">
          <div className="container">
            <h3 className=" is-1 title">Decks</h3>

            {/* <h2 className="subtitle">
                A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2> */}
          </div>
        </section>
        <Container>
          <div className="columns is-4 is-multiline ">
            <div className="column is-narrow is-12">
              {/* {/* <Stack
                // className="card5"> */}
                
                <div className="field is-grouped">
                 <p className="control is-expanded"> 
                    <input className="input" type="text" onChange={this.handleInputChange} placeholder="Create a new deck" />
                  </p>
                  <p className="control">
                    <button className="button is-primary" onClick={this.onClickAddDeck}>Add Deck</button>

                  </p>
                {/* {/* </div> </Stack>    */}
                </div> 
                </div> 

            {/* <p className="has-text-dark	"> */}
            {this.state.decks.map(deck => (<div className="column is-4" key={deck.id}>
              <Link to={"/questions/" + deck.DeckName} className="stacklink" >
                <Stack deckText={deck.DeckName}
                  handleBtnClick={this.onDeckClick} key={deck.DeckName} className="card5" >  {deck.DeckName} </Stack>
              </Link></div>))}

            {/* </p> */}
            {/* <Link  className="stacklink"> */}

            {/* </Link> */}
          </div>
          {/* </div> */}
        </Container>


      </div>
      // </div>
    );
  }
}

export default Decks;
