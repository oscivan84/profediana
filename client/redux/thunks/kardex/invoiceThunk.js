import { HYDRATE } from 'next-redux-wrapper'
import { Collection } from 'collect.js';

// Action types
export const SET_RECEIVER = 'KARDEX@INVOICE@SET_RECEIVER';
export const SET_DETAILS = 'KARDEX@INVOICE@SET_DETAILS';
export const EDIT_DETAIL = 'KARDEX@INVOICE@EDIT_DETAIL';
export const DELETE_DETAIL = 'KARDEX@INVOICE@DELETE_DETAIL';
export const CLEAR_RECEIVER = 'KARDEX@INVOICE@CLEAR_RECEIVER';
export const CLEAR_DETAILS = 'KARDEX@INVOICE@CLEAR_DETAILS';
export const TOTAL_DETAILS = 'KARDEX@INVOICE@TOTAL_DETAILS'

// Actions creator
export const setReceiver = (newReceiver = {}) => ({
    type: SET_RECEIVER,
    payload: newReceiver,
});

export const setDetails = (newDetail) => ({
    type: SET_DETAILS,
    payload: newDetail
})

export const editDetail = (objectId, changeDetail) => ({
    type: EDIT_DETAIL,
    payload: {
        objectId,
        ...changeDetail
    } 
})

export const deleteDetail = (id) => ({
    type: DELETE_DETAIL,
    payload: id
})

export const clearReceiver = () => ({
    type: CLEAR_RECEIVER
})

export const clearDetails = () => ({
    type: CLEAR_DETAILS,
})

export const totalDetails = () => ({
    type: TOTAL_DETAILS
})

// Estado initial
export const stateInitial = {
    receiver: {},
    details: [],
    detailTotal: 0
}


export const invoiceReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            state = Object.assign(state, action.payload.invoice);
            return state;
        case SET_RECEIVER:
            state.receiver = action.payload || {};
            return state;
        case SET_DETAILS:
            const newDetalle = action.payload;
            // validar si ya existe
            const isAdd = state.details.filter(det => det.objectId == newDetalle.objectId).length;
            if (!isAdd) state.details.push(newDetalle);
            // actualizar amount
            state.details.map(det => {
                if (det.objectId == newDetalle.objectId) {
                    det.displayAmount = parseInt(`${det.displayAmount}`) + 1;
                }
                return det;
            })
            // recalcular total
            invoiceReducer(state, totalDetails())
            // retornar el estado
            return state;
        case EDIT_DETAIL:
            const editCurrentDetail = action.payload;
            state.details.map(det => {
                if (det.objectId == editCurrentDetail.objectId) {
                    det = Object.assign(det, editCurrentDetail); 
                }
                return det;
            });
            // recalcular total
            invoiceReducer(state, totalDetails())
            return state;
        case DELETE_DETAIL:
            const detailID = action.payload;
            const newDetails = state.details.filter(det => det.objectId != detailID);
            state.details = newDetails;
            // recalcular total
            invoiceReducer(state, totalDetails())
            return state;
        case CLEAR_RECEIVER:
            state.receiver = {};
            return state;
        case CLEAR_DETAILS:    
            state.details = []; 
            state.detailTotal = 0;
            return state;
        case TOTAL_DETAILS:
            const result = { total: 0 };
            state.details.forEach(det => {
                const total = (parseFloat(`${det.displayPrice}`) * parseInt(`${det.displayAmount}`));
                result.total += total;
            });
            state.detailTotal = result.total;
            return state;
        default:
            return state;
    }
}