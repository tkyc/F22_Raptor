import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Landing = () => {

    const state = useSelector(state => state);

    useEffect(() => {
        console.log(state);
    });

    return (
        <div>Landing page</div>
    );
};

export default Landing;