import { HYDRATE } from 'next-redux-wrapper'
import LoginRequest from '../../request/auth/loginRequest'
import nookies from 'nookies'
import Router from 'next/router'

// Action types
export const SET_LOGGED = 'AUTH@SET_LOGGED'
export const SET_TOKEN = 'AUTH@SET_TOKEN'
export const SET_USER = 'AUTH@SET_USER'
export const EDIT_USER = 'AUTH@EDIT_USER'
export const LOGOUT = 'AUTH@LOGOUT'


// Actions creator
export const setLogged = (logged = false) => ({
    type: SET_LOGGED,
    payload: logged ? true : false
})

export const setToken = (newToken = null) => ({
    type: SET_TOKEN,
    payload: newToken
})

export const setUser = (newUser = {}) => ({
    type: SET_USER,
    payload: newUser || {}
})

export const editUser = (newUser = {}) => ({
    type: EDIT_USER,
    payload: newUser || {}
})

export const logout = (translate = null) => async (dispatch) => {
    const loginRequest = new LoginRequest({ translate })
    await loginRequest.logout()
    .then(() => dispatch({ type: LOGOUT }))
    .catch(err => {
        if (err.code == 'E_UNAUTHORIZED_ACCESS') {
            dispatch({ type: LOGOUT });
        }
    })
}

// Estado initial
export const stateInitial = {
    logged: false,
    token: null,
    user: {
        person: {}
    }
}


// reducers
export const authReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case HYDRATE: 
            let newState = Object.assign(state, action.payload.auth);
            return newState
        case SET_LOGGED:
            state.logged = action.payload
            return state;
        case SET_TOKEN:
            state.token = action.payload
            return state;
        case SET_USER:
            state.user = action.payload
            return state; 
        case EDIT_USER:
            state.user = Object.assign(state.user, action.payload);
            return state;
        case LOGOUT:
            state.user = {};
            state.token = null;
            nookies.destroy(null, 'auth_token');
            Router.push('/login');
            return state;
        default:
            return state;
    }
};