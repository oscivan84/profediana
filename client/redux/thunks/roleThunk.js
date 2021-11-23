import { HYDRATE } from 'next-redux-wrapper'


// Action types
export const SET_ROLES = 'ROLE@SET_ROLES'
export const ADD_ROLES = 'ROLE@ADD_ROLES'
export const ADD_DEFAULT = 'ROLE@ADD_DEFAULT'
export const EDIT_ROLES = 'ROLE@EDIT_ROLES'
export const DELETE_ROLES = 'ROLE@DELETE_ROLES'
export const SET_ROLE = 'ROLE@SET_ROLE'
export const EDIT_ROLE = 'ROLE@EDIT_ROLE'
export const SET_METHODS = 'ROLE@SET_METHODS'
export const DELETE_METHODS = 'ROLE@DELETE_METHODS'


// Actions creator
export const setRoles = (newRoles = []) => ({
    type: SET_ROLES,
    payload: newRoles
})

export const addRoles = (newRoles = []) => ({
    type: ADD_ROLES,
    payload: newRoles
})

export const addDefault = (newRole = {}) => ({
    type: ADD_DEFAULT,
    payload: newRole
})

export const editDefault = (newRole = {}) => ({
    type: EDIT_DEFAULT,
    payload: newRole
})

export const editRoles = (newRole = {}) => ({
    type: EDIT_ROLES,
    payload: newRole
})

export const deleteRoles = (id) => ({
    type: DELETE_ROLES,
    payload: id
})

export const setRole = (newRole = {}) => ({
    type: SET_ROLE,
    payload: newRole
})

export const editRole = (newRole = {}) => ({
    type: EDIT_ROLE,
    payload: newRole
})

export const setMethods = (newMethods = []) => ({
    type: SET_METHODS,
    payload: newMethods
})

export const deleteMethods = (methodId) => ({
    type: DELETE_METHODS,
    payload: methodId
})

// Estado initial
export const stateInitial = {
    roles: [],
    role: {
        methods: []
    }
}


export const roleReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            let newState = Object.assign(state, action.payload.role);
            return newState;
        case SET_ROLES: 
            state.roles = action.payload;
            return state;
        case ADD_ROLES:
            state.roles = [...state.roles, ...action.payload];
            return state;
        case ADD_DEFAULT:
            state.roles.map(d => d.is_default = 0);
            state.roles.unshift(action.payload); 
            return state;
        case EDIT_ROLES:
            let tmpEditRoles = state.roles.find(d => d.id == action.payload.id);
            let stateEditRoles = Object.assign(tmpEditRoles, action.payload);
            if (!action.payload.is_default) {
                state.roles.map(d => d.id != stateEditRoles.id ? d : stateEditRoles);
                return state;  
            } 
            state.roles = state.roles.filter(d => d.id != action.payload.id);
            state.roles.map(d => d.is_default = 0);
            state.roles.unshift(stateEditRoles);
            return state;
        case DELETE_ROLES:
            state.roles = state.roles.filter(d => d.id != action.payload);
            return state;
        case SET_ROLE: 
            state.role = action.payload;
            return state;
        case EDIT_ROLE:
            state.role = { ...state.role, ...action.payload }
            return state
        case SET_METHODS:
            state.role.methods = action.payload;
            return state;
        case DELETE_METHODS:
            state.role.methods = state.role.methods.filter(d => d.id != action.payload);
            return state;
        default:
            return state;
    }
}