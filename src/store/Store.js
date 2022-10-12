import { createStore } from "redux";

const initialState = {
    counter: 0,
    cloth: ['tie', 'jeans', 'shoes', 'pants', 'shirt', 'trousers', 'belt']
}

const reducer = (state = initialState, action) => {
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

const Store = createStore(reducer)

export default Store