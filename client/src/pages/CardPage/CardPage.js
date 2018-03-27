import React, { Component } from "react";
import Deck from "../../components/Deck"
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
        question: []
    }

    componentDidMount() {
        this.loadQCard(this.state.questionid);
        // console.log(window.location.pathname.split("/").pop());
        console.log(this.state.questionid);
    }

    loadQCard = (questionid) => {
        API.getQuestion(questionid)
            .then(res => (this.setState({ question: res.data }))
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Nav />
                <Container>
                    <Row>
                       
                    </Row> 
                    <Row> <Col s={1} offset="s8" className='grid-example'>                    <IconBtn icon="autorenew">autorenew</IconBtn>
                        </Col>
                        {/* <p>{this.state.question.map(obj=>(obj.question))}</p> */}
                        <Card cardText={this.state.question.map(obj => (obj.question))}></Card>
                        {/* <Link to="/decks"> */}
                        {/* </Link> */}
                    </Row>
                    <Row>
                    

                        {/* <IconBtn >autorenew</IconBtn> */}
                        {/* <Card cardText="hi"></Card> */}
                    </Row>
                </Container>
            </div>
        )
    }
}
export default CardPage;
