import React, { Component } from "react";
import Container from "../../components/Container";
// import Input from "../../components/Form";
import API from "../../utils/API";

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
                        <Row>
                            Include Decks:
                        </Row>
                        {this.state.decks.map(deck => <Row><Input name='group1' type='checkbox' label={deck.DeckName} /></Row>)}

                    </form>

                </Container>
            </div>
        );
    }
}

export default PracticeSetup;
