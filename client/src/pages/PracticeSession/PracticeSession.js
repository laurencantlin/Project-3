import React, { Component } from "react";
import Container from "../../components/Container"
import Stack from "../../components/Stack"
import IconBtn from "../../components/IconBtn"
import { Row, Col, Button, Icon } from "react-materialize";
import API from "../../utils/API";
import { Link } from "react-router-dom";

import CountDown from "../../components/CountDown";

class PracticeSession extends Component {
    state = {
        decks: ["Behavioral Interview Questions", "Coding Problems"],
        // possibleQuestionsLength:
        possibleQuestions: [],
        listLength: 0,
        question: "",
        answer: "",
        hint: "",
        in_deck: "",
        in_category: ""

    }

    componentDidMount() {
        let deck = [];
        this.loadDeckQuestions(deck);
    }


    loadDeckQuestions = (deck) => {
        for (let i = 0; i < this.state.decks.length; i++) {
            API.getDeckQuestions(this.state.decks[i])
                .then(res => {
                    deck = [...deck, ...res.data];
                    if (i === this.state.decks.length - 1) {
                        this.setState({ possibleQuestions: [...deck] })
                        this.setState({
                            listLength: this.state.possibleQuestions.length,
                            question: this.state.possibleQuestions[Math.floor(Math.random() * this.state.possibleQuestions.length)].question,
                            answer: this.state.possibleQuestions[Math.floor(Math.random() * this.state.possibleQuestions.length)].answer,
                            hint: this.state.possibleQuestions[Math.floor(Math.random() * this.state.possibleQuestions.length)].hint
                        })
                    }
                })
                .catch(err => console.log(err));
        }
    }
    randomQuestion = () => {
        console.log(this.state.listLength)

        // return <div><Stack classes="session-question card5">{this.state.question}</Stack></div>
    }
    nextQuestion = () => {
        // console.log(this.state.listLength)
        this.setState({
            question: this.state.possibleQuestions[Math.floor(Math.random() * this.state.listLength)].question,
            answer: this.state.possibleQuestions[Math.floor(Math.random() * this.state.listLength)].answer,
            hint: this.state.possibleQuestions[Math.floor(Math.random() * this.state.listLength)].hint
        })
        // return <div>
        //     <Link to="/decks" className="stacklink">
        //         <Stack className="card5">{this.state.question}</Stack>
        //     </Link>
        // </div>
    }
    clickViewModuleIcn = (event) => {
        event.preventDefault();
        window.location.href = ("/decks")
        console.log("clickviewmodule")
    }
    clickBackIcn = (event) => {
        event.preventDefault();
        window.history.back();
    }
    clickCheckBtn = (evt) => {
        evt.preventDefault();
        console.log("Next");
        this.nextQuestion();
    }

    clickSkipBtn = (evt) => {
        evt.preventDefault();
        console.log("skip");
        this.nextQuestion();
    }

    render() {
        return (
            <div>
                <Container classes="boo">
                    <Row></Row>
                    <Row>
                        <Col s={1} offset="s2">
                            <IconBtn spanclasses="icon is-medium" icon="fas fa-lg	fa-arrow-left" datatip="Back" place="bottom" flat floating onClick={this.clickBackIcn}></IconBtn>
                        </Col>

                        <Col s={1}>
                            <IconBtn spanclasses="icon is-medium" icon="fas fa-lg	fa-th" flat floating datatip="Decks" onClick={this.clickBackIcn}></IconBtn>
                        </Col>
                    </Row>

                    <Row>
                        <Col m={6} s={12} offset="m3">
                            <CountDown />                        </Col>
                    </Row>
                    <Row>
                        <Col m={6} s={12} offset="m3">
                            {this.randomQuestion()}
                            {/* <Link to="/decks" className="stacklink"> */}
                                <Stack className="session-question card5">{this.state.question}</Stack>
                            {/* </Link> */}
                        </Col>
                    </Row>
                    <Row>
                        <Col s={1} offset="s5">
                            <IconBtn floating onClick={this.clickSkipBtn} spanclasses="has-text-danger icon is-large" icon="fa fa-3x	fa-times-circle"  datatip="Skip" place="top"></IconBtn>
                        </Col>
                        <Col s={1} >
                            <IconBtn floating spanclasses="icon is-large has-text-primary" icon="fas fa-3x	fa-check-circle"  onClick={this.clickCheckBtn} datatip="Next Question" place="top" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PracticeSession;
