import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Paper, FormGroup, TextField, Button, Typography, Grid } from '@material-ui/core';
import { styles } from './styling/Styles';

const Registration = () => {

    useEffect(() => {
        return () => {
            try {
                document.getElementById("myCanvas").remove();
            } catch (exception) {
                console.log("Canvas does not exist.")
            }
        }
    });

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
                            required={true}>
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
                            required={true}>
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
                            required={true}>
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
                            required={true}>
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
                            required={true}>
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
                            required={true}>
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
                            }}>
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
                                style={styles.submitButton}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </FormGroup>
        </Paper>
    );
}

export default Registration;