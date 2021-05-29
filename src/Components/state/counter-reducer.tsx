import {ChangeEvent} from "react";

const initialState: InitialStateType = {
    value: 0,
    maxValue: 5,
    startValue: 0,
    disable: false
}
type InitialStateType = {
    value: number
    maxValue: number
    startValue: number
    disable: boolean
}
const CHANGE_VALUE = 'CHANGE_VALUE'
const DROP_VALUE = 'DROP_VALUE'
const START_VALUE_HANDLER = 'START_VALUE_HANDLER'
const MAX_VALUE_HANDLER = 'MAX_VALUE_HANDLER'
const ON_FOCUS_HANDLER = 'ON_FOCUS_HANDLER'
const START_MAX_VALUE_HANDLER = 'START_MAX_VALUE_HANDLER'

export type ChangeValueACType = {
    type: 'CHANGE_VALUE'
}
export type DropValueACType = {
    type: 'DROP_VALUE'
}
export type StartValueHandlerACType = {
    type: 'START_VALUE_HANDLER'
    event: ChangeEvent<HTMLInputElement>
}
export type MaxValueHandlerACType = {
    type: 'MAX_VALUE_HANDLER'
    event: ChangeEvent<HTMLInputElement>
}
export type OnFocusHandlerACType = {
    type: 'ON_FOCUS_HANDLER'
}
export type StartMaxValueHandlerACType = {
    type: 'START_MAX_VALUE_HANDLER'
}

export const CounterReducer = (state: InitialStateType = initialState, action: any) => {

    switch (action.type) {
        case CHANGE_VALUE: {
            return {...state, value: state.value + 1}
        }
        case DROP_VALUE: {
            return {...state, value: state.startValue}
        }
        case START_VALUE_HANDLER: {
            if (+action.event <= state.maxValue) {
                return {
                    ...state,
                    disable: state.disable = true,
                    startValue: state.startValue = action.event
                }

            } else if (action.event < 0) {
                return {
                    ...state, disable: state.disable = true
                }
            }
            return state
        }
        case MAX_VALUE_HANDLER:
            return action.value >= state.startValue
                ? {...state, disable: state.disable = true, maxValue: state.maxValue = action.value}
                : state
        case ON_FOCUS_HANDLER:
            return {
                ...state,
                disable: state.disable = true
            }
        case START_MAX_VALUE_HANDLER: {
            let copyState = {...state}
            let startValue = localStorage.getItem('start-value')
            copyState.disable = false
            if (startValue) {
                let newS = JSON.parse('start-value')
                copyState.startValue = newS
                copyState.value = newS
            }
            let maxValue = localStorage.getItem('max-value')
            if (maxValue) JSON.parse('max-value')
            return {...copyState}
        }
        default:
            return state
    }

}
export const ChangeValueAC = (): ChangeValueACType => ({
    type: CHANGE_VALUE
})
export const DropValueAC = (): DropValueACType => ({
    type: DROP_VALUE
})
export const StartValueHandlerAC = (event: ChangeEvent<HTMLInputElement>): StartValueHandlerACType => ({
    type: START_VALUE_HANDLER,
    event
})
export const MaxValueHandlerAC = (event: ChangeEvent<HTMLInputElement>): MaxValueHandlerACType => ({
    type: MAX_VALUE_HANDLER,
    event
})
export const OnFocusHandlerAC = (): OnFocusHandlerACType => ({
    type: ON_FOCUS_HANDLER
})
export const StartMaxValueHandlerAC = (): StartMaxValueHandlerACType => ({
    type: START_MAX_VALUE_HANDLER
})