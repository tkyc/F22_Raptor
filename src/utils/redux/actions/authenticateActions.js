import * as axios from 'axios';
import { API_ENDPOINT, LOGIN } from '../../base';
import { AUTHENTICATE, FETCHING, DEFAULT } from '../actionTypes';

export const setAuthenticationStatus = () => {
    return {type: AUTHENTICATE};
};

export const setFetchingStatus = () => {
    return {type: FETCHING};
};

export const authenticateLogin = (username, password) => {
    return (dispatch, getState) => {
        const { isAuthenticated } = getState().auth;

        if (!isAuthenticated) {
            dispatch(setFetchingStatus());
            axios.defaults.withCredentials = true;

            return axios({
                method: "POST",
                url: `${API_ENDPOINT + LOGIN}`,
                data: {
                    username: username,
                    password: password
                }
            }).then(response => {
                console.log(response);
                dispatch(setAuthenticationStatus());
                dispatch(setFetchingStatus());
            }).catch(error => {
                dispatch(setFetchingStatus());
            });
        }
    };
};