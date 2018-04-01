import React, { Component } from "react";
import Stack from "../../components/Stack"
import API from "../../utils/API";
import Container from "react-materialize/lib/Container";
import Nav from "../../components/Nav";
import { Row, Col } from "react-materialize";
import Card from "../../components/Card"
import IconBtn from "../../components/IconBtn"
// import { Link } from "react-router-dom";
class CardPage extends Component {
    state = {
        questionid: window.location.pathname.split("/").pop(),
        question: "",
        view: "front",
        updatedQuestion: { answer: "", question: "" }
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
            updatedQuestion: { answer: event.target.value }
        });
    }
    handleQuestionInputChange = (event) => {
        event.preventDefault();
        console.log(event.target.value, "q inputchange")
        this.setState({ question: event.target.value });
        this.setState({
            updatedQuestion: { question: event.target.value }
        });
    }
    onSaveChanges = (event) => {
        event.preventDefault();
        console.log("clicksave")
        API.updateQuestion(this.state.questionid,this.state.updatedQuestion)
            .then(res => this.loadQCard(this.state.questionid))
            // .then(res=> this.event.value="")
            .catch(err => console.log(err));
    };

    toggleView = (event) => {
        event.preventDefault();
        if (this.state.view === "front" || this.state.view === "back") {
            this.setState({ view: "fullview" })
            console.log("bothsides");
            this.renderCardToolIcons();
        }
        else if (this.state.view === "fullview") {
            this.setState({ view: "front" })
            console.log("bothsides");
            this.renderCardToolIcons();
        }
    }

    renderCard = () => {
        if (this.state.view === "front") {
            return <Card cardText={this.state.question} handleInputChange={this.handleQuestionInputChange}></Card>
        }

        else if (this.state.view === "back") {
            return <Card cardText={this.state.answer} handleInputChange={this.handleAnswerInputChange}></Card>
        }
        else if (this.state.view === "fullview") {
            return <div>
                <Card cardText={this.state.question} handleInputChange={this.handleQuestionInputChange}></Card>
                <Card cardText={this.state.answer} handleInputChange={this.handleAnswerInputChange}></Card>
            </div>
        }
    }
    renderCardToolIcons = () => {
        if (this.state.view === "front" || this.state.view === "back") {
            return <div>
                <Col s={2} offset="m3" className='grid-example'>
                    <IconBtn flat spanclasses="has-text-dark icon " icon="fas fa-lg fa-pause" rotate="rotate-90" large onClick={this.toggleView} ></IconBtn>

                </Col>
                <Col s={1} offset="s10 m3" className='grid-example'>
                    <IconBtn onClick={this.flipCard} spanclasses="has-text-dark icon" icon="fas fa-lg fa-retweet" ></IconBtn>
                </Col>
            </div>
        }
        else if (this.state.view === "fullview") {
            console.log("hi")
            return <div>
                <Col s={1} offset="m3" className='grid-example'>
                    <IconBtn flat spanclasses="has-text-dark icon " icon="fas fa-lg fa-pause" rotate="rotate-90" large onClick={this.toggleView} ></IconBtn>

                </Col>
            </div>
        }
    }
    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>

                    </Row>
                    <Row>
                        <Col s={1} className='grid-example'>
                            <IconBtn flat medium onClick={this.flipCard} icon="">chevron_left</IconBtn>
                        </Col>
                        <Col s={1} offset="s10" className='grid-example'>
                            <IconBtn flat medium right onClick={this.flipCard} icon="add">chevron_right</IconBtn>
                        </Col>
                    </Row>
                    <Row>
                        {this.renderCardToolIcons()}
                        {this.renderCard()}
                    </Row>
                    <Row>
                        <div className="is-centered buttons">
                            <span onClick={this.onSaveChanges} className="button is-centered is-primary">Save Changes</span>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default CardPage;
