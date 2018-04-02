import API from "../../utils/API";
import React, { Component } from "react";
import LoginPanel from "../../components/LoginPanel"

class Login extends Component {
    state = {
        tab: "signin",
        email: "",
        pw: ""
    }
    handleEmailChange = event => {
        const { name, value } = event.target;
        this.setState({
            email: value
        });
    };
    render() {
        return (
            <div>
                <section className="hero is-fullheight is-primary is-bold">
                    <div className="hero-body">
                        <div className="container">

                            <div className="columns is-centered is-multiline">
                                <div className="column has-text-centered is-12 ">
                                    <h1 className="title is-capitalized">
                                        Interview Fiend
                                    </h1>
                                    <br />

                                    {/* <h2 className="subtitle">
                                        Primary bold subtitle
                                    </h2> */}
                                </div>
                                <div className="columns is-centered is-multiline">
                                    <div className="column ">
                                    <LoginPanel />

                                    </div>

                                </div>
                                {/* <div className="column is-three-quarters ">
                                    <section className="section is-light ">

                                        <div className="field ">
                                            <label className="label has-text-white">Email Address: </label>
                                            <div className="field-body">
                                                <div className="field">

                                                    <p className="control has-icons-left has-icons-right">
                                                        <input className="input is-rounded" type="email" placeholder="Email" />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-envelope"></i>
                                                        </span>
                                                        <span className="icon is-small is-right">
                                                            <i className="fas fa-check"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="field ">
                                            <label className="label">From</label>
                                            <div className="field-body">
                                                <div className="field">
                                                    <p className="control has-icons-left">
                                                        <input className="input" type="password" placeholder="Password" />
                                                        <span className="icon is-small is-left">
                                                            <i className="fas fa-lock"></i>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="field is-grouped is-grouped-centered">
                                            <div className="control">
                                                <button className="button ">
                                                    Send message</button>
                                            </div>
                                        </div>

                                    </section>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
export default Login;
