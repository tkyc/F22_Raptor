import axios from 'axios';
import { accessToken, createRefreshInterceptor } from '../../access';
import { API_ENDPOINT, USER_DETAILS } from '../../base';
import { FETCH_DETAILS, USER_FETCHING, USER_ERROR } from '../actionTypes';
import { setAuthenticationStatus } from '../actions/authenticateActions'

const setUserDetails = (userDetails) => {
    return {type: FETCH_DETAILS, payload: userDetails};
};

const setFetchingStatus = (fetch) => {
    return {type: USER_FETCHING, payload: fetch};
};

const setError = (error) => {
    return {type: USER_ERROR, payload: error};
};

const fetchUserDetails = () => {
    return async (dispatch, state) => {
        let response;

        dispatch(setFetchingStatus(true));
        createRefreshInterceptor(axios, () => dispatch(setAuthenticationStatus()));

        try {
            response = await axios({
                method: "GET",
                url: `${API_ENDPOINT + USER_DETAILS}`,
                headers: {"authorization": `Bearer ${accessToken}`}
            });
        } catch (error) {
            //if (!accessToken && !state.user.details) dispatch(setError(error));
            dispatch(setError(error));
        } finally {
            if (response) {
                dispatch(setError(null)); //Successfull response, erase previous error
                dispatch(setUserDetails(response.data));
            }

            dispatch(setFetchingStatus(false));
        }
    }
};

export default fetchUserDetails;