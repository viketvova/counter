import React from "react";
import { ButtonChange } from "../ButtonChange/ButtonChange";


type ValueFormType =
    {
        startValue: number
        maxValue: number
        value: number
        disable: boolean
        changeValue: () => void
        dropValue: () => void
        className: string
    }

export function ValueForm(props: ValueFormType) {
    return (
        <div className='value'>
            <div
                className={props.className}>
                {props.maxValue === props.startValue || props.startValue < 0
                    ? 'Incorrect value'
                    : props.disable
                        ? `enter values and press 'set'`
                        : props.value
                }
            </div>
            <ButtonChange title='Inc'
                          color='primary'
                          changeValue={props.changeValue}
                          disabled={props.value === props.maxValue || props.disable}
            />
            <ButtonChange title='Reset'
                          color='secondary'
                          changeValue={props.dropValue}
                          disabled={props.value === props.startValue || props.disable}
            />
        </div>
    )
}