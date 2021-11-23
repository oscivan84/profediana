import { HYDRATE } from 'next-redux-wrapper'


// Action types
export const SET_PRODUCTS = 'PRODUCT@SET_PRODUCTS'
export const ADD_PRODUCTS = 'PRODUCT@ADD_PRODUCTS'
export const EDIT_PRODUCTS = 'PRODUCT@EDIT_PRODUCTS'
export const DELETE_PRODUCTS = 'PRODUCT@DELETE_PRODUCTS'
export const SET_PRODUCT = 'PRODUCT@SET_PRODUCT'
export const EDIT_PRODUCT = 'PRODUCT@EDIT_PRODUCT'


// Actions creator
export const setProducts = (newProducts = []) => ({
    type: SET_PRODUCTS,
    payload: newProducts
})

export const addProducts = (newProducts = []) => ({
    type: ADD_PRODUCTS,
    payload: newProducts
})

export const editProducts = (newProducts = {}) => ({
    type: EDIT_PRODUCTS,
    payload: newProducts
})

export const deleteProducts = (id) => ({
    type: DELETE_PRODUCTS,
    payload: id
})

export const setProduct = (newProduct = {}) => ({
    type: SET_PRODUCT,
    payload: newProduct
})

export const editProduct = (newProduct = {}) => ({
    type: EDIT_PRODUCT,
    payload: newProduct
})


// Estado initial
export const stateInitial = {
    products: [],
    product: {}
}


export const productReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            let newState = Object.assign(state, action.payload.product);
            return newState;
        case SET_PRODUCTS: 
            state.products = action.payload;
            return state;
        case ADD_PRODUCTS:
            state.products = [...state.products, ...action.payload];
            return state;
        case EDIT_PRODUCTS:
            state.products.map(d => {
                if (d.id != action.payload.id) return d
                let editProduct = Object.assign(d, action.payload);
                return editProduct;
            });
            return state;
        case DELETE_PRODUCTS:
            state.products = state.products.filter(d => d.id != action.payload);
            return state;
        case SET_PRODUCT: 
            state.product = action.payload;
            return state;
        case EDIT_PRODUCT:
            state.product = { 
                ...state.product, 
                ...action.payload 
            }
            return state
        default:
            return state;
    }
}