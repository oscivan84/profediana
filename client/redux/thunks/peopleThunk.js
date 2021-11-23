import { HYDRATE } from 'next-redux-wrapper'


// Action types
export const SET_PEOPLE = 'SET_PEOPLE'
export const ADD_PEOPLE = 'ADD_PEOPLE'
export const EDIT_PEOPLE = 'EDIT_PEOPLE'
export const DELETE_PEOPLE = 'DELETE_PEOPL'
export const SET_PERSON = 'SET_PERSON'
export const EDIT_PERSON = 'EDIT_PERSON'


// Actions creator
export const setPeople = (newPeople = []) => ({
    type: SET_PEOPLE,
    payload: newPeople
})

export const addPeople = (newPeople = []) => ({
    type: ADD_PEOPLE,
    payload: newPeople
})

export const editPeople = (newPerson = {}) => ({
    type: EDIT_PEOPLE,
    payload: newPerson
})

export const deletePeople = (id) => ({
    type: DELETE_PEOPLE,
    payload: id
})

export const setPerson = (newPerson = {}) => ({
    type: SET_PERSON,
    payload: newPerson
})

export const editPerson = (newPerson = {}) => ({
    type: EDIT_PERSON,
    payload: newPerson
})


// Estado initial
export const stateInitial = {
    data: [],
    person: {}
}


export const peopleReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            let newState = Object.assign(state, action.payload.people);
            return newState;
        case SET_PEOPLE: 
            state.data = action.payload;
            return state;
        case ADD_PEOPLE:
            state.data = [...state.data, ...action.payload];
            return state;
        case EDIT_PEOPLE:
            state.data.map(d => {
                if (d.id != action.payload.id) return d
                let editPeople = Object.assign(d, action.payload);
                return editPeople;
            });
            return state;
        case DELETE_PEOPLE:
            state.data = state.data.filter(d => d.id != action.payload);
            return state;
        case SET_PERSON: 
            state.person = action.payload;
            return state;
        case EDIT_PERSON:
            state.person = { 
                ...state.person, 
                ...action.payload 
            }
            return state
        default:
            return state;
    }
}