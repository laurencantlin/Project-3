import React, { Component } from "react";
import List from "../../components/List"
import Container from "../../components/Container"
import Table from "../../components/Table"
import API from "../../utils/API";
// import { CollectionItem, Badge } from "react-materialize";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";

class Questions extends Component {

    state = {
        deck: window.location.pathname.split("/").pop().split("%20").join(" "),
        questions: [],
        newQuestion: ""
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
    onAddQuestion = (event) => {
        API.newQuestion(this.state.newQuestion)
            .then(res => this.loadDeckQuestions(this.state.deck))
            // .then(res=> this.event.value="")
            .catch(err => console.log(err));
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            newQuestion: {
                question: value,
                in_deck: this.state.deck,
                in_category: "Default"
            }
        });
    };
    render() {
        return (
            <div>
                <Nav />
                <section className="section">
                    <div className="container">

                        <h3 className=" is-1 title">{this.state.deck}</h3>

                    </div>
                </section>
                <Container classes="container">
                    <div className="columns is-centered">
                        <div className="column is-10 ">
                            <div className="field has-addons">
                                <div className="control">
                                    <input className="input" type="text" placeholder="Find a repository" onChange={this.handleInputChange} />
                                </div>
                                <div className="control">
                                    <a className="button is-info" onClick={this.onAddQuestion} >
                                        Search
    </a>
                                </div>
                            </div>
                            <Table>{this.state.questions.map((elem) => (
                                <tr key={elem.id}>
                                    <td>{elem.id}.</td><td key={elem.question}>
                                        <Link className="rowlink" to={`/questioncard/${elem.id}`}>{elem.question}</Link>
                                    </td>
                                    <td><span className="tag is-primary">{elem.in_category}</span>
                                    </td></tr>
                            ))}</Table>


                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Questions;
