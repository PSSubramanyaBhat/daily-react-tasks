import './Counter.css';

import React, { useEffect, useState } from 'react';
import { readFromStorage, writeToStorage } from './LocalStorage';
import { useLocalStorageState } from './useLocalStorageState';
import PropTypes from 'prop-types';

const COUNT = 'countVal';

const Counter = ({ counterBase, upperLimit, lowerLimit, counterCallback }) => {

    //Use lazy initialisation via a initialisation function as an argument to setState
    // rather than the actual value
    /*let [count, setCount] = useState(() => readFromStorage(COUNT) || 0);*/
    let [count, setCount] = useLocalStorageState(0, COUNT);

    // let [multiplier, setMultiplier] = useState(Number(counterBase));  //This is to use a base value for mulltiplier... (this is a prop)
    let [multiplier, setMultiplier] = useState(2);

    // let [data, setData] = useState({ count: 0, multiplier: 1 });


    //This useEffect is used to set a new document title every tinme counter value is rendered...
    useEffect(() => {
        let newName = document.title + ` ${count}`
        document.title = newName;
        console.log(document.title);
        /*document.title = "React App";*/   //This is to reset the Doc name backto default name...
    });

    useEffect(() => {
        console.log('* Component is rendered');
        return () => {
            console.log('component is unmounted');
        };
    }, []);



    return (
        <div className="Counter">
            <button className="CounterButtons"
                onClick={() => {
                    /*  //This code sets the conditions for lowerlimit conditions
                        
                        if (count * multiplier > Number(lowerLimit)) {
                            count = count - 1;

                            localStorage.setItem("countVal", JSON.stringify(count));
                            console.log("VALUE OF COUNT " + localStorage.getItem("countVal"));

                        } else {
                            console.log("Lower Limit Exceeded... (Lower Limit is 0)");
                        }

                    */
                    count = count - 1;
                    // localStorage.setItem("countVal", JSON.stringify(count));
                    console.log("VALUE OF COUNT " + localStorage.getItem("countVal"));
                    console.log('- clicked' + count);
                    setCount(count);
                    writeToStorage(COUNT, count);
                    counterCallback && counterCallback(count);
                }}
            >
                -
            </button>
            <div className="Label">{count * multiplier}</div>
            <button className="CounterButtons"
                onClick={() => {
                    /*  //This code sets the conditions for upperlimit conditions
                        
                        if (count * multiplier < Number(upperLimit)) {
                            count = count + 1;

                            localStorage.setItem("countVal", JSON.stringify(count));
                            console.log("VALUE OF COUNT " + localStorage.getItem("countVal"));

                        } else {
                            console.log("Upper Limit Exceeded... (Upper Limit is 1000)");
                        }

                    */
                    count = count + 1;
                    // localStorage.setItem("countVal", JSON.stringify(count));
                    console.log("VALUE OF COUNT " + localStorage.getItem("countVal"));
                    console.log('+ clicked', count);
                    setCount(count);
                    writeToStorage(COUNT, count);
                    counterCallback && counterCallback(count);
                }}
            >
                +
            </button>
            <div className="Multiplier">
                <label htmlFor="multiplier">Multiplier</label>
                <input className="InputField"
                    onChange={(event) => {
                        console.dir(event.target.value);
                        setMultiplier(Number(event.target.value));
                    }}
                    type="text"
                    id="multiplier"
                    name="multiplier"
                    defaultValue={multiplier}
                />
            </div>
        </div>
    );
};

Counter.propTypes = {
    counterBase: PropTypes.number,
    lowerLimit: PropTypes.number,
    upperLimit: PropTypes.number,
    counterCallback: PropTypes.func,
}

export default Counter;


/*<-- Fact 1 -->*/
/*instead of writing like this and then using reactDOM.render()...
we export it to different module and then use this class/vinding there*/

/*const propElement = (
    <div>
        <Counter upperLimit = {1000} lowerLimit = {0} counterBase = {2}/>
    </div>
);

 export default propElement;     or ReactDOM.render(propElement,"root");*/


/*<-- Fact 2 -->*/
//This snippet is to store the value in localStorage in website even after refreshing

/*
  localStorage.setItem("countVal", JSON.stringify(count));
  console.log("VALUE OF COUNT "+localStorage.getItem("countVal"));
*/


/*<-- Fact 3 -->*/
//This snippet is to use useEffect only once at the beginning at code mounting time
//Hence we have use [] in the end

/*useEffect(() => {
        let newName = document.title + ` ${count}`
        document.title = newName;
        console.log(document.title);
    },[]);*/


/*<-- Fact 4 -->*/
//This statement is to check if an element is stored in localStorage or not...

//localStorage.getItem("infiniteScrollEnabled") === null


/*<-- Fact 5 -->*/
//This statement is to clear all elements is stored in localStorage...
// localStorage.clear();