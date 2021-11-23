import sessiontStorage from 'sessionstorage'
import { HYDRATE } from 'next-redux-wrapper'

// Action types
export const SET_TITLE = 'SET_TITLE';
export const RESIZE_SCREEN = 'RESIZE_SCREEN';
export const WRAPPER_SCREEN = 'WRAPPER_SCREEN';
export const DEFAULT_THEME = 'DEFAULT_THEME';
export const TOGGLE_THEME = 'TOGGLE_THEME';


// Action creator
export const setTitle = (title) => ({
    type: SET_TITLE,
    payload: title
})

export const resizeScreen = () => ({
    type: RESIZE_SCREEN
})

export const wrapperScreen = () => ({
    type: WRAPPER_SCREEN
})

export const defaultTheme = () => ({
    type: DEFAULT_THEME
})

export const toggleTheme = () => ({
    type: TOGGLE_THEME
})

const getMode = (size) => {
    let data = [
        { name: "xxl", size: 1400 },
        { name: "xl", size: 1200 },
        { name: "lg", size: 992 },
        { name: "md", size: 768 },
        { name: "sm", size: 576 },
        { name: "xs", size: 576 },
    ]

    let response = data.find((d, index) => {

        let isLastItem = (data.length - 1) == index;

        if (!isLastItem && d.size <= size) return true;

        if (isLastItem && d.size > size) return true;
        
        return false;
    })

    return response.name || null;
}

// Estado inicial
export const stateInitial = {
    title: '',
    width: 0,
    height: 0,
    wrapper: false,
    mode: null,
    dark: false,
}

// configs
const limit = 1350;

// Reducer
export const screeenReducer = (state = stateInitial, action) => {
    switch (action.type) {
        case HYDRATE: 
            let newState = Object.assign(state, action.payload.screen)
            return newState 
        case SET_TITLE:
            return { ...state, title: action.payload } 
        case RESIZE_SCREEN:
            state.width = window.innerWidth
            state.height = window.innerHeight
            if (limit >= state.width) state.wrapper = true;
            else state.wrapper = false;
           state.mode = getMode(state.width);
            return  { ...state };
        case WRAPPER_SCREEN:
            return { ...state, wrapper: !state.wrapper };
        case DEFAULT_THEME: 
            let dark = parseInt(sessiontStorage.getItem('dark')) ? true : false
            document.body.className = dark ? 'dark-only' : 'light'
            return { ...state, dark }
        case TOGGLE_THEME:
            state.dark = !state.dark;
            document.body.className = state.dark ? 'dark-only' : 'light'
            sessiontStorage.setItem('dark', state.dark ? 1 : 0)
            return state;
        default:
            return state;
    }
}