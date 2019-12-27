import { useEffect } from 'react';
import { setupScene } from './Setup';

const Game = () => {

    useEffect(() => {
        setupScene();

        return () => {
            document.getElementById("myCanvas").remove();
        }
    });

    return(
        null
    );
}

export default Game;