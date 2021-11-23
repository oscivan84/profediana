import { HYDRATE } from 'next-redux-wrapper'


// Action types
export const SET_USERS = 'USER@SET_USERS'
export const ADD_USERS = 'USER@ADD_USERS'
export const EDIT_USERS = 'USER@EDIT_USERS'
export const DELETE_USERS = 'USER@DELETE_USERS'
export const SET_USER = 'USER@SET_USER'
export const EDIT_USER = 'USER@EDIT_USER'


// Actions creator
export const setUsers = (newUsers = []) => ({
    type: SET_USERS,
    payload: newUsers
})

export const addUsers = (newUsers = []) => ({
    type: ADD_USERS,
    payload: newUsers
})

export const editUsers = (newUsers = {}) => ({
    type: EDIT_USERS,
    payload: newUsers
})

export const deleteUsers = (id) => ({
    type: DELETE_USERS,
    payload: id
})

export const setUser = (newUser = {}) => ({
    type: SET_USER,
    payload: newUser
})

export const editUser = (newUser = {}) => ({
    type: EDIT_USER,
    payload: newUser
})


// Estado initial
export const stateInitial = {
    users: [],
    user: {}
}


export const userReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            let newState = Object.assign(state, action.payload.user);
            return newState;
        case SET_USERS: 
            state.users = action.payload;
            return state;
        case ADD_USERS:
            state.users = [...state.users, ...action.payload];
            return state;
        case EDIT_USERS:
            state.users.map(d => {
                if (d.id != action.payload.id) return d
                let editUser = Object.assign(d, action.payload);
                return editUser;
            });
            return state;
        case DELETE_USERS:
            state.users = state.users.filter(d => d.id != action.payload);
            return state;
        case SET_USER: 
            state.user = action.payload;
            return state;
        case EDIT_USER:
            state.user = { 
                ...state.user, 
                ...action.payload 
            }
            return state
        default:
            return state;
    }
}