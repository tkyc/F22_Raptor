import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authenticateLogin from '../../utils/redux/actions/authenticateActions';
import { FormGroup, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Loader from '../common/loader/loader';
import { MyCssTextField, MyCssButton, MyCssNavLink, CssContainer, CssPaper } from './styling/styles';

/**
 * Login component. The container with a username and password field.
 * Animation is rendered on application mount in App.js.
 */
const Login = () => {

    /**
     * Username field.
     * value - Input from username field.
     * error - Boolean indicating error.
     */
    const [username, setUsername] = useState({value: null, error: false});

    /**
     * Password field.
     * value - Input from password field.
     * error - Boolean indicating error.
     */
    const [password, setPassword] = useState({value:null, error: false});

    /**
     * Boolean from redux store indicating if user was authenticated.
     */
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    /**
     * Boolean from redux store indicating if authentication is processing.
     */
    const isFetching = useSelector(state => state.auth.isFetching);

    /**
     * Hook used to dispatch actions.
     */
    const dispatch = useDispatch();

    /**
     * Object containing URLs user visited.
     */
    const history = useHistory();

    /**
     * Function to be called on input change for username and password fields.
     *  
     * @param {EventTarget} event - Input from username or password login fields.
     */
    const handleChange = (event)=> {
        switch(event.target.id) {
            case "username-input":
                setUsername({
                    value: event.target.value, error: !event.target.value
                });
                break;
            case "password-input":
                setPassword({
                    value: event.target.value, error: !event.target.value
                });
                break;
            default:
                break;
        }
    };

    /**
     * Dispatch action to authenticate user.
     */
    const authenticateUserLogin = () => {
        dispatch(authenticateLogin(username.value, password.value));
    };

    /**
     * Navigate to registration page. (Not using react router Link b/c of unit testing issues)
     */
    const gotoRegistration = () => {
        history.push("/registration");
    };

    /**
     * Navigate/launch game. (Not using react router Link b/c of unit testing issues)
     */
    const gotoGame = () => {
        history.push("/game");
    };

    /**
     * On unmount set erase login fields.
     */
    useEffect(() => {
        return () => {
            setUsername(null);
            setPassword(null);
        }
    }, []);

    /**
     * If authentication is processing check if user is authenticated.
     * If authenticated goto home page.
     */
    useEffect(() => {
        if (isAuthenticated) history.push("/home");
    }, [isFetching]);

    return (
        isFetching? <Loader/> :
        <CssContainer maxWidth="xs">
            <CssPaper>
                <FormGroup>
                    <MyCssTextField id="username-input" label="Username" type="text"     onChange={handleChange} error={username.error}/>
                    <MyCssTextField id="password-input" label="Password" type="password" onChange={handleChange} error={password.error}/>
                    <MyCssButton    id="login-button"   onClick={authenticateUserLogin}  text="Login"/>
                    <MyCssButton    id="guest-button"   onClick={gotoGame}               text="Guest"/>
                </FormGroup>
            </CssPaper>
            <CssPaper>
                <Typography>
                    Don't have an account? <MyCssNavLink onClick={gotoRegistration} text="Sign up"/>
                </Typography>
            </CssPaper>
        </CssContainer>
    );
};

export default Login;
