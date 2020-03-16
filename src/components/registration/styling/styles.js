import React from 'react';
import { styled, TextField, Grid, Paper, Button } from '@material-ui/core';
import NavLink from '../../common/navLink/navlink';

/**
 * CSS for root element of registration component.
 */
const CssContainer = styled("div")({
    position: "absolute",
    width: "90%",
    height: "75%",
    marginTop: "5%",
    left: "5%",
    ['@media (min-width:780px)']: {
        marginTop: "7%",
        width: "50%",
        left: "25%"
    }
});

/**
 * CSS for paper component.
 */
const CssPaper = styled(Paper)({
    backgroundColor: "rgba(0, 0, 0, 0.3)",
});

/**
 * CSS for grid component.
 */
const CssGrid = styled(Grid)({
    padding: "1em 1em 1em 1em",
    ['@media (min-width:780px)']: {
        padding: "2em 2em 2em 2em",
    }
});

/**
 * CSS for buttons on registration component.
 */
export const CssButton = styled(Button)({
    backgroundColor: "#296d98",
    color: "white",
    "&:hover": {
        backgroundColor: "#296d98"
    }
});

/**
 * Registration component's text fields.
 *  
 * @param {string} id - Field id.
 * @param {string} label - Field label.
 * @param {string} type - Field input type.
 * @param {function} onChange - Function to be called on input change.
 * @param {boolean} error - Indicates error.
 * @param {number} xs - Measures width of text field. Valid values are from 1 to 12. 12 is max width.
 * @param {string} helperText - Error message.
 * @param {boolean} shrink - Boolean indicating to shrink label text.
 */
export const MyCssTextField = ({id, label, type, onChange, error, xs, helperText, shrink}) => (
    <Grid item xs={xs}>
        <TextField
            id={id}
            data-testid={id}
            label={label}
            type={type}
            margin="normal"
            variant="standard"
            fullWidth
            required
            inputProps={{style: {fontSize: "1.3em"}}}
            onChange={onChange}
            error={error}
            helperText={helperText}
            InputLabelProps={{shrink: shrink}}/>
    </Grid>
);

/**
 * Root element of registration component.
 *  
 * @param {*} children - Children components.
 */
export const MyCssContainer = ({children}) => (
    <CssContainer>
        <CssPaper>
            <CssGrid container spacing={3}>
                {children}
            </CssGrid>
        </CssPaper>
    </CssContainer>
);

/**
 * Link/anchor
 *  
 * @param {function} onClick - Function to be called on click -- must be navigation function. (Not using react router Link because of unit testing issues)
 */
export const  MyCssNavLink = ({onClick, text}) => (
    <NavLink onClick={onClick} text={text} style={{color: "blue"}}/>
);