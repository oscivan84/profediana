import { HYDRATE } from 'next-redux-wrapper'

// Action types
export const SET_RECEIVER = 'KARDEX@INVOICE@SET_RECEIVER';

// Actions creator
export const setReceiver = (newReceiver = {}) => ({
    type: SET_RECEIVER,
    payload: newReceiver,
});

// Estado initial
export const stateInitial = {
    receiver: {}
}


export const invoiceReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            state = Object.assign(state, action.payload.invoice);
            return state;
        case SET_RECEIVER:
            state.receiver = action.payload || {};
            console.log(state);
            return state;
        default:
            return state;
    }
}