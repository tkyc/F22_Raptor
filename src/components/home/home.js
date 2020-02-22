import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchUserDetails from '../../utils/redux/actions/userDetailsActions';
import { styles } from './styling/styles';
import { accessToken } from '../../utils/access';

const Home = () => {

    const state = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(state);
        dispatch(fetchUserDetails());
    }, []);

    const btn = () => {
        //dispatch(fetchUserDetails());
        console.log(state)
    };

    return (
        <div style={styles.container}>
            <button onClick={btn}>Test</button>
        </div>
    );
};

export default Home;