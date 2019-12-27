import React, { useEffect } from 'react';
import { Paper, Container, FormGroup, Button, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { styles, CssTextField} from './styling/Styles';
import { setupLoginAnimation, disposeScene } from './styling/Setup';

const Login = () => {

    useEffect(() => {
        setupLoginAnimation();

        return () => {
            document.getElementById("myCanvas").remove();
        }
    });

    return(
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
                        />
                        <CssTextField
                            id="password-input"
                            label="Password"
                            type="password"
                            margin="normal"
                            variant="filled"
                            fullWidth={true}
                            inputProps={{style: styles.loginInput}}
                        />
                        <Button
                            id="login-button"
                            variant="contained"
                            color="inherit"
                            style={styles.playButton}>
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