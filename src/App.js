import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import setupAnimation from './utils/landingAnimation';
import { Switch, Route } from "react-router-dom";
import ProtectedRoute from './components/common/protectedRoute/protectedRoute';
import Game from './components/game/game';
import Login from './components/login/login';
import Registration from './components/registration/registration';
import Home from './components/home/home';
import Navbar from './components/common/navbar/navbar';
import './App.css';

const App = () => {

	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

	//When authenticated, remove landing animation from app
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
			{isAuthenticated? <Navbar/> : null}
			<Switch>
				<Route exact path="/" component={Login}/>
				<Route exact path="/registration" component={Registration}/>
				<ProtectedRoute exact path="/game" component={Game}/>
				<ProtectedRoute exact path="/home" component={Home}/>
			</Switch>
		</div>
	);
}

export default App;