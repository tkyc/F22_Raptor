import createAuthRefreshInterceptor from 'axios-auth-refresh';
import { API_ENDPOINT, REFRESH } from './base';

export let accessToken = null;

export const setAccessToken = (token) => {
    accessToken = token;
};

export const createRefreshInterceptor = (axios, dispatchUnauthentication) => {
    createAuthRefreshInterceptor(axios, async (failedRequest) => {
        axios.defaults.withCredentials = true;

        try {
            const response = await axios.post(`${API_ENDPOINT + REFRESH}`);

            if (response) {
                setAccessToken(response.data);
                failedRequest.response.config.headers["authorization"] = `Bearer ${response.data}`;
            }

        } catch (error) {
            dispatchUnauthentication();
        }       
    });
};