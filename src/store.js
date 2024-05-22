import { createStore, combineReducers } from 'redux';

// Define action types
const SET_SESSION_DURATION = 'SET_SESSION_DURATION';
const SET_BREAK_DURATION = 'SET_BREAK_DURATION';

// Define action creators
export const setSessionDuration = (duration) => ({
    type: SET_SESSION_DURATION,
    payload: duration,
});

export const setBreakDuration = (duration) => ({
    type: SET_BREAK_DURATION,
    payload: duration,
});

// Define initial state
const initialState = {
    sessionDuration: 25 * 60, // 25 minutes in seconds
    breakDuration: 5 * 60, // 5 minutes in seconds
};

// Define reducers
const durationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SESSION_DURATION:
            return { ...state, sessionDuration: action.payload };
        case SET_BREAK_DURATION:
            return { ...state, breakDuration: action.payload };
        default:
            return state;
    }
};

// Combine reducers (if you have more reducers, add them here)
const rootReducer = combineReducers({
    durations: durationReducer,
});

// Create store
const store = createStore(rootReducer);

export default store;
