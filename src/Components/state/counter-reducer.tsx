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
    event: number
}
export type MaxValueHandlerACType = {
    type: 'MAX_VALUE_HANDLER'
    event: number
}
export type OnFocusHandlerACType = {
    type: 'ON_FOCUS_HANDLER'
}
export type StartMaxValueHandlerACType = {
    type: 'START_MAX_VALUE_HANDLER'
}
type ActionType =
    ChangeValueACType
    | DropValueACType
    | StartValueHandlerACType
    | MaxValueHandlerACType
    | OnFocusHandlerACType
    | StartMaxValueHandlerACType

export const CounterReducer = (state: InitialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case CHANGE_VALUE: {
            return {...state, value: state.value + 1}
        }
        case DROP_VALUE: {
            return {...state, value: state.startValue}
        }
        case START_VALUE_HANDLER: {

            return action.event <= state.maxValue
                ? {
                    ...state,
                    disable: state.disable = true,
                    startValue: state.startValue = action.event
                }
                : action.event < 0
                    ? {
                        ...state, disable: state.disable = true
                    } : state
        }
        case MAX_VALUE_HANDLER: {
            let copyState = {...state}
            if (action.event >= copyState.startValue)
                return {
                    ...state,
                    disable: state.disable = true,
                    maxValue: state.maxValue = action.event
                }
            return {...copyState}
        }
        case ON_FOCUS_HANDLER:
            return {
                ...state,
                disable: state.disable = true
            }
        case START_MAX_VALUE_HANDLER: {
            localStorage.setItem("start-value", JSON.stringify(state.startValue))
            localStorage.setItem("max-value", JSON.stringify(state.maxValue))
            return {
                ...state,
                disable: state.disable = false,
                startValue: state.startValue,
                maxValue: state.maxValue,
                value: state.startValue
            }
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
export const StartValueHandlerAC = (event: number): StartValueHandlerACType => ({
    type: START_VALUE_HANDLER,
    event
})
export const MaxValueHandlerAC = (event: number): MaxValueHandlerACType => ({
    type: MAX_VALUE_HANDLER,
    event
})
export const OnFocusHandlerAC = (): OnFocusHandlerACType => ({
    type: ON_FOCUS_HANDLER
})
export const StartMaxValueHandlerAC = (): StartMaxValueHandlerACType => ({
    type: START_MAX_VALUE_HANDLER
})