import { combineReducers } from 'redux';
import authenticationReducer from './authenticate';

export default combineReducers({
    auth: authenticationReducer
});