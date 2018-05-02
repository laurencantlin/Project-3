import React, { Component } from "react";
import List from "../../components/List"
import Table from "../../components/Table"

import Sidenav from "../../components/sidenav"
import Stack from "../../components/Stack"
import API from "../../utils/API";
import Container from "../../components/Container";
import Toast from "../../components/Toast";
import Nav from "../../components/Nav";
// import { Toast } from "react-materialize";
import Card from "../../components/Card"
import IconBtn from "../../components/IconBtn"
import { Link } from "react-router-dom";
class splitview extends Component {
    state = {
        deck: window.location.pathname.split("/").pop().split("%20").join(" "),
        questionid: window.location.pathname.split("/").pop(),
        question: "",
        questions: [],
        view: "fullview",
        toast: "hide"
        // updatedQuestion: { answer: "", question: "" }
    }

    componentDidMount() {
        this.loadQCard(this.state.questionid);
        console.log(this.state.questionid);
        this.loadDeckQuestions(this.state.deck);

    }
    loadDeckQuestions = (deckname) => {
        API.getDeckQuestions(deckname)
            .then(res => (this.setState({ questions: res.data }))
            )
            .catch(err => console.log(err));
    };
    loadQCard = (questionid) => {


        API.getQuestion(questionid)
            .then(res => (this.setState({ question: res.data[0].question, answer: res.data[0].answer }))
            )
            .catch(err => console.log(err));
    };
    flipCard = (event) => {
        event.preventDefault();
        if (this.state.view === "front") {
            this.setState({ view: "back" })
            console.log("flipped to back")
            this.renderCard();
        }
        else if (this.state.view === "back") {
            this.setState({ view: "front" })
            console.log("flipped to front")
            this.renderCard();

        }
    }
    handleAnswerInputChange = (event) => {
        event.preventDefault();
        console.log(event.target.value, "ans inputchange")
        this.setState({ answer: event.target.value });
        this.setState({
            updatedQuestion: { question: this.state.question, answer: event.target.value }
        });

    }
    handleQuestionInputChange = (event) => {
        event.preventDefault();
        console.log(event.target.value, "q inputchange")
        this.setState({ question: event.target.value });
        this.setState({
            updatedQuestion: { question: event.target.value, answer: this.state.answer }
        });
    }
    onSaveChanges = (event) => {
        event.preventDefault();
        console.log(event)
        if (this.state.question === "") {

        }
        if (this.state.updatedQuestion && this.state.question !== "") {
            console.log("true")
            API.updateQuestion(this.state.questionid, this.state.updatedQuestion)
                .then(res => this.loadQCard(this.state.questionid))
                // .then(res=> this.event.value="")
                .catch(err => console.log(err));
            this.setState({ toast: "show" });
        }

    };

    toggleView = (event) => {
        event.preventDefault();
        if (this.state.view === "front" || this.state.view === "back") {
            this.setState({ view: "fullview" })
            console.log("bothsides");
            // this.renderCardToolIcons();
        }
        else if (this.state.view === "fullview") {
            this.setState({ view: "front" })
            console.log("bothsides");
            this.renderCardToolIcons();
        }
    }
    nextCard = () => {
        let next = this.state.questionid + 1
        window.location.href = (`/questioncard/${next}`)
    }
    backCard = () => { }
    renderCard = () => {
        if (this.state.view === "front") {
            return <div className="column is-10"><Card cardText={this.state.question} handleInputChange={this.handleQuestionInputChange}></Card></div>
        }

        else if (this.state.view === "back") {
            if (this.state.answer === null) { return <div className="column is-10"><Card cardText="" handleInputChange={this.handleAnswerInputChange}></Card></div> }
            else {
                return <div className="column is-5"><Card cardText={this.state.answer} handleInputChange={this.handleAnswerInputChange}></Card></div>
            }
        }
        else if (this.state.view === "fullview") {
            return <div className="column is-10">
                <Card cardText={this.state.question} handleInputChange={this.handleQuestionInputChange}></Card>

                <br />
                <Card cardText={this.state.answer} handleInputChange={this.handleAnswerInputChange}></Card>
            </div>
        }
        //    </div> }
    }

    renderCardToolIcons = () => {
        if (this.state.view === "front" || this.state.view === "back") {
            return <div className="columns level-item is-centered">

                <div className="column is-centered auto">
                </div>

                <div className="column is-clearfix is-centered is-9">

                    <a className="level-left"><span onClick={this.toggleView} className="has-text-dark"><i className="material-icons" >view_agenda</i></span></a>
                    {/* <IconBtn level="level-left" spanclasses="has-text-dark icon is-medium" icon="fas fa-lg fa-columns" rotate="rotate-90" large onClick={this.toggleView} ></IconBtn> */}

                </div>
                <div className="column is-centered is-1">
                    <IconBtn onClick={this.flipCard} level="level-right" spanclasses="has-text-dark icon is-medium" icon="fas fa-lg fa-retweet" ></IconBtn>
                </div>
                <div className="column is-centered auto">
                </div>
            </div>

        }
        else if (this.state.view === "fullview") {
            console.log("hi")
            return <div className="columns level is-centered">
                <div className="column is-10">
                    <a className="level-left"><span onClick={this.toggleView} className="has-text-dark"><i className="material-icons" >crop_landscape</i></span></a>
                    {/* <IconBtn level="level-left" spanclasses="has-text-dark icon is-medium" icon="fas fa-lg fa-square" rotate="rotate-180"  onClick={this.toggleView} >
                    </IconBtn> */}

                </div>
            </div>
        }
    }
    renderToast = () => {
        if (this.state.toast === "show") {

            return (
                <Toast className="notification toast is-dark play"></Toast>
            )
        }
    }

    render() {
        return (
            <div className="has-text-centered">
                <Nav />
                {/* <Toast/> */}
                {/* {this.renderToast()} */}
                {/* <Container> */}
                <div className="columns">
                    <div className="column has-text-left is-two-fifths">
                        <Sidenav >
                            {this.state.questions.map((elem) => (
                                <label className="panel-block">
                                    <div className="columns has-text-left">

                                        <div className="column is-1">                                   <input type="checkbox" />
                                        </div>

                                        <div className="column is-10">
                                            {elem.question}
                                        </div>
                                        <div className="column is-1">
                                        <span className="panel-icon ">
                                        <i className="fas fa-book" aria-hidden="true"></i>
                                    </span>
                                        </div>
                                    </div>
                                   

                                </label>
                            ))}
                        </Sidenav>


                    </div>
                    <div className="column ">

                        <br />

                        {this.renderCardToolIcons()}
                        <div className="columns  is-clearfix is-centered">
                            {this.renderCard()}

                        </div>
                        <br />
                        <div className="columns level is-centered is-5">
                            <IconBtn spanclasses="icon is-large" icon="fas fa-lg	fa-arrow-left" datatip="Back" place="bottom" onClick={this.backCard}></IconBtn>
                            <div className="column is-3">
                                <span onClick={this.onSaveChanges} className="button  level-item is-primary">          Save Changes
                            </span>

                            </div>

                            <IconBtn spanclasses="icon is-large" icon="fas fa-lg	fa-arrow-right" datatip="Back" place="bottom" onClick={this.nextCard}></IconBtn>
                        </div>
                        <div className="columns level is-centered is-5">

                        </div>
                    </div>


                </div>

                {/* </Container> */}

                {/* <Toast className="notification toast is-dark"></Toast> */}
            </div>
        )
    }
}
export default splitview;
