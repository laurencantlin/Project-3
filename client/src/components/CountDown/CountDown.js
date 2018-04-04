import React, { Component } from "react";

import "./CountDown.css"

class CountDown extends React.Component {
    constructor() {
        super();
        this.state = { time: {}, seconds: 3 };
        this.timer = 0;
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
        var min;
        var sec;
        (obj.m < 10) ? min = `0${obj.m}` : `${obj.m}`
            (obj.s < 10) ? sec = `0${obj.s}` : `${obj.s}`

        // var timeDisplay=`${min} : ${sec}`
        // console.log(min, sec,timeDisplay)
        // if (obj.m < 10) {
        var timeDisplay = `${obj.m} : ${obj.s}`
        // }
        return timeDisplay;
    }
    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }
    // startTimer() {
    //     if (this.timer == 0) {
    //         this.timer = setInterval(this.countDown, 1000);
    //     }
    // }

    // resetTimer() {

    // }
    // countDown() {
    //     // Remove one second, set state so a re-render happens.
    //     let seconds = this.state.seconds - 1;
    //     this.setState({
    //         time: this.secondsToTime(seconds),
    //         seconds: seconds,
    //     });

    //     // Check if we're at zero.
    //     if (seconds == 0) {
    //         clearInterval(this.timer);
    //         document.getElementById("start-btn").style.display = "none";

    //     }
    // }

    render(props) {
        return (
            <div className="colums timer is-gapless has-text-darken-1">
                <div className="column">
                    {/* {this.state.time.m} : {this.state.time.s} */}
                    {this.secondsToTime(this.props.time)}
                </div>
                {/* <div className="column start-btn"> */}
                    {/* <button id="start-btn" onClick={this.startTimer}>Start</button> */}
                {/* </div> */}
            </div>
        );
    }
}
export default CountDown;
