import React, { useEffect } from 'react';
import { Paper, TextField, Container, FormGroup, Button } from '@material-ui/core';
import styles from './styling/Styles';
import { setupLoginAnimation } from './styling/Setup';

const Login = () => {

    useEffect(setupLoginAnimation);

    return(
            <Container maxWidth="xs" style={styles.container}>
                <Paper style={styles.loginBox}>
                    <FormGroup>
                        <TextField
                            id="username-input"
                            label="Username"
                            type="text"
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                        />
                        <TextField
                            id="password-input"
                            label="Password"
                            type="password"
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                        />
                        <Button
                            id="login-button"
                            className="buttons"
                            variant="contained"
                            color="primary"
                            style={styles.loginButton}>
                            Login
                        </Button>
                        <Button
                            id="register-button"
                            className="buttons"
                            variant="contained"
                            color="primary"
                            style={styles.registerButton}>
                            Register
                        </Button>
                        <Button
                            id="guest-button"
                            className="buttons"
                            variant="contained"
                            color="primary"
                            style={styles.guestButton}>
                            Guest
                        </Button>
                    </FormGroup>
                </Paper>
              <canvas id="myCanvas" style={{display: "block"}}/>
            </Container>
    );
}

export default Login;
