import * as axios from 'axios';
import { AUTHENTICATE, DEFAULT } from '../actionTypes';

export const setAuthenticationStatus = () => {
    return {type: AUTHENTICATE};
};

export const authenticateLogin = (username, password) => {
    try {
        axios({
            method: "POST",
            url: "http://localhost:8080/api/v1/accounts/login",
            data: {
                username: username,
                password: password
            }
        }).then(response => {
            console.log(response);
            return {type: DEFAULT};
        })
    } catch (exception) {
        return {type: DEFAULT};
    }; 
};