import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Game from './components/game/Game';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import './App.css';

const App = () => {
	return (
        <div className="App">
			<Router>
				<Switch>
					<Route exact path="/"><Login/></Route>
                    <Route exact path="/game"><Game/></Route>
                    <Route exact path="/registration"><Registration/></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
