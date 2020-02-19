import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticateLogin, setAuthenticationStatus } from '../../utils/redux/actions/authenticateActions';
import { Paper, Container, FormGroup, Button, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styles, CssTextField} from './styling/styles';

const Login = () => {

    const [username, setUsername] = useState({value: null, error: false});
    const [password, setPassword] = useState({value:null, error: false});
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const handleChange = (event)=> {
        switch(event.target.id) {
            case "username-input":
                setUsername({
                    value: event.target.value, error: validateUsername(event.target.value)
                });
                break;
            case "password-input":
                setPassword({
                    value: event.target.value, error: validatePassword(event.target.value)
                });
                break;
            default:
                break;
        }
    };

    const login = () => {
        dispatch(authenticateLogin(username.value, password.value));
    };

    const validateUsername = (value) => {
        return !value;
    }

    const validatePassword = (value) => {
        return !value;
    }

    useEffect(() => {
        return () => {
            setUsername(null);
            setPassword(null);
        }
    }, []);

    return (
            <Container maxWidth="xs" style={styles.container}>
                <Paper style={styles.playPaperBox}>
                    <FormGroup>
                        <CssTextField
                            id="username-input"
                            label="Username"
                            type="text"
                            margin="normal"
                            variant="filled"
                            fullWidth={true}
                            inputProps={{style: styles.loginInput}}
                            onChange={handleChange}
                            error={username.error}/>
                        <CssTextField
                            id="password-input"
                            label="Password"
                            type="password"
                            margin="normal"
                            variant="filled"
                            fullWidth={true}
                            inputProps={{style: styles.loginInput}}
                            onChange={handleChange}
                            error={password.error}/>
                        <Button
                            id="login-button"
                            variant="contained"
                            color="inherit"
                            style={styles.playButton}
                            onClick={login}>
                            Login
                        </Button>
                        <Button
                            id="guest-button"
                            variant="contained"
                            color="inherit"
                            style={styles.playButton}
                            component={Link}
                            to="/game">
                            Guest
                        </Button>
                    </FormGroup>
                </Paper>
                <Paper style={styles.playPaperBox}>
                    <Typography>
                        Don't have an account? <Link to="/registration" style={styles.styledLink}>Sign up</Link>
                    </Typography>
                </Paper>
            </Container>
    );
}

export default Login;