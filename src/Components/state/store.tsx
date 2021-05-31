import {combineReducers, createStore} from "redux"
import {CounterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: CounterReducer
})
export type AppRootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)