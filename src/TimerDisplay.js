import './TimerDisplay.css'
import React from 'react';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo, faPlay, faPause, faStop} from '@fortawesome/fontawesome-free-solid'
// import 'font-awesome/css/font-awesome.min.css';

import useTimerHook from './useTimerHook'

const TimerDisplay = () => {

    let {startTimer, stopTimer, resetTimer, second}  = useTimerHook();

    return (
        <div>
            <div id="timerValue" className="DisplayBox">
                <h1 class="CountPadding">{second}</h1>
            </div>
            <div className="Box2">
                <div>
                    <button id="reset" className="ResetTimerButton"
                        onClick={() => {
                            resetTimer();
                        }}
                    >
                        {/* Reset */}
                        {/* <i class="fas fa-undo"></i> */}
                        <FontAwesomeIcon icon={faUndo}/>
                    </button>
                </div>
                <div>
                    <button id="stop" className="StartStopTimerButton"
                        onClick={() => {
                            stopTimer();
                        }}
                    >
                        {/* Pause */}
                        <FontAwesomeIcon icon={faStop} color="black"/>
                </button>
                </div>
                <div>
                    <button id="start" className="StartStopTimerButton"
                        onClick={() => {
                            startTimer();
                            // useTimerHook.start
                        }}
                    >
                        {/* Start */}
                        {/* <i class="fas fa-play"></i> */}
                        <FontAwesomeIcon icon={faPlay} color="black"/>
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
}

export default TimerDisplay;