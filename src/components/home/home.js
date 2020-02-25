import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUserDetails from '../../utils/redux/actions/userDetailsActions';
import { Grid, Paper } from '@material-ui/core';
import ProfileCard from './profileCard/profileCard';
import Loader from '../common/loader/loader';
import styles from './styling/styles';

const Home = () => {

    const userDetails = useSelector(state => state.user.details);
    const isFetching = useSelector(state => state.user.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        //Incase another component makes the call
        if (!isFetching && !userDetails) dispatch(fetchUserDetails());
    }, []);

    return (
        isFetching || !userDetails? <Loader/> :
        <Grid container spacing={3} style={styles.container}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={3}>
            </Grid>
        </Grid>
    );
};

export default Home;