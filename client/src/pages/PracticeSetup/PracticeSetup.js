import React, { Component } from "react";
import Container from "../../components/Container";
// import Input from "../../components/Form";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Col, Input } from "react-materialize";
import Nav from "../../components/Nav";
import "./form.css";

class PracticeSetup extends Component {
    state = {
        decks: []
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
    clickPracticeBtn = ()=>{
        
    }
    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <form>
                        {/* <Row> */}
                        {/* <Input placeholder="Placeholder" s={6} label="First Name" />
                            <Input s={12} label="Last Name" />
                            <Input s={12} label="disabled" defaultValue="I am not editable" disabled /> */}

                        {/* </Row> */}
                        <div className="columns is-gapless is-multiline">
                            <div className="column">

                                Include Decks:

                                {this.state.decks.map(deck => <div className="column">
                                    <label className="checkbox"><input name='group1' type='checkbox' /> {deck.DeckName} </label> </div>
                                )}
                            </div>

                        </div>
                        {/* <div class="select is-multiple">
                        <select multiple size="8">
                                <option value="Argentina">Rounded dropdown</option>
                                <option value="Argentina">With options</option>
                            </select>
                        </div> */}
                        <button onClick={this.clickPracticeBtn}>Practice</button>
                    </form>
                    {/* <Link to="/practicesession">Practice</Link> */}

                </Container>
            </div>
        );
    }
}

export default PracticeSetup;
