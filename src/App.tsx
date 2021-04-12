import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'
import {ValueForm} from "./Components/ValueForm/ValueForm";
import {SetValueForm} from "./Components/SetValueForm/SetValueForm";

function App() {
    let [value, setValue] = useState(0)
    let [maxValue, setMaxValue] = useState(5)
    let [startValue, setStartValue] = useState(0)
    let [disable, setDisable] = useState(false)

    let start = 'start-value'
    let max = 'max-value'

    useEffect(() => {
        if (value === startValue) setDisable(true)
        else startMaxValueHandler()
    }, [])

    useEffect(() => {
        localStorage.setItem(start, JSON.stringify(startValue))
        localStorage.setItem(max, JSON.stringify(maxValue))
    }, [maxValue, startValue])

    const changeValue = (): void => {
        setValue(value + 1)
    }

    const dropValue = (): void => {
        setValue(startValue)
    }

    const startMaxValueHandler = () => {
        let startValue = localStorage.getItem(start)
        setDisable(false)
        if (startValue) {
            let newS = JSON.parse(startValue)
            setStartValue(newS)
            setValue(newS)
        }
        let maxValue = localStorage.getItem(max)
        if (maxValue) setMaxValue(JSON.parse(maxValue))
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        if (+e.target.value <= maxValue) {
            setDisable(true)
            setStartValue(+e.target.value)
        } else if (+e.target.value < 0) {
            setDisable(true)
        }
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        if (+e.target.value >= startValue) {
            setDisable(true)
            setMaxValue(+e.target.value)
        }
    }

    const onFocusHandler = () => {
        setDisable(true)
    }

    return (
        <>
            <ValueForm
                startValue={startValue}
                maxValue={maxValue}
                value={value}
                disable={disable}
                changeValue={changeValue}
                dropValue={dropValue}
                className={startValue === maxValue || startValue < 0 || value === maxValue ? 'num red' : 'num'}
            />

            <SetValueForm
                startValue={startValue}
                maxValue={maxValue}
                disable={disable}
                maxValueHandler={maxValueHandler}
                onFocusHandler={onFocusHandler}
                startValueHandler={startValueHandler}
                startMaxValueHandler={startMaxValueHandler}
            />
        </>
    );
}

export default App;
