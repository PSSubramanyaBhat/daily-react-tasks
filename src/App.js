import './App.css';
import Counter from './Counter';
// import RegistrationSamplePage from './RegistrationSamplePage';
import React from 'react';
import TimerDisplay from './TimerDisplay';
import FormUI from './FormUI';
import Buttons from './Buttons';
import { readFromStorage, writeToStorage } from './LocalStorage';

const COUNTER_DISPLAYED = 'countTag';

function disableClearbutton() {
    document.getElementById("clear").disabled = true;
}

function enableClearbutton() {
    document.getElementById("clear").disabled = false;
}

function App() {
    // let [counter, setCounter] = React.useState(JSON.parse(localStorage.getItem("countVal")) || 0);
    let [counter, setCounter] = React.useState(readFromStorage("countVal") || 0);

    let [flag, setFlag] = React.useState(() => {
        const flagFromStorage = readFromStorage(COUNTER_DISPLAYED);
        if (flagFromStorage == undefined) {
            return true;
        } else {
            return flagFromStorage;
        }
    });
    return (

        // <Counter />
        //Working Counter Program From Here.....
        /*
        <div className="App">
            {flag && (
                <Counter
                    // upperLimit={20} lowerLimit={0} counterBase={5}
                    counterCallback={(count) => {
                        counter = count;
                        setCounter(count);
                    }}
                />
            )}
            <h1 className="MinMarginWidth">The most recent value of the counter is: {counter}</h1>
            <button className="ToggleButton"
                onClick={() => {
                    setFlag(!flag);
                    writeToStorage(COUNTER_DISPLAYED, !flag);
                    enableClearbutton();
                }}
            >
                Toggle Counter
            </button>

                                    

            <button id="clear" className="ClearStorageButton"
                onClick={() => {

                    localStorage.removeItem(COUNTER_DISPLAYED);

                    disableClearbutton();


                }}
            >
                Clear m/y
            </button>
        </div>  */
        //Working Counter Program Till Here......



        //this is wroking Timer Program......
        <div >
            <Buttons></Buttons>
        </div>

        //this is wroking Form Excercise Program......
        // <div >
        //     <FormUI></FormUI>
        // </div>



        /*This snippet is to display Sample Registration Form */
        // <div className="App">
        //     <RegistrationSamplePage></RegistrationSamplePage>
        // </div>
    );
}

export default App;
