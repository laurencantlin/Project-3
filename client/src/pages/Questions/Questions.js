import React, { Component } from "react";
import List from "../../components/List"
import Container from "../../components/Container"
import API from "../../utils/API";
import { CollectionItem, Badge } from "react-materialize";
// import "./Questions.css";
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
                <section class="section">
                    <div class="container">
                     
                            <h3 class=" is-1 title">{this.state.deck}</h3>
                       
                    </div>
                </section>
                <Container classes="container">
                   <div class="columns is-centered">
                        <div class="column is-10 ">
                    <List>
                        {this.state.questions.map((elem, index) => (
                            <CollectionItem key={elem.question} href={`/questioncard/${index + 1}`}> {index + 1}.  {elem.question}     <Badge  >{elem.in_category}</Badge>

                            </CollectionItem>
                        ))}
                    </List>

                        </div>
                        </div>
                </Container>
            </div>
        );
    }
}

export default Questions;
