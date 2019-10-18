import React, { useEffect } from 'react';
import { setupScene } from './Setup';

const Scene = () => {

    useEffect(setupScene);

    return(
        <canvas id="myCanvas" style={{display: "block"}}/>
    );
}

export default Scene;