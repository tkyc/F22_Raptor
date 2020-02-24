import { FETCH_DETAILS, USER_FETCHING, USER_ERROR } from '../actionTypes';

const initialState = {
    details: null,
    isFetching: false,
    error: null
};

const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DETAILS:
            return {
                ...state,
                details: action.payload
            };
        case USER_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            };
        case USER_ERROR:
            return {
                ...state,
                details: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userDetailsReducer;