import React, { Component } from "react";

import "./Capture.css"

class Capture extends React.Component {
    constructor() {
        super();
        this.state = { recording: false, mediaStream: {} };
        // this.renderTabs = this.renderTabs.bind(this);
        this.clickRecord = this.clickRecord.bind(this);
        // this.stopRecord = this.stopRecord.bind(this);
        this.render = this.render.bind(this);
    }
    componentDidMount() {
        console.log(this)
        document.getElementById('stop-btn').setAttribute('disabled', '')
        this.detectCamera();
        this.getMedia();
    }
    detectCamera = () => {
        function hasGetUserMedia() {
            console.log(navigator.mediaDevices, "hi", navigator.mediaDevices.getUserMedia)
            return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
        }
        if (hasGetUserMedia()) {
            // Good to go!
        } else {
            alert('getUserMedia() is not supported by your browser');
        }
    }
    getMedia = () => {
        navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 }, audio: {latency:0.005804988662131519, sampleRate:
            44100, channelCount:2, autoGainControl: true, echoCancellation:true,


        } }).
            then(this.handleSuccess).catch(this.handleError);
        // console.log(stream, audioCtx)
    }
    handleError = (error) => {
        console.error('Error: ', error);
    }
    handleSuccess = (stream) => {
        var mainSection = document.querySelector('.main-controls');

        // var canvas = document.querySelector('.visualizer');

        var audioCtx = new (window.AudioContext)();
        // var canvasCtx = canvas.getContext("2d");
        var source = audioCtx.createMediaStreamSource(stream);
        var analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);

        var source = audioCtx.createMediaStreamSource(stream);

        var analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);

        var video = document.querySelector('#screenshot-video');
        source.connect(analyser);
        video.srcObject = stream
        source.connect(analyser);
        console.log(audioCtx)
        console.log(dataArray)
        console.log(analyser)
        var video = document.querySelector('#screenshot-video');
        video.srcObject = stream;
        this.setState({ src: video.src, stream: stream })
        console.log(stream)
        // this.clickRecord()

    }
    visualize = (stream, audioCtx) => {
        var source = audioCtx.createMediaStreamSource(stream);

        var analyser = audioCtx.createAnalyser();
        analyser.fftSize = 2048;
        var bufferLength = analyser.frequencyBinCount;
        var dataArray = new Uint8Array(bufferLength);

        var video = document.querySelector('#screenshot-video');
        source.connect(analyser);
        video.srcObject = stream
        //analyser.connect(audioCtx.destination);
        // var video = document.querySelector('#screenshot-video');
        // video.srcObject = stream;
        // draw()

        // function draw() {
        //     var canvas = document.querySelector('#screenshot-video');
        //     var WIDTH = canvas.width
        //     var HEIGHT = canvas.height;

        //     requestAnimationFrame(draw);

        //     analyser.getByteTimeDomainData(dataArray);

        //     canvasCtx.fillStyle = 'rgb(200, 200, 200)';
        //     canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

        //     canvasCtx.lineWidth = 2;
        //     canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

        //     canvasCtx.beginPath();

        //     var sliceWidth = WIDTH * 1.0 / bufferLength;
        //     var x = 0;


        //     for (var i = 0; i < bufferLength; i++) {

        //         var v = dataArray[i] / 128.0;
        //         var y = v * HEIGHT / 2;

        //         if (i === 0) {
        //             canvasCtx.moveTo(x, y);
        //         } else {
        //             canvasCtx.lineTo(x, y);
        //         }

        //         x += sliceWidth;
        //     }

        //     canvasCtx.lineTo(canvas.width, canvas.height / 2);
        //     canvasCtx.stroke();

        // }
    }



    clickRecord = () => {

        // console.log(this.newMedia())
        var mediaRecorder = new MediaRecorder(this.state.stream);
        mediaRecorder.start();
        let chunks = [];
        mediaRecorder.ondataavailable = function (e) {
            chunks.push(e.data)
        }
        this.setState({ recording: true })
        console.log(this.state.recording)

        var videoURL;
        var video = document.querySelector('#screenshot-video');
        this.setState({ src: video.src, chunks: chunks, mediaRecorder: mediaRecorder })
        mediaRecorder.onstop = function (e) {
            var video = document.querySelector('#hi');
            var recording = document.createElement('video');
            recording.setAttribute('controls', '');
            var blob = new Blob(chunks, { 'type': 'video/ogg; codecs=opus' });
            chunks = []
            videoURL = window.URL.createObjectURL(blob);
            video.src = videoURL;
            var render = document.querySelector('#hi');
        }
        document.getElementById('stop-btn').removeAttribute('disabled');
        // this.renderVideoBtns();

    }
    stopRecord = (e) => {
        e.preventDefault()
        var videoURL;
        // this.setState({ recording: false })
        document.getElementById('stop-btn').setAttribute('disabled', '');

        var mediaRecorder = this.state.mediaRecorder
        var video = document.getElementById('screenshot-video');
        mediaRecorder.requestData()
        // console.log(mediaRecorder.requestData)
        mediaRecorder.stop();
        var chunks = this.state.chunks
        console.log(video.getAttribute("src"))
        // console.log(video.attributes.src)

        this.setState({ mediaRecorder: mediaRecorder })

        var video = document.querySelector('#hi');
        video.src = video.getAttribute("src");
        video.setAttribute('controls', '');

        console.log(this.state.recording)
        // this.renderVideoBtns();

    }
    renderVideoBtns = () => {
        // document.getElementById('stop-btn').setAttribute('disabled', '')
        return (<div className="columns ">
            <div className="column is-half is-grouped field  ">
                <button className="button is-inverted has-text-centered is-danger control is-expanded " onClick={this.clickRecord}>Record</button>
            </div>
            <div className="column is-half is-grouped field ">
                <button className="button has-text-centered control is-expanded is-danger " id="stop-btn" onClick={this.stopRecord}>Stop</button>
            </div>
        </div >)
    }
    render(props) {
        return (
            <div className="columns level is-centered is-multiline" id="capture">
                <div className="column auto">

                </div>
                <div className="column is-8">
                    <video autoPlay id="screenshot-video"></video>
                    <img src="" />
                </div>
                <div className="column auto">

                </div>
                <div className="column is-8">
                    {this.renderVideoBtns()}
                </div>
                {/* <div className="field columns is-grouped"> */}
                {/* <p className="control is-expanded">              */}
                <div className="column  is-full">
                    <video className=" " id="hi" ></video>
                </div>
                {/* </p> */}
                {/* </div> */}
            </div>

        );
    }
}
export default Capture;
