import React, { Component } from "react";
import List from "../../components/List"
import Container from "../../components/Container"
import API from "../../utils/API";
import { CollectionItem, Badge } from "react-materialize";
import "./Questions.css";
import Nav from "../../components/Nav";

class Questions extends Component {

    state = {
        deck: window.location.pathname.split("/").pop().split("%20").join(" "),
        questions: []
    }

    componentDidMount() {
        this.loadDeckQuestions(this.state.deck);
    }

    loadDeckQuestions = (deckname) => {
        API.getDeckQuestions(deckname)
            .then(res => (this.setState({ questions: res.data }))
            )
            .catch(err => console.log(err));
    };
    render() {
        return (
            <div>
                <Nav />

                <Container>
                    <h3>Deck</h3>
                    <List>
                        {this.state.questions.map((elem, index) => (
                            <CollectionItem key={elem.question} href={`/questioncard/${index+1}`}> {index + 1}.  {elem.question}     <Badge  >{elem.in_category}</Badge>

                            </CollectionItem>
                        ))}
                    </List>

                </Container>
            </div>
        );
    }
}

export default Questions;
