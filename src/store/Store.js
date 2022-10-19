// import { combineReducers, createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    cloth: ['tie', 'jeans', 'shoes', 'pants', 'shirt', 'trousers', 'belt']
}

const counterReducer = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload
        }
    }
})

// const counterReducer = (state = initialCounterState, action) => {
//     switch (action.type) {
//         case 'INCREASE':
//             return {
//                 ...state, counter: state.counter + action.payload
//             }
//         case 'DECREASE':
//             return {
//                 ...state, counter: state.counter - action.payload
//             }

//         default:
//             return state
//     }
// }

const initialShowState = {
    show: false
}

const showReducer = createSlice({
    name: "show",
    initialState: initialShowState,
    reducers: {
        show(state) {
            state.show = true
        },
        hide(state) {
            state.show = false
        }
    }
})

// const showReducer = (state = initialShowState, action) => {
//     switch (action.type) {
//         case "SHOW":
//             return { ...state, show: true }
//         case "HIDE":
//             return { ...state, show: false }
//         default:
//             return state
//     }
// }

// const reducer = combineReducers({
//     counter: counterReducer,
//     show: showReducer
// })

// const Store = createStore(reducer)

const Store = configureStore({
    reducer: { counter: counterReducer.reducer, show: showReducer.reducer }
})

export const counterActions = counterReducer.actions
export const showActions = showReducer.actions

export default Store