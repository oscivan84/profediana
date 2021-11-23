import { HYDRATE } from 'next-redux-wrapper'


// Action types
export const SET_BOARDS = 'BOARD@SET_BOARDS'
export const ADD_BOARDS = 'BOARD@ADD_BOARDS'
export const EDIT_BOARDS = 'BOARD@EDIT_BOARDS'
export const DELETE_BOARDS = 'BOARD@DELETE_BOARDS'
export const SET_BOARD = 'BOARD@SET_BOARD'
export const EDIT_BOARD = 'BOARD@EDIT_BOARD'


// Actions creator
export const setBoards = (newBoards = []) => ({
    type: SET_BOARDS,
    payload: newBoards
})

export const addBoards = (newBoards = []) => ({
    type: ADD_BOARDS,
    payload: newBoards
})

export const editBoards = (newBoards = {}) => ({
    type: EDIT_BOARDS,
    payload: newBoards
})

export const deleteBoards = (id) => ({
    type: DELETE_BOARDS,
    payload: id
})

export const setBoard = (newBoard = {}) => ({
    type: SET_BOARD,
    payload: newBoard
})

export const editBoard = (newBoard = {}) => ({
    type: EDIT_BOARD,
    payload: newBoard
})


// Estado initial
export const stateInitial = {
    boards: [],
    board: {}
}


export const boardReducer = (state = stateInitial, action = {}) => {
    switch (action.type) {
        case HYDRATE:
            let newState = Object.assign(state, action.payload.board);
            return newState;
        case SET_BOARDS: 
            state.boards = action.payload;
            return state;
        case ADD_BOARDS:
            state.boards = [...state.boards, ...action.payload];
            return state;
        case EDIT_BOARDS:
            state.boards.map(d => {
                if (d.id != action.payload.id) return d
                let editBoard = Object.assign(d, action.payload);
                return editBoard;
            });
            return state;
        case DELETE_BOARDS:
            state.boards = state.boards.filter(d => d.id != action.payload);
            return state;
        case SET_BOARD: 
            state.board = action.payload;
            return state;
        case EDIT_BOARD:
            state.board = { 
                ...state.board, 
                ...action.payload 
            }
            return state
        default:
            return state;
    }
}