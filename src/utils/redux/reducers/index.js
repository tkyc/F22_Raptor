import { combineReducers } from 'redux';
import authenticationReducer from './authenticate';
import userDetailsReducer from './user';

export default combineReducers({
    auth: authenticationReducer,
    user: userDetailsReducer
});