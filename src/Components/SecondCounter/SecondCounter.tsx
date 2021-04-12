import React, {ChangeEvent} from "react";
import './SecondCounter.css'

type PropsType = {
    title: string
    value: number
    valueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    class: string
    onFocus?: () => void
    blur?: () => void
}

export function SecondCounter(props: PropsType) {
    return (
        <div className='values'>
            <span>{props.title}</span>
            <input
                type='number'
                value={props.value}
                onChange={props.valueHandler}
                className={props.class}
                onFocus={props.onFocus}
                onBlur={props.blur}
            />
        </div>
    )
}