import React, {useState} from 'react';
import {ButtonChange} from "./Button";
import './App.css'


function App() {
    let [value, setValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)


    const changeValue = (): void => {
        setValue(++value)
    }

    const dropValue = (): void => {
        setValue(0)
    }


    return (
        <div className='value'>
            <div className={value === maxValue ? 'num red' : 'num'}>{value}</div>

            <ButtonChange value={value} title={'Inc'} color={'primary'} changeValue={changeValue} disabled={value === maxValue}/>
            <ButtonChange value={value} title={'Reset'} color={'secondary'} changeValue={dropValue} disabled={value === 0}/>

        </div>
    );
}

export default App;
