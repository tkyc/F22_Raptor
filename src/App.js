import React, { useEffect } from 'react';
import setupAnimation from './utils/landingAnimation';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './utils/redux/store';
import Game from './components/game/game';
import Login from './components/login/login';
import Registration from './components/registration/registration';
import './App.css';

const App = () => {

	useEffect(() => {
		setupAnimation();
	});

	return (
		<Provider store={store}>
	        <div className="App">
				<Router>
					<Switch>
						<Route exact path="/" component={Login}/>
	                    <Route exact path="/game" component={Game}/>
	                    <Route exact path="/registration" component={Registration}/>
					</Switch>
				</Router>
			</div>
		</Provider>
	);
}

export default App;
