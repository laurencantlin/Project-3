import React, { Component } from "react";
import Container from "../../components/Container"
import Stack from "../../components/Stack"
import IconBtn from "../../components/IconBtn"
import { Row, Col } from "react-materialize";
import API from "../../utils/API";


class PracticeSession extends Component {
    state = {
        decks: ["Behavioral Interview Questions", "Coding Problems"],
        possibleQuestions: []
    }

    componentDidMount() {
        this.loadDeckQuestions(this.randomQuestion)
        // this.randomQuestion();

    }

    loadDeckQuestions = (cb) => {

        for (let i = 0; i < this.state.decks.length; i++) {
            // console.log(this.state.decks[i]);
            API.getDeckQuestions(this.state.decks[i])
                .then(res => {console.log(i);(res.data.map(obj => {
                    this.state.possibleQuestions.push(obj);cb();
                })
                )})
                .catch(err => console.log(err));
        }
        // console.log("length", this.state.possibleQuestions.length);
        cb();
    };

    randomQuestion = () => {
        console.log(this.state.possibleQuestions.length)


    }

    render() {
        return (
            <div>
                <Container classes="boo">
                    <IconBtn classes="iconwhite">view_module</IconBtn>
                    <Row>
                        <Col s={6} offset="s3">
                            <Stack />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PracticeSession;
