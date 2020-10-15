import './Buttons.css'
import React, { useState, useEffect } from 'react';

let seconds = 0;
var timer = 0;

let setClock = () => {
    seconds = seconds + 1;
    document.getElementById("timerValue").innerHTML = seconds;
}
const Buttons2 = () => {

    // let [seconds, setTimer] = useState(0);
    return (
        <div>
            <div id="timerValue" className="Box">
                {seconds}
        </div>
            <div>
                <button id="reset" className="ResetButton" 
                    onClick={() => {
                        clearInterval(timer);
                        document.getElementById("timerValue").innerHTML = 0;
                    }}
                >
                    Reset
                </button>
            </div>
            <div>
                <button id="stop" className="StartStopButton"
                    onClick={() => {
                        clearInterval(timer);
                    }}
                >
                    Pause
                </button>
            </div>
            <div>
                <button id="start" className="StartStopButton"
                    onClick={() => {
                        // window.setInterval(setClock, 1000);
                        timer = setInterval(setClock, 1000);
                    }}
                >
                    Start
                </button>
            </div>
        </div>

    );

};

export default Buttons2;