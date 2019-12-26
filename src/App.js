import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Scene from './components/game/Scene';
import Login from './components/login/Login';
import './App.css';

const App = () => {
	return (
        <div className="App">
            <canvas id="myCanvas" style={{display: "block"}}/>
			<Router>
				<Switch>
					<Route exact path="/">
   		         		<Login/>
					</Route>
					<Route exact path="/game">
						<Scene/>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;