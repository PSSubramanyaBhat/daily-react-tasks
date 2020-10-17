import './Buttons.css';
import './App.css';
import React, { useState, useEffect } from 'react';

var timer = 0;
const Buttons = () => {

    let [second, setTimer] = useState(0);

    return (
        <div>
            <div id="timerValue" className="Box">
                {second}
            </div>
            <div className="Box2">
                <div>
                    <button id="reset" className="ResetButton"
                        onClick={() => {
                            clearInterval(timer);
                            setTimer(0);
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
                            // timer = setInterval(setClock, 1000);  //worked

                            timer = setInterval(() => {
                                setTimer(second => second + 1);
                            }, 1000);
                        }}
                    >
                        Start
                </button>
                </div>
            </div>
            <div class="clr"> </div>
            <div>
                <h3 className="FooterTitleDesign">
                    This is a simple Timer Application
                </h3>
            </div>
        </div>

    );

};

export default Buttons;