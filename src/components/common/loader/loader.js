import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styles } from './styling/styles';

const Loader = () => {

    return (
        <CircularProgress style={styles.container}/>
    );
};

export default Loader;