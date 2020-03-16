import React from 'react';
import { styled, withStyles, TextField, Container, Paper, Button } from '@material-ui/core';
import NavLink from '../../common/navLink/navlink';

/**
 * CSS for login fields.
 */
const CssTextField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "black"
        }
    }
})(TextField);

/**
 * CSS for buttons on login component.
 */
const CssButton = styled(Button)({
    backgroundColor: "#296d98",
    color: "white",
    marginTop: "5%",
    "&:hover": {
        backgroundColor: "#296d98"
    }
});

/**
 * Root element for login component.
 */
export const CssContainer = styled(Container)({
    position: "absolute",
    top: "25vh",
    left: "50%", 
    transform: "translateX(-50%)" //Left and transform properties to centre an absolutely positioned element
});

/**
 * CSS for MUI paper component.
 */
export const CssPaper = styled(Paper)({
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    padding: "1.5em",
    marginBottom: "5%"
});

/**
 * Login component form fields.
 * 
 * @param {string} id - Field id.
 * @param {string} label - Field label.
 * @param {string} type - Field input type.
 * @param {function} onChange - Function to be called on input change.
 * @param {error} error - Boolean indicating error.
 */
export const MyCssTextField = ({id, label, type, onChange, error}) => (
    <CssTextField
        id={id}
        data-testid={id}
        label={label}
        type={type}
        margin="normal"
        variant="filled"
        fullWidth
        inputProps={{style: {fontSize: "1.3em"}}}
        onChange={onChange}
        error={error}/>
);

/**
 * Buttons on login component.
 *  
 * @param {string} id - Button id.
 * @param {onClick} onClick - Function to be called on button click.
 * @param {string} text - Button name/label.
 */
export const MyCssButton = ({id, onClick, text}) => (
    <CssButton
        id={id}
        data-testid={id}
        variant="contained"
        color="inherit"
        onClick={onClick}>
        {text}
    </CssButton>
);

/**
 * Link/anchor.
 * 
 * @param {onClick} onClick - Function to be called on link click.
 * @param {string} text - Link text.
 */
export const MyCssNavLink = ({onClick, text}) => (
    <NavLink onClick={onClick} text={text} style={{color: "blue"}}/>
);