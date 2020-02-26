import React from 'react';
import styles from './styling/styles';
import { Typography, Grid } from '@material-ui/core';

const NewsItem = (props) => {

    const { image, title, date } = props;

    return (
        <Grid container spacing={1}>
            <Grid item md={6} lg={5} xlg={4}>
                <img style={styles.image} src={image}/>
            </Grid>
            <Grid item md={6} lg={7} xlg={8}>
                <Typography variant="h6" style={styles.text}>{title}</Typography>
                <hr style={styles.divider}/>
                <Typography style={styles.text}>{date}</Typography>
            </Grid>
        </Grid>
    );
};

export default NewsItem;