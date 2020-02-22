import axios from 'axios';
import { accessToken, createRefreshInterceptor } from '../../access';
import { API_ENDPOINT, USER_DETAILS } from '../../base';
import { FETCH_DETAILS, USER_FETCHING, USER_ERROR } from '../actionTypes';
import { setAuthenticationStatus } from '../actions/authenticateActions'

const setUserDetails = (userDetails) => {
    return {type: FETCH_DETAILS, payload: userDetails};
};

const setFetchingStatus = () => {
    return {type: USER_FETCHING};
};

const setError = (error) => {
    return {type: USER_ERROR, payload: error};
};

const fetchUserDetails = () => {
    return async (dispatch, state) => {
        let response;

        dispatch(setFetchingStatus()); //Fetching is true
        createRefreshInterceptor(axios, () => dispatch(setAuthenticationStatus()));

        try {
            response = await axios({
                method: "GET",
                url: `${API_ENDPOINT + USER_DETAILS}`,
                headers: {"authorization": `Bearer ${accessToken}`}
            });
        } catch (error) {
            if (!accessToken) dispatch(setError(error));
        } finally {
            if (response) dispatch(setUserDetails(response.data));
            dispatch(setFetchingStatus()); //Fetching is false
        }
    }
};

export default fetchUserDetails;