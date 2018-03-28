import React, { Component } from "react";
import Stack from "../../components/Stack"
import API from "../../utils/API";
import Container from "react-materialize/lib/Container";
import Nav from "../../components/Nav";
import { Row, Col } from "react-materialize";
import Card from "../../components/Card"
import IconBtn from "../../components/IconBtn"
import { Link } from "react-router-dom";
class CardPage extends Component {
    state = {
        questionid: window.location.pathname.split("/").pop(),
        question: [],
        view: "front"
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
    }
    handleQuestionInputChange = (event) => {
        event.preventDefault();
        console.log(event.target.value, "q inputchange")
        this.setState({ question: event.target.value });

    }
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
                <Col s={1} offset="m3" className='grid-example'>
                    <IconBtn left onClick={this.toggleView} icon="autorenew">view_agenda</IconBtn>
                </Col>
                <Col s={1} offset="s10 m4" className='grid-example'>
                    <IconBtn right onClick={this.flipCard} icon="autorenew">autorenew</IconBtn>
                </Col>
            </div>
        }
        else if (this.state.view === "fullview") {
            console.log("hi")
            return <div>
                <Col s={1} offset="m3" className='grid-example'>
                    <IconBtn left onClick={this.toggleView} icon="autorenew">crop_landscape</IconBtn>
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
                            <IconBtn medium onClick={this.flipCard} icon="">chevron_left</IconBtn>
                        </Col>
                        <Col s={1} offset="s10" className='grid-example'>
                            <IconBtn medium right onClick={this.flipCard} icon="autorenew">chevron_right</IconBtn>
                        </Col>
                    </Row>
                    <Row>
                        {this.renderCardToolIcons()}
                        {this.renderCard()}
                    </Row>
                    <Row>

                    </Row>
                </Container>
            </div>
        )
    }
}
export default CardPage;
