import './App.css';

import Counter from './Counter';
// import RegistrationSamplePage from './RegistrationSamplePage';

import React from 'react';

function App() {

    let [counter, setCounter] = React.useState(0);
    return (
        <div className="App">
            {/* <Counter /> */}
            <Counter
                upperLimit={20} lowerLimit={0} counterBase={5}
                counterCallback={(count) => {
                    counter = count;
                    setCounter(count);
                }}

            />

            <h1>The most recent value of the counter is: {counter}</h1>
        </div>


        /*This snippet is to display Sample Registration Form */
        // <div className="App">
        //     <RegistrationSamplePage></RegistrationSamplePage>
        // </div>
    );
}

export default App;
