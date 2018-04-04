import React, { Component } from "react";
import Container from "../../components/Container"
import Stack from "../../components/Stack"
import IconBtn from "../../components/IconBtn"
import Capture from "../../components/Capture"
// import { Row, Col } from "react-materialize";
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
        in_category: "",
        timer:0,
        secondsLeft: 120
    }

    componentDidMount() {
        let deck = [];
        this.loadDeckQuestions(deck);
        this.startTimer();
    }
    startTimer() {
        if (this.state.timer == 0) {
            this.state.timer= setInterval(() => this.counter(), 1000);
        }
    }

    counter(){
        let secondsLeft = this.state.secondsLeft - 1;
        this.setState({
            secondsLeft: secondsLeft,
        });
        if (this.state.secondsLeft == 0) {
            // clearInterval(this.state.timer);
            this.clickSkipBtn()
            console.log(9)
        }
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
        // console.log(this.state.listLength)
    }
    nextQuestion = () => {
        // console.log(this.state.listLength)
        this.setState({
            question: this.state.possibleQuestions[Math.floor(Math.random() * this.state.listLength)].question,
            answer: this.state.possibleQuestions[Math.floor(Math.random() * this.state.listLength)].answer,
            hint: this.state.possibleQuestions[Math.floor(Math.random() * this.state.listLength)].hint
        })
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
        // evt.preventDefault();
        console.log("skip");
        this.nextQuestion();
        this.setState({secondsLeft:121})
            this.startTimer()
    }
    
    render() {
        return (
            <div className="columns multiline is-centered">
            <div className="column  is-offset-1-mobile is-10-mobile">
                <Container className=" container">
                    <div className="columns level-item  ">
                        <div className="column is-full-mobile  is-one-third-desktop">
                            <IconBtn spanclasses="icon is-large" icon="fas fa-lg	fa-arrow-left" datatip="Back" place="bottom"  onClick={this.clickBackIcn}></IconBtn>
                            <IconBtn spanclasses="icon is-large" icon="fas fa-lg	fa-th" flat floating datatip="Decks" onClick={this.clickViewModuleIcn}></IconBtn>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column has-text-centered is-half-desktop">
                            <CountDown time={this.state.secondsLeft}/>
                        </div></div>
                    <div className="columns is-centered">
                        <div className="column  has-text-centered is-one-third-desktop">
                            {this.randomQuestion()}
                            <Stack className="session-question card5">{this.state.question}</Stack>
                        </div></div>
                    <div className="columns level-item is-centered">
                        <div className="column has-text-centered">
                        <button onClick={this.clickSkipBtn} className="button is-primary">Next Question</button>
 
                            {/* <IconBtn onClick={this.clickSkipBtn} spanclasses="has-text-danger icon is-large" icon="fa fa-3x fa-times-circle" datatip="Skip" place="top"></IconBtn>
                            <IconBtn spanclasses="icon is-large has-text-primary"  icon="fas fa-3x	fa-check-circle" onClick={this.clickCheckBtn} datatip="Next Question" place="top" /> */}
                        </div>
                    </div>
                    <div className="columns  is-centered">
                        <div className="column  is-half-desktop">
                        <Capture props="hi"/>
                        </div>
                        </div>
                </Container>
            </div>
            </div>
        );
    }
}

export default PracticeSession;
