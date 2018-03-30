import React, { Component } from "react";

import { Row, Col , Button} from "react-materialize";

import "./CountDown.css"

class CountDown extends React.Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 120 };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }


    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer == 0) {
            this.timer = setInterval(this.countDown, 1000);
            
        }
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
            document.getElementById("start-btn").style.display ="none";

        }
    }

    render() {
        return (
            <div>

                <Row className="timer has-text-darken-1">
                    <Col m={6} s={12} offset="m3">
                        {this.state.time.m} : {this.state.time.s}
                    </Col>
                </Row>
                <Row className="start-btn">
                <Col m={6} s={12} offset="m3">
                        <Button flat  id="start-btn" onClick={this.startTimer}>Start</Button>
                    </Col>

                </Row>
            </div>
        );
    }
}
export default CountDown;
