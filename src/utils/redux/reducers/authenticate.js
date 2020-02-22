import { AUTHENTICATE, AUTH_FETCHING, AUTH_ERROR } from '../actionTypes';

const initialState = {
    isAuthenticated: false,
    isFetching: false,
    error: null
};

const authenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated
            };
        case AUTH_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            };
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};

export default authenticationReducer;