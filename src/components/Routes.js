import React from 'react';
import App from './App';
import Signup from './Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/signup" component={Signup} />
			</Switch>
		</BrowserRouter>
	);
}
