import { useEffect } from 'react';
import { setupScene } from './setup';

const Game = () => {

    useEffect(() => {
        //Remove landing animation
        try {
            document.getElementById("myCanvas").remove();
        } catch (exception) {
            console.log("Landing animation canvas does not exist");
        }

        //Setup game scene
        setupScene();

        return () => {
            //Remove game scene
            document.getElementById("myCanvas").remove();
        }
    });

    return(
        null
    );
};

export default Game;