import React, {ChangeEvent} from "react";
import { ButtonChange } from "../ButtonChange/ButtonChange";
import {SecondCounter} from "../SecondCounter/SecondCounter";

type SetValueFormType = {
    startValue: number
    maxValue: number
    disable: boolean
    maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onFocusHandler: () => void
    startValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    startMaxValueHandler: () => void

}

export function SetValueForm(props: SetValueFormType) {
    return (
        <div className='setValue'>
            <SecondCounter title='max value: '
                           valueHandler={props.maxValueHandler}
                           value={props.maxValue}
                           class={props.maxValue === props.startValue ? 'error' : ''}
                           onFocus={props.onFocusHandler}

            />
            <SecondCounter title='start value: '
                           valueHandler={props.startValueHandler}
                           value={props.startValue}
                           class={props.startValue < 0 || props.maxValue === props.startValue ? 'error' : ''}
                           onFocus={props.onFocusHandler}

            />
            <ButtonChange title='Set'
                          color='primary'
                          changeValue={props.startMaxValueHandler}
                          disabled={props.startValue < 0 || !props.disable || props.maxValue === props.startValue}
            />
        </div>
    )

}