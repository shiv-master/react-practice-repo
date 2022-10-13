import { combineReducers, createStore } from "redux";

const initialCounterState = {
    counter: 0,
    cloth: ['tie', 'jeans', 'shoes', 'pants', 'shirt', 'trousers', 'belt']
}

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state, counter: state.counter + action.payload
            }
        case 'DECREASE':
            return {
                ...state, counter: state.counter - action.payload
            }

        default:
            return state
    }
}

const initialShowState = {
    show: false
}

const showReducer = (state = initialShowState, action) => {
    switch (action.type) {
        case "SHOW":
            return { ...state, show: true }
        case "HIDE":
            return { ...state, show: false }
        default:
            return state
    }
}

const reducer = combineReducers({
    counter: counterReducer,
    show: showReducer
})

const Store = createStore(reducer)

export default Store