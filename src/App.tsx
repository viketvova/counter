import React, {ChangeEvent, useEffect} from 'react';
import './App.css'
import {ValueForm} from "./Components/ValueForm/ValueForm";
import {SetValueForm} from "./Components/SetValueForm/SetValueForm";
import {useDispatch, useSelector} from "react-redux";
import {
    ChangeValueAC,
    DropValueAC,
    MaxValueHandlerAC,
    OnFocusHandlerAC,
    StartMaxValueHandlerAC,
    StartValueHandlerAC
} from "./Components/state/counter-reducer";
import {AppRootState} from "./Components/state/store";

function App() {
    let value = useSelector<AppRootState, number>(state => state.counter.value)
    let maxValue = useSelector<AppRootState, number>(state => state.counter.maxValue)
    let startValue = useSelector<AppRootState, number>(state => state.counter.startValue)
    let disable = useSelector<AppRootState, boolean>(state => state.counter.disable)

    const dispatch = useDispatch()

    useEffect(() => {
        if (value === startValue) dispatch(OnFocusHandlerAC())
        else dispatch(StartMaxValueHandlerAC())
    }, [dispatch])

    useEffect(() => {
        let startValue = localStorage.getItem("start-value")
        if (startValue) dispatch(StartValueHandlerAC(+JSON.parse(startValue)))
        let maxValue = localStorage.getItem("max-value")
        if (maxValue) dispatch(MaxValueHandlerAC(+JSON.parse(maxValue)))
    }, [])

    const changeValue = (): void => {
        dispatch(ChangeValueAC())
    }

    const startMaxValueHandler = () => {
        dispatch(StartMaxValueHandlerAC())
    }

    const dropValue = (): void => {
        dispatch(DropValueAC())
    }

    const startValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        let value = +e.currentTarget.value
        dispatch(StartValueHandlerAC(value))
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        let value = +e.currentTarget.value
        dispatch(MaxValueHandlerAC(value))
    }

    const onFocusHandler = () => {
        dispatch(OnFocusHandlerAC())
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
