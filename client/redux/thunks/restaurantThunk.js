import { HYDRATE } from 'next-redux-wrapper'


// Action types
export const SET_RESTAURANTS = 'RESTAURANT@SET_RESTAURANTS'
export const ADD_RESTAURANTS = 'RESTAURANT@ADD_RESTAURANTS'
export const EDIT_RESTAURANTS = 'RESTAURANT@EDIT_RESTAURANTS'
export const DELETE_RESTAURANTS = 'RESTAURANT@DELETE_RESTAURANTS'
export const FIND_RESTAURANT = 'RESTAURANT@FIND_RESTAURANT'
export const SET_RESTAURANT = 'RESTAURANT@SET_RESTAURANT'
export const EDIT_RESTAURANT = 'RESTAURANT@EDIT_RESTAURANT'


// Actions creator
export const setRestaurants = (newRestaurants = []) => ({
    type: SET_RESTAURANTS,
    payload: newRestaurants
})

export const addRestaurants = (newRestaurants = []) => ({
    type: ADD_RESTAURANTS,
    payload: newRestaurants
})

export const editRestaurants = (newRestaurants = {}) => ({
    type: EDIT_RESTAURANTS,
    payload: newRestaurants
})

export const deleteRestaurants = (id) => ({
    type: DELETE_RESTAURANTS,
    payload: id
})

export const findRestaurant = (id) => ({
    type: FIND_RESTAURANT,
    payload: id
})

export const setRestaurant = (newRestaurant = {}) => ({
    type: SET_RESTAURANT,
    payload: newRestaurant
})

export const editRestaurant = (newRestaurant = {}) => ({
    type: EDIT_RESTAURANT,
    payload: newRestaurant
})


// Estado initial
export const stateInitial = {
    restaurants: [],
    restaurant: {}
}


export const restaurantReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            let newState = Object.assign(state, action.payload.restaurant);
            return newState;
        case SET_RESTAURANTS: 
            state.restaurants = action.payload;
            return state;
        case ADD_RESTAURANTS:
            state.restaurants = [...state.restaurants, ...action.payload];
            return state;
        case EDIT_RESTAURANTS:
            state.restaurants.map(d => {
                if (d.id != action.payload.id) return d
                let editRestaurant = Object.assign(d, action.payload);
                return editRestaurant;
            });
            return state;
        case DELETE_RESTAURANTS:
            state.restaurants = state.restaurants.filter(d => d.id != action.payload);
            return state;
        case FIND_RESTAURANT:
            let findRestaurant = state.restaurants.find(r => r.id == action.payload);
            if (findRestaurant) state.restaurant = findRestaurant;
            return state;
        case SET_RESTAURANT: 
            state.restaurant = action.payload;
            return state;
        case EDIT_RESTAURANT:
            state.restaurant = { 
                ...state.restaurant, 
                ...action.payload 
            }
            return state
        default:
            return state;
    }
}