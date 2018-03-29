import React, { Component } from "react";
import Container from "../../components/Container"
import Stack from "../../components/Stack"
import IconBtn from "../../components/IconBtn"
import { Row, Col } from "react-materialize";
import API from "../../utils/API";

class PracticeSession extends Component {
    state = {
        decks: ["Behavioral Interview Questions", "Coding Problems"],
        // possibleQuestionsLength:
        possibleQuestions: [],
        question: "",
        answer: "",
        hint: "",
        in_deck: "",
        in_category: ""

    }
    componentWillMount() {
        let deck = [];

        // this.loadDeckQuestions(deck);

    }

    componentDidMount() {
        let deck = [];
        // for (let i = 0; i < this.state.decks.length; i++) {
        // this.loadDeckQuestions(this.state.decks[i]);
        this.loadDeckQuestions(deck);
        // this.randomQuestion();
        // console.log(this.state.possibleQuestions[Math.floor(Math.random()* this.state.possibleQuestions.length)])

        // }
    }
    componentDidUpdate() {
        // // // this.randomQuestion();
        // console.log(this.state.possibleQuestions)
        // console.log(this.state.possibleQuestions[Math.floor(Math.random() * this.state.possibleQuestions.length)].question)
    }

    loadDeckQuestions = (deck) => {
        // var deck=[]

        for (let i = 0; i < this.state.decks.length; i++) {
            // API.getDeckQuestions(deck)    
            // var deck=[]

            API.getDeckQuestions(this.state.decks[i])

                .then(res => {
                    // console.log(i, [...deck, ...res.data]);
                    deck = [...deck, ...res.data];
                    if (i === this.state.decks.length - 1) {
                        this.setState({ possibleQuestions: [...deck] })
                        this.setState({ question: this.state.possibleQuestions[Math.floor(Math.random() * this.state.possibleQuestions.length)].question, answer: this.state.possibleQuestions[Math.floor(Math.random() * this.state.possibleQuestions.length)].answer, hint: this.state.possibleQuestions[Math.floor(Math.random() * this.state.possibleQuestions.length)].hint })

                    }
                }
                )
                // .then(function () { console.log(deck); return deck; })
                .catch(err => console.log(err));
        }
    }
    // console.log("length", this.state.possibleQuestions.length);


    randomQuestion = () => {

        // console.log(this.state.possibleQuestions.length)

        // console.log(Math.floor(Math.random()* this.state.possibleQuestions.length))
        return <div><Stack classes="session-question card5">{this.state.question}</Stack></div>
    }

    render() {
        return (
            <div>
                <Container classes="boo">
                <Row></Row>
                <Row>

                    <Col s={2} offset="s2">
                        <IconBtn classes="iconwhite">view_module</IconBtn>
                    </Col>
                </Row>
                    <Row>
                        <Col m={6} s={12} offset="m3">
                            {this.randomQuestion()}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PracticeSession;
