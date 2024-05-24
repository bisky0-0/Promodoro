import { createStore, combineReducers } from 'redux';

// Define action types
const SESSION = 'SESSION';
const BREAK = 'BREAK';
const LONG_BREAK = 'LONG_BREAK';


const SET_SESSION_DURATION = 'SET_SESSION_DURATION';
const SET_BREAK_DURATION = 'SET_BREAK_DURATION';
const SET_LONG_BREAK_DURATION = 'SET_LONG_BREAK_DURATION';
const RESET_DURATIONS = 'RESET_DURATIONS'




// Define action creators
export const sessionAction = (residual) => {
    return {
        type: SESSION,
        residual: residual
    }
}

export const breakAction = (residual) => {
    return {
        type: BREAK,
        residual: residual
    }
}

export const longAction = (residual) => {
    return {
        type: LONG_BREAK,
        residual: residual
    }
}



export const setSessionDuration = (duration) => ({
    type: SET_SESSION_DURATION,
    payload: duration,
});

export const setBreakDuration = (duration) => ({
    type: SET_BREAK_DURATION,
    payload: duration,
});

export const setLongBreakDuration = (duration) => ({
    type: SET_LONG_BREAK_DURATION,
    payload: duration,
})

export const resetDurations = () => ({
    type: RESET_DURATIONS
})

// Define initial state
const intialStatu = { status: SESSION, residual: 25 * 60 }

const initialState = {
    SESSION: 25 * 60, // 25 minutes in seconds
    BREAK: 5 * 60, // 5 minutes in seconds
    LONG_BREAK: 15 * 60,// 15 minutes in seconds
};

// Define reducers

const statusReducer = (state = intialStatu, action) => {
    switch (action.type) {
        case SESSION:
            return { status: SESSION, residual: action.residual };
        case BREAK:
            return { status: BREAK, residual: action.residual };
        case LONG_BREAK:
            return { status: LONG_BREAK, residual: action.residual };
        default:
            return state;
    }
}

const durationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION_DURATION:
            return { ...state, SESSION: action.payload };
        case SET_BREAK_DURATION:
            return { ...state, BREAK: action.payload };
        case SET_LONG_BREAK_DURATION:
            return { ...state, LONG_BREAK: action.payload };
        case RESET_DURATIONS:
            return initialState;
        default:
            return state;
    }
};




const rootReducer = combineReducers({
    status: statusReducer,
    durations: durationReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
