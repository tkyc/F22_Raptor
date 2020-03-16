import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import { render, fireEvent, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { AUTHENTICATE, AUTH_FETCHING, AUTH_ERROR } from '../utils/redux/actionTypes';
import authenticateLogin from '../utils/redux/actions/authenticateActions';
import Login from '../components/login/login';

//Mocking dependencies
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("axios");

jest.mock("react-router-dom", () => ({
	useHistory: () => ({
		push: jest.fn()
	})
}));

//Tests
describe("My Login.js redux connected component", () => {
	let store;

	beforeEach(() => {
		store = mockStore({auth: {isAuthenticated: false, isFetching: false, error: null}});
	});

	it("should render correctly", () => {
		const loginComponent = renderer.create(<Provider store={store}><Login/></Provider>);
		expect(loginComponent.toJSON()).toMatchSnapshot();
	});

	it("should dispatch action to start authentication", () => {
		const loginComponent = render(<Provider store={store}><Login/></Provider>);
		fireEvent.click(loginComponent.getByTestId("login-button")); //Login button should be present on page
		expect(store.getActions()).toEqual([{type: AUTH_FETCHING}]); //Should change fetching status
	});

	it("should authenticate on good login response", () => {
		const data = {status: 200};
		axios.mockResolvedValueOnce(data);
		store.dispatch(authenticateLogin("username", "password")).then(() => {
			expect(store.getActions()).toEqual([{type: AUTH_FETCHING}, {type: AUTHENTICATE}, {type: AUTH_FETCHING}]);
		});
	});

	it("should not authenticate on bad login response", () => {
		const data = {state: 403, error: "Forbidden"};
		axios.mockRejectedValueOnce(data);
		store.dispatch(authenticateLogin("username", "password")).then(() =>{
			expect(store.getActions()).toEqual([{type: AUTH_FETCHING}, {type: AUTH_ERROR, payload: data}, {type: AUTH_FETCHING}]);
		});
	});
});

