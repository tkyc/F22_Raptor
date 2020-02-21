import { AUTHENTICATE, FETCHING } from '../actionTypes';

const initialState = {
    isAuthenticated: false,
    isFetching: false,
    error: null
};

const authenticationReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated
            };
        case FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        default:
            return state;
    }
};

export default authenticationReducer;