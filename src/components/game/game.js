import { useEffect } from 'react';
import { setupScene } from './setup';

const Game = () => {

    useEffect(() => {
        //Setup game scene
        setupScene();

        return () => {
            //Remove game scene
            document.getElementById("gameCanvas").remove();
        }
    });

    return(
        null
    );
};

export default Game;
