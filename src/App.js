// Please note, I haven't actually really learned much about react (4 years off raising kids). This project has been bootstrapped using create-react-app to begin. I wrote this in vanilla JS and have attempted to refactor using react. I am sure there is a lot that I can change and I will do so once I learn more about it. Either way, tadaaaaaa. 

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import RotateWheel from './logic/RotateWheel';
import CurrentAnswerDetector from './logic/CurrentAnswerDetector';
import NumberPredictor from './logic/NumberPredictor';
import AccuracyChecker from './logic/AccuracyChecker';

//The complete picture, adding all the components within the full module.
class spinningWheel extends Component {
    render(){
        return(
            <div>
                <Intro/>
                <Wheel/>
            </div>
        )
    }
}

//Wheel Component       
class Wheel extends Component {
    //set initial state
    constructor(props) {
        super(props);
	    this.state = {
    	    initialPrediction: Math.floor(Math.random()*10)+1
        };
    };
	//most of the information I need relies on the markup being ready hence putting it all in componentDidMount(). 
    componentDidMount(){
        //variables. I dunno if this is "old school" but 4 years ago, we used to like to declare all our variables at the top. Attempted some ES6 with the whole const and let thing.
        const el = ReactDOM.findDOMNode(this).getElementsByClassName('wheel-circle')[0];
        const pred = document.getElementsByClassName("predict")[0];
        const acc = document.getElementsByClassName("accuracy")[0];
        let answerArray = [];
        let currentAnswer;
        let mousedownTimestamp;
        let mouseupTimestamp;
        let prediction = this.state.initialPrediction;
        let accuracy = [];
        let selectedList = document.getElementsByTagName("li");
        let predictionList = [];
        //mouseDown or touchdown. I am unsure if this is how I should do it in react since most the examples I have seen show the event within the JSX component. Again one to refactor once I know more about react.
        el.onmousedown = (e => mousedown());
        el.ontouchstart = (e => mousedown());
        //MouseUp. Ditto above.
        el.onmouseup = (e => mouseup());
        el.ontouchend= (e => mouseup());
         //ok so here, I don't want to just use a random value on spin so we will get the difference between the time from the mousedown moment to the mouse up moment and use that for the rotate angle. I suspect handling the events this way defeats the purpose of react but I will revisit once I have time to read up more on react.
        function mousedown(){
	         mousedownTimestamp = new Date();
        }
        function mouseup(){
            mouseupTimestamp = new Date();
            let difference = mouseupTimestamp - mousedownTimestamp;
            //rotates the wheel (chrome only)
            RotateWheel(difference, el);
            //works out result 
            CurrentAnswerDetector(difference, currentAnswer, selectedList, answerArray);
            //number predictor
            NumberPredictor(prediction, answerArray, predictionList, answerArray, pred);  
            //accuray checker
            AccuracyChecker(currentAnswer, acc, predictionList, answerArray, accuracy);
        }
        // once dom is ready, an initial prediction is made and displayed randomly.
        pred.innerHTML = this.state.initialPrediction;
        predictionList.push(this.state.initialPrediction);           
    }
    //\\component did mount
    
    //render component     
    render() {
        return (
            <div id="wheel">
                <div className="wheel-circle">
                    <ul>
                        <li data-value="3" data-start="1"><span>3</span></li>
                        <li data-value="6" data-start="2"><span>6</span></li>
                        <li data-value="1" data-start="3"><span>1</span></li>
                        <li data-value="10" data-start="4"><span>10</span></li>
                        <li data-value="9" data-start="5"><span>9</span></li>
                        <li data-value="2" data-start="6"><span>2</span></li>
                        <li data-value="8" data-start="7"><span>8</span></li>
                        <li data-value="7" data-start="8"><span>7</span></li>
                        <li data-value="5" data-start="9"><span>5</span></li>
                        <li data-value="4" data-start="10"><span>4</span></li>
                    </ul>
                </div>
                <div className="pointer">
                </div>
                <Scores/>  
            </div>
        );
        
        //\\render
    }
}
//\\wheel Component


//Introduction component
class Intro extends Component {
    render(){
        return (
            <div className="intro">
                <div className="error"></div>
                <h1>Spinning Wheel</h1>
                <div className="instructions">
	                <p>If on <span className="imp">desktop</span>, click the wheel to spin it. Hold down your click for as long or as short as you want for different spin speed</p>
	                <p>On <span className="imp">mobile</span>, spin the wheel by using your finger to drag it from left to right (do not tap, swipe)</p>
	                <p><a href="https://github.com/blakkat/spinningwheel" target="_blank" rel="noopener noreferrer">See source on Git</a></p>
                </div>
            </div>
        )
    }
}

//Scores Component
class Scores extends Component {  
    render(){
        return(
            <div className="score">
                <h3>Next Number Prediction *drumroll*</h3>
                <span className="predict"></span>
                <h3>Recent Answers</h3>
                <span className="prevans"></span>
                <h3>Prediction Accuracy - </h3>
                <span className="accuracy"></span>
            </div>
        )
    }
}



export default spinningWheel;

