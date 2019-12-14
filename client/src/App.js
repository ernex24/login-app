import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Category from './components/layout/Category';
import Ad from './components/layout/ad';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import './App.css';
import NavbarCategory from './components/layout/NavbarCategory';

import Profile from './components/layout/Profile';

const App = (props) => { 

	return (

	<Router>
			<Navbar />
			<NavbarCategory />
			<section className="main_wrapper">
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/category/:slug" component={Category} />
					<Route exact path="/ad/:slug" component={Ad} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/profile" component={Profile} />
				</Switch>
			</section>
	</Router>

	)
};

export default App;
