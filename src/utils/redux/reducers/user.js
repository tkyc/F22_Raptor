import { FETCH_DETAILS, USER_FETCHING, USER_ERROR } from '../actionTypes';

const initialState = {
    user: null,
    isFetching: false,
    error: null
};

const userDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DETAILS:
            return {
                ...state,
                user: action.payload
            };
        case USER_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            };
        case USER_ERROR:
            return {
                ...state,
                user: null,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userDetailsReducer;