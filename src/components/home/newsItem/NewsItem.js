import React from 'react';
import styles from './styling/styles';
import { Typography, Grid, Hidden, Link } from '@material-ui/core';

const NewsItem = (props) => {

    const { image, title, date, newsId } = props;

    const divider = (
        <div style={styles.divider}>
            <hr style={styles.hr}/><img style={styles.logo} src="/images/divider.png"/><hr style={styles.hr}/>
        </div>
    );

    return (
        <Grid container spacing={4}>
            <Hidden mdDown>
                <Grid item lg={4}>
                    <img style={styles.image} src={image}/>
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={12} lg={8}>
                <Typography variant="h5" style={styles.text} noWrap><Link style={styles.link} to={`/news/${newsId}`}>{title}</Link></Typography>
                <Typography style={styles.text}>{date}</Typography>
            </Grid>
            <Grid item xs={12}>
                {divider}
            </Grid>
        </Grid>
    );
};

export default NewsItem;