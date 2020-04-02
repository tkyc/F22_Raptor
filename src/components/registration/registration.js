import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { MyCssTextField, MyCssContainer, MyCssNavLink, CssButton } from './styling/styles';

/**
 * Registration component. The form with input fields.
 * Animation is rendered on application mount in App.js.
 */
const Registration = () => {

    /**
     * First name field.
     * value - Input from first name field.
     * error - Boolean indicating error.
     * helperText - Error messsage.
     */
    const [firstName, setFirstName] = useState({value: null, error: false, helperText: null});

    /**
     * Last name field.
     * value - Input from last name field.
     * error - Boolean indicating error.
     * helperText - Error messsage.
     */
    const [lastName, setLastName] = useState({value: null, error: false, helperText: null});

    /**
     * Email field.
     * value - Input from email field.
     * error - Boolean indicating error.
     * helperText - Error messsage.
     */
    const [email, setEmail] = useState({value: null, error: false, helperText: null});

    /**
     * Username field.
     * value - Input from username field.
     * error - Boolean indicating error.
     * helperText - Error messsage.
     */
    const [username, setUsername] = useState({value: null, error: false, helperText: null});

    /**
     * Password field.
     * value - Input from password field.
     * error - Boolean indicating error.
     * helperText - Error messsage.
     */
    const [password, setPassword] = useState({value: null, error: false, helperText: null});

    /**
     * Confirm password field.
     * value - Input from confirm password field.
     * error - Boolean indicating error.
     * helperText - Error messsage.
     */
    const [confirmPassword, setConfirmPassword] = useState({value: null, error: false, helperText: null});

    /**
     * Birthday field.
     * value - Input from birthday field.
     * error - Boolean indicating error.
     * helperText - Error messsage.
     */
    const [birthday, setBirthday] = useState({value: null, error: false, helperText: null});

    /**
     * Boolean from redux store that indicates whether the user was authenticated.
     */
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    /**
     * Object that contains URLs visited by user.
     */
    const history = useHistory();

    /**
     * Registers user by dispatching action to make API call.
     */
    const registerUser = () => {
        const hasInvalidFields = validateFormFields();
        console.log(hasInvalidFields);
        //TODO
    };

    /**
     * Validates user's first name.
     * 
     * @param {EventTarget} event - Input from first name form field.
     * @returns {boolean} - True if invalid, otherwise false.
     */
    const validateFirstNameField = (event) => {
        const input = event? event.target.value : firstName.value;
        const re = /^[A-Za-z]+-*'*[A-Za-z]$/;
        const isInvalid = !input || !re.test(input);
        setFirstName({value: input, error: isInvalid, helperText: isInvalid? "Invalid first name" : null});
        return isInvalid;
    };

    /**
     * Validates user's last name.
     * 
     * @param {EventTarget} event - Input from last name form field.
     * @returns {boolean} - True if invalid, otherwise false.
     */
    const validateLastNameField = (event) => {
        const input = event? event.target.value : lastName.value;
        const re = /^[A-Za-z]+-*'*[A-Za-z]$/;
        const isInvalid = !input || !re.test(input);
        setLastName({value: input, error: isInvalid, helperText: isInvalid? "Invalid last name" : null});
        return isInvalid;
    };

    /**
     * Validates user's email.
     * 
     * @param {EventTarget} event - Input from the email form field.
     * @returns {boolean} - True if invalid, otherwise false.
     */
    const validateEmailField = (event) => {
        const input = event? event.target.value : email.value;
        const re = /^[A-Za-z]+[A-Za-z0-9]*((-|_|\.)[A-Za-z0-9]+)*@{1}[A-Za-z]+\.[A-Za-z]{2,3}$/;
        const isInvalid = !input || !re.test(input);
        setEmail({value: input, error: isInvalid, helperText: isInvalid? "Invalid email" : null});
        return isInvalid;
    };

    /**
     * Validates user's username.
     * 
     * @param {EventTarget} event - Input from the username form field.
     * @returns {boolean} - True if invalid, otherwise false.
     */
    const validateUsernameField = (event) => {
        const input = event? event.target.value : username.value;
        const re = /^[A-Za-z]+[A-Za-z0-9]*((-|_|\.)[A-Za-z0-9]+)*$/;
        const isInvalid = !input || !re.test(input);
        setUsername({value: input, error: isInvalid, helperText: isInvalid? "Invalid username" : null});
        return isInvalid;
    };

    /**
     * Validates user's password.
     *  
     * @param {EventTarget} event - Input from the password form field.
     * @returns {boolean} - True if invalid, otherwise false.
     */
    const validatePasswordField = (event) => {
        const input = event? event.target.value : password.value;
        const re = /.{8,}/;
        const isInvalid = !input || !re.test(input);
        setPassword({value: input, error: isInvalid, helperText: isInvalid? "Invalid password -- must be longer" : null});
        return isInvalid;
    };

    /**
     * Confirms password.
     *  
     * @param {EventTarget} event - Input from the confirm password form field.
     * @returns {boolean} - True if invalid, otherwise false.
     */
    const validateConfirmPasswordField = (event) => {
        const input = event? event.target.value : confirmPassword.value;
        const isInvalid = !input || !(input === password.value);
        setConfirmPassword({value: input, error: isInvalid, helperText: isInvalid? "Passwords do not match" : null});
        return isInvalid;
    };

    /**
     * Validates user's birthday.
     *  
     * @param {EventTarget} event - Input from the birthday form field.
     * @returns {boolean} - True if invalid, otherwise false.
     */
    const validateBirthdayField = (event) => {
        const input = event? event.target.value : birthday.value;
        setBirthday({value: input, error: !input, helperText: !input? "Please select your birth date" : null});
        return !input;
    };

    /**
     * Validates all form fields. Meant to be called before submission.
     * Declaring and assigning b/c of short-circuit.
     * 
     * @returns {boolean} - True if invalid, otherwise false.
     */
    const validateFormFields = () => {
        //TODO - Maybe allow short-circuit b/c the warning text for fields stretches container height
        const fnField = validateFirstNameField();
        const lnField = validateLastNameField();
        const emField = validateEmailField();
        const unField = validateUsernameField();
        const pwField = validatePasswordField();
        const cpField = validateConfirmPasswordField();
        const bdField = validateBirthdayField();
        return fnField || lnField || emField || unField || pwField || cpField || bdField;
    };

    /**
     * Navigates to login page.
     */
    const gotoLogin = () => {
        history.push("/");
    };

    /**
     * If user is authenticated, navigating to registration page will navigate user back home.
     * On unmount erase form fields.
     */
    useEffect(() => {
        if (isAuthenticated) history.push("/home");

        return () => {
            setFirstName(null);
            setLastName(null);
            setEmail(null);
            setUsername(null);
            setPassword(null);
            setConfirmPassword(null);
            setBirthday(null);
        }
    }, []);

    return (
        <MyCssContainer>
            <MyCssTextField id="firstname-input"        label="First name" type="text"     onChange={validateFirstNameField}       error={firstName.error}       helperText={firstName.helperText}       xs={6}/>
            <MyCssTextField id="lastname-input"         label="Last name"  type="text"     onChange={validateLastNameField}        error={lastName.error}        helperText={lastName.helperText}        xs={6}/>
            <MyCssTextField id="email-input"            label="Email"      type="email"    onChange={validateEmailField}           error={email.error}           helperText={email.helperText}           xs={12}/>
            <MyCssTextField id="username-input"         label="Username"   type="text"     onChange={validateUsernameField}        error={username.error}        helperText={username.helperText}        xs={12}/>
            <MyCssTextField id="password-input"         label="Password"   type="password" onChange={validatePasswordField}        error={password.error}        helperText={password.helperText}        xs={6}/>
            <MyCssTextField id="confirm-password-input" label="Confirm"    type="password" onChange={validateConfirmPasswordField} error={confirmPassword.error} helperText={confirmPassword.helperText} xs={6}/>
            <MyCssTextField id="birthday-input"         label="Birthday"   type="date"     onChange={validateBirthdayField}        error={birthday.error}        helperText={birthday.helperText}        xs={12} shrink={true}/>
            <Grid item xs={12}>
                <Grid container item>
                    <MyCssNavLink onClick={gotoLogin} text="Already have an account?"/>
                </Grid>
                <Grid container item justify="flex-end">
                    <CssButton id="signup-button" variant="contained" color="inherit" onClick={registerUser}>Submit</CssButton>
                </Grid>
            </Grid>
        </MyCssContainer>
    );
};

export default Registration;