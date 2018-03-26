import React, { Component } from "react";
import List from "../../components/List"
import ListItem from "../../components/List"
import Container from "../../components/Container"
import API from "../../utils/API";
import { Collection, CollectionItem } from "react-materialize";

import { Link } from "react-router-dom";

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
                <Container>

                    <List>
                        {this.state.questions.map(elem => (
                           <ListItem key={elem.question}><Link to={"/questions"}><strong>{elem.question}</strong></Link></ListItem>
                        ))}

                        {/* {this.state.questions.map(question => (<CollectionItem >
                            {question}</CollectionItem>))} */}
                        {/* <ListItem>sd</ListItem>
                        <ListItem></ListItem> */}
                    </List>
                </Container>
            </div>
        );
    }
}

export default Questions;
