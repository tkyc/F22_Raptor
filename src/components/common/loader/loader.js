import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { styles } from './styling/styles';

const Loader = () => {

    return (
        <div style={styles.container}>
            <CircularProgress style={styles.progress} color="secondary"/>
        </div>
    );
};

export default Loader;