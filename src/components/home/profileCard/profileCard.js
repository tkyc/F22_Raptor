import React from 'react';
import { Paper, Avatar, Badge } from '@material-ui/core';
import styles from './styling/styles';
import { MailOutline } from '@material-ui/icons';

const ProfileCard = (props) => {
    return (
        <Paper style={styles.container} elevation={3}>
            <div style={styles.pictureContainer}>
                <Badge color="secondary" badgeContent=" " anchorOrigin={{vertical: "bottom", horizontal: "right"}} overlap="circle">
                    <Avatar style={styles.picture}>
                        {(_ => `${props.firstname.charAt(0) + props.lastname.charAt(0)}`)()}
                    </Avatar>
                </Badge>
            </div>
        </Paper>
    );
};

export default ProfileCard;