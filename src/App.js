import React, { Component } from 'react';

import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Form from './component/Form/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<div className="body-content">
						<Switch>
							<Route exact path="/" component={Dashboard} />
							<Route path="/new-product-form" component={Form} />
							<Route path="/edit-product-form/:id" component={Form} />
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;