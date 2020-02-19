import * as axios from 'axios';
import { AUTHENTICATE, DEFAULT } from '../actionTypes';

export const setAuthenticationStatus = () => {
    return {type: AUTHENTICATE};
};

export const authenticateLogin = (username, password) => {
    return (dispatch, getState) => {
        const { isAuthenticated } = getState().auth;

        if (!isAuthenticated) {
            axios.defaults.withCredentials = true;

            return axios({
                method: "POST",
                url: "http://localhost:8080/api/v1/accounts/login",
                data: {
                    username: username,
                    password: password
                }
            }).then(response => {
                console.log(response);
                dispatch(setAuthenticationStatus());
            });
        }
    };
};