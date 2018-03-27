import React, { Component } from "react";
import Container from "../../components/Container";
import { Row, Input } from "react-materialize";
import Nav from "../../components/Nav";

class PracticeSetup extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Container>
                    <Row>
                        <Input placeholder="Placeholder" s={6} label="First Name" />
                        <Input s={6} label="Last Name" />
                        <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
                        <Input type="password" label="password" s={12} />
                        <Input type="email" label="Email" s={12} />
                    </Row>
                    <Row>
                        <Input name='group1' type='checkbox' value='red' label='Red' />
                    </Row>
<Row>
    Include Decks:
    </Row>
                    <Row>
                        <Input name='group1' type='checkbox' value='red' label='Deck A' />
                    </Row>
                </Container>
            </div>
        );
    }
}

export default PracticeSetup;
