import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import setupAnimation from './utils/landingAnimation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from './components/common/protectedRoute/protectedRoute';
import Game from './components/game/game';
import Login from './components/login/login';
import Registration from './components/registration/registration';
import Home from './components/home/home';
import './App.css';

const App = () => {

	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	useEffect(() => {
		if (!isAuthenticated) {
			setupAnimation();
		} else {
			const canvas = document.getElementById("myCanvas");
			if (canvas) canvas.remove();
		}
	}, [isAuthenticated]);

	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={Login}/>
					<Route exact path="/game" component={Game}/>
					<Route exact path="/registration" component={Registration}/>
					<ProtectedRoute exact path="/home" component={Home}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;