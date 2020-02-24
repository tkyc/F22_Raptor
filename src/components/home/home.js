import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUserDetails from '../../utils/redux/actions/userDetailsActions';
import { Grid, Paper } from '@material-ui/core';
import Loader from '../common/loader/loader'
import ProfileCard from './profileCard/profileCard';
import styles from './styling/styles';

const Home = () => {

    const userDetails = useSelector(state => state.user.details);
    const isFetchingUserDetails = useSelector(state => state.user.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserDetails());
        console.log(userDetails)
    }, []);

    return (
        isFetchingUserDetails? <Loader/> :
        <Grid container spacing={3} style={styles.container}>
            <Grid item xs={3}>
                <ProfileCard firstname={userDetails.firstname} lastname={userDetails.lastname}/>
            </Grid>
        </Grid>
    );
};

export default Home;