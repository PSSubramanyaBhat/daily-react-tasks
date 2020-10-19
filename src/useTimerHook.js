import React, { useEffect, useState } from 'react';

export default function useTimerHook() {
    let timerCount = 0;
    let [second, setTimer] = useState(0);
    let [timerFlag, setTimerFlag] = useState(false);

    let startTimer = () => {
        setTimerFlag(true);
    }

    let stopTimer = () => {
        setTimerFlag(false);
    }

    let resetTimer = () => {
        setTimer(0);
        setTimerFlag(false);
    }

    useEffect(() => {
        if (timerFlag) {
            timerCount = setInterval(() => {
                setTimer(second => second + 1);
            }, 1000);
        } else if (!timerFlag && second !== 0) {
            clearInterval(timerCount);
        }
        return () => clearInterval(timerCount);
    }, [timerFlag]);

    return {startTimer, stopTimer, resetTimer, second};

}