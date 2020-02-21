import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Paper, FormGroup, TextField, Button, Typography, Grid } from '@material-ui/core';
import { styles } from './styling/styles';

const Registration = () => {

    const [firstName, setFirstName] = useState({value: null, error: false});
    const [lastName, setLastName] = useState({value: null, error: false});
    const [email, setEmail] = useState({value: null, error: false});
    const [username, setUsername] = useState({value: null, error: false});
    const [password, setPassword] = useState({value: null, error: false});
    const [confirmPassword, setConfirmPassword] = useState({value: null, error: false});
    const [birthday, setBirthday] = useState({value: null, error: false});
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const history = useHistory();

    const handleChange = (event) => {
        switch(event.target.id) {
            case "firstname-input":
                setFirstName({
                    value: event.target.value, 
                    error: validateFirstNameField(event.target.value)
                });
                break;
            case "lastname-input":
                setLastName({
                    value: event.target.value, 
                    error: validateLastNameField(event.target.value)
                });
                break;
            case "email-input":
                setEmail({
                    value: event.target.value, 
                    error: validateEmailField(event.target.value)
                });
                break;
            case "username-input":
                setUsername({
                    value: event.target.value, 
                    error: validateUsernameField(event.target.value)
                });
                break;
            case "password-input":
                setPassword({
                    value: event.target.value, 
                    error: validatePasswordField(event.target.value)
                });
                break;
            case "confirm-password-input":
                setConfirmPassword({
                    value: event.target.value, 
                    error: validateConfirmPasswordField(event.target.value)
                });
                break;
            case "birthday-input":
                setBirthday({
                    value: event.target.value, 
                    error: validateBirthdayField(event.target.value)
                });
                break;
            default:
                break;
        }
    };

    const registerUser = () => {
        console.log("Registering user...");
        console.log(firstName.value);
        console.log(lastName.value);
        console.log(email.value);
        console.log(username.value);
        console.log(password.value);
        console.log(confirmPassword.value);
        console.log(birthday.value);
    };

    const validateFirstNameField = (value) => {
        return !value;
    };

    const validateLastNameField = (value) => {
        return !value;
    };

    const validateEmailField = (value) => {
        return !value;
    };

    const validateUsernameField = (value) => {
        return !value;       
    };

    const validatePasswordField = (value) => {
        return !value;
    };

    const validateConfirmPasswordField = (value) => {
        return !value;
    };

    const validateBirthdayField = (value) => {
        return !value;
    };

    useEffect(() => {
        if (isAuthenticated) history.push("/landing");

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
        <Paper style={styles.container}>
            <FormGroup>
                <Grid container spacing={3} style={styles.grid}>
                    <Grid item xs={6}>
                        <TextField
                            id="firstname-input"
                            label="First name"
                            type="text"
                            margin="normal"
                            variant="standard"
                            fullWidth={true}
                            required={true}
                            onChange={handleChange}
                            error={firstName.error}>
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="lastname-input"
                            label="Last name"
                            type="text"
                            margin="normal"
                            variant="standard"
                            fullWidth={true}
                            required={true}
                            onChange={handleChange}
                            error={lastName.error}>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email-input"
                            label="Email"
                            type="email"
                            margin="normal"
                            variant="standard"
                            fullWidth={true}
                            required={true}
                            onChange={handleChange}
                            error={email.error}>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="username-input"
                            label="Username"
                            type="text"
                            margin="normal"
                            variant="standard"
                            fullWidth={true}
                            required={true}
                            onChange={handleChange}
                            error={username.error}>
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="password-input"
                            label="Password"
                            type="password"
                            margin="normal"
                            variant="standard"
                            fullWidth={true}
                            required={true}
                            onChange={handleChange}
                            error={password.error}>
                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            id="confirm-password-input"
                            label="Confirm"
                            type="password"
                            margin="normal"
                            variant="standard"
                            fullWidth={true}
                            required={true}
                            onChange={handleChange}
                            error={confirmPassword.error}>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="birthday-input"
                            label="Birthday"
                            type="date"
                            margin="normal"
                            variant="standard"
                            fullWidth={true}
                            required={true}
                            InputLabelProps={{
                                shrink: true
                            }}
                            onChange={handleChange}
                            error={birthday.error}>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container item>
                            <Typography><Link style={styles.styledLink} to="/">Already have an account?</Link></Typography>
                        </Grid>
                        <Grid container item justify="flex-end">
                            <Button
                                id="signup-submit-button"
                                variant="contained"
                                color="inherit"
                                style={styles.submitButton}
                                onClick={registerUser}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </FormGroup>
        </Paper>
    );
};

export default Registration;