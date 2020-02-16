import { AUTHENTICATE } from '../actionTypes';

const initialState = {
    isAuthenticated: false
};

const authenticationReducer = (state = initialState, action) => {
    switch(action.type) {
        case AUTHENTICATE:
            return {
                ...state,
                isAuthenticated: !state.isAuthenticated
            };
        default:
            return state;
    }
};

export default authenticationReducer;