import { HYDRATE } from 'next-redux-wrapper'

// Action types

// Actions creator

// Estado initial
export const stateInitial = {
    receiver: {}
}


export const invoiceReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            let newState = Object.assign(state, action.payload.invoice);
            return newState;
        default:
            return state;
    }
}