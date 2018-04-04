import React, { Component } from "react";


class LoginPanel extends React.Component {
    constructor() {
        super();
        this.state = { tab: "signin", email: "", pw: "" , pw2:""};
        // this.renderTabs = this.renderTabs.bind(this);
        this.clickSignin = this.clickSignin.bind(this);
        this.clickSignup = this.clickSignup.bind(this);
        this.render = this.render.bind(this);
    }

    renderTabs = (props) => {
        if (this.state.tab === "signin") {
            return (<div> <div>
                <div className="tabs is-toggle is-fullwidth is-centered">
                    <ul>
                        <li className="is-active" onClick={this.clickSignin}> <a>Login</a></li>
                        <li onClick={this.clickSignup}><a>Signup</a></li>

                    </ul>
                </div>
                <section className="section loginpanel">
                    <div className="field ">
                        <label className="label has-text-white">Email Address: </label>
                        <div className="field-body">
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input is-rounded" type="email" placeholder="Email" onChange={this.props.handleEmailChange}/>
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
                        <label className="label has-text-light">Password:</label>
                        <div className="field-body">
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input is-rounded" type="password" placeholder="Password" onChange={this.props.handlePWChange} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                                <br />
                            </div>
                        </div>

                    </div>
                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <button className="button is-primary is-inverted is-large " onClick={this.props.onClickLogin}>
                                Login</button>
                        </div>
                    </div>

                </section>                </div>

            </div>)
        }
        if (this.state.tab === "signup") {
            return (<div>  <div>
                <div className="tabs  is-toggle is-fullwidth is-centered">
                    <ul>
                        <li onClick={this.clickSignin}> <a>Signin</a></li>
                        <li className="is-active" onClick={this.clickSignup}><a>Signup</a></li>

                    </ul>
                </div>
                <section className="section loginpanel">
                    <div className="field ">
                        <label className="label has-text-white">Email Address: </label>
                        <div className="field-body">
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input is-rounded" type="email" placeholder="Email" onChange={this.props.handleEmailChange} />
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
                        <label className="label has-text-light">Password:</label>
                        <div className="field-body">
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input is-rounded" type="password" placeholder="Password" onChange={this.props.handlePWChange} />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="field ">
                        <label className="label has-text-light">Retype Password:</label>
                        <div className="field-body">
                            <div className="field">
                                <p className="control has-icons-left">
                                    <input className="input is-rounded" type="password" placeholder="Password" onChange={this.props.handlePW2Change}  />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-lock"></i>
                                    </span>
                                </p>                                <br />

                            </div>
                        </div>

                    </div>
                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <button className="button is-primary is-inverted is-large " onClick={this.props.onClickSignup}>
                                Sign Up!</button>
                        </div>
                    </div>

                </section>
            </div>
            </div>)
        }
    }
    clickSignin = () => {
        console.log("signin", this.state)
        this.setState({ tab: "signin" })
    }
    clickSignup = () => {
        console.log("signup", this.state)
        this.setState({ tab: "signup" })
    }

    clickLoginBtn = () => {
        console.log("login")
    }
    clickSignupBtn = () => {
        console.log("signup btn", this.state)
        if(this.state.pw===this.state.pw2){
            console.log("pw match")
        }
    }
    render() {
        return (
            <div>
                {this.renderTabs()}
            </div>
        )
    }
}
export default LoginPanel;
