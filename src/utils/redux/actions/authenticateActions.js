import axios from 'axios';
import { setAccessToken } from '../../access';
import { API_ENDPOINT, LOGIN } from '../../base';
import { AUTHENTICATE, AUTH_FETCHING, AUTH_ERROR } from '../actionTypes';

export const setAuthenticationStatus = () => {
    return {type: AUTHENTICATE};
};

export const setFetchingStatus = () => {
    return {type: AUTH_FETCHING};
};

export const setError = (error) => {
    return {type: AUTH_ERROR, payload: error};
};

const authenticateLogin = (username, password) => {
    return async (dispatch, getState) => {
        const { isAuthenticated } = getState().auth;
        let response;

        axios.defaults.withCredentials = true;
        dispatch(setFetchingStatus()); //Fetching is true

        try {
            if (!isAuthenticated)
                response = await axios({
                    method: "POST", 
                    url: `${API_ENDPOINT + LOGIN}`,
                    data: {
                        username: username,
                        password: password
                    }
                });
        } catch (error) {
            dispatch(setError(error));
        } finally {
            if (response) {
                setAccessToken(response.data);
                dispatch(setAuthenticationStatus());
            }

            dispatch(setFetchingStatus()); //Fetching is false
        }
    };
};

export default authenticateLogin;