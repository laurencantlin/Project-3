import React, { Component } from "react";
import Stack from "../../components/Stack"
import API from "../../utils/API";
import Container from "../../components/Container";
import Toast from "../../components/Toast";
import Nav from "../../components/Nav";
// import { Toast } from "react-materialize";
import Card from "../../components/Card"
import IconBtn from "../../components/IconBtn"
import { Link } from "react-router-dom";
class CardPage extends Component {
    state = {
        questionid: window.location.pathname.split("/").pop(),
        question: "",
        view: "front",
        toast: "hide"
        // updatedQuestion: { answer: "", question: "" }
    }

    componentDidMount() {
        this.loadQCard(this.state.questionid);
        console.log(this.state.questionid);
    }

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
                this.setState({toast:"show"});
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

    renderCard = () => {
        if (this.state.view === "front") {
            return <div className="column is-5"><Card cardText={this.state.question} handleInputChange={this.handleQuestionInputChange}></Card></div>
        }

        else if (this.state.view === "back") {
            return <div className="column is-5"><Card cardText={this.state.answer} handleInputChange={this.handleAnswerInputChange}></Card></div>
        }
        else if (this.state.view === "fullview") {
            return <div className="column is-5">
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

                <div className="column is-clearfix is-centered is-4">
                    <IconBtn flat level="level-left" spanclasses="has-text-dark icon is-medium " icon="fas fa-lg fa-pause" rotate="rotate-90" large onClick={this.toggleView} ></IconBtn>

                </div>
                <div className="column is-centered is-1">
                    <IconBtn onClick={this.flipCard} level="level-right" spanclasses="has-text-dark icon is-medium" icon="fas fa-lg fa-retweet" ></IconBtn>
                </div>
                <div className="column is-centered auto">

                    {/* <Toast /> */}
                </div>
            </div>

        }
        else if (this.state.view === "fullview") {
            console.log("hi")
            return <div className="columns level is-centered">

                <div className="column is-5">
                    <IconBtn level="level-left" spanclasses="has-text-dark icon is-medium" icon="fas fa-lg fa-pause" rotate="rotate-90" large onClick={this.toggleView} ></IconBtn>

                </div>
            </div>
        }
    }
    renderToast = () => {
        if(this.state.toast==="show"){
            
        return (
            <Toast className="notification toast is-dark play"></Toast>
        )}
    }

    render() {
        return (
            <div className="has-text-centered">
                <Nav />
                {/* <Toast/> */}
                {this.renderToast()}

                <Container>
                    <br />

                    {this.renderCardToolIcons()}

                    {/* {this.renderToast()} */}


                    {/* <div className="level-item "> */}
                    {/* </div>                    {this.renderToast()} */}

                    <div className="columns  is-clearfix is-centered">
                        {this.renderCard()}

                    </div>
                    <br />
                    <div className="columns level is-centered is-5">

                        <div className="column is-3">
                            <span onClick={this.onSaveChanges} className="button  level-item is-primary">          Save Changes
                            </span>

                        </div>
                    </div>
                    <div className="columns level is-centered is-5">

                    </div>
                </Container>

                {/* <Toast className="notification toast is-dark"></Toast> */}
            </div>
        )
    }
}
export default CardPage;
